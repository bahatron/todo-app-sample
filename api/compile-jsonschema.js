require("ts-node").register();
const { compile } = require("json-schema-to-typescript");
const { readdirSync, writeFile, lstatSync } = require("fs");
const { resolve, basename } = require("path");

function getDirFiles(path) {
    return readdirSync(path)
        .reduce((files, name) => {
            const url = `${path}/${name}`;
            return lstatSync(url).isDirectory()
                ? files.concat(getDirFiles(url))
                : files.concat([url]);
        }, [])
        .filter((fileName) => fileName.endsWith(".schema.ts"))
        .map((path) => resolve(path));
}

function compileInterface(path) {
    let fileName = basename(path).split(".").shift();
    let targetPath = resolve(
        process.cwd(),
        "./src/interfaces",
        basename(path).replace(".schema.ts", ".interface.ts"),
    );

    let schema = require(path).default;
    if (!schema) {
        return;
    }

    return new Promise((resolve) => {
        compile(schema, fileName)
            .then((compiledInterface) => {
                console.log({
                    fileName,
                    targetPath,
                });

                return writeFile(targetPath, compiledInterface, resolve);
            })
            .then(() => console.log(`compiled ts interface from: ${path}`))
            .catch(console.error);
    });
}

Promise.all(
    getDirFiles(resolve(__dirname, "./src")).map(compileInterface),
).then(() => {
    console.log(`JSON Schemas compiled to TypeScript`);
});
