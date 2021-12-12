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

function compileTsInterface(path, schema, fileName) {
    let targetPath = resolve(
        process.cwd(),
        "./src/interfaces",
        basename(path).replace(".schema.ts", ".interface.ts"),
    );

    return new Promise((resolve) => {
        compile(schema, fileName)
            .then((compiledInterface) => {
                return writeFile(targetPath, compiledInterface, resolve);
            })
            .then(() => console.log(`compiled ts interface from: ${path}`))
            .catch(console.error);
    });
}

function compileSchema(path) {
    let fileName = basename(path).split(".").shift();

    let schema = require(path).default;
    if (!schema) {
        return;
    }

    return Promise.all([compileTsInterface(path, schema, fileName)]);
}

Promise.all(getDirFiles(resolve(__dirname, "./src")).map(compileSchema)).then(
    () => {
        console.log(`JSON Schemas compiled successfully`);
    },
);
