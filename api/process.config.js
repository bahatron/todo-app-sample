const LOG_OPTIONS = {
    out_file: "/dev/null",
    error_file: "/dev/null",
};

module.exports = {
    apps: [
        {
            name: "schema:watch",
            script: "npm",
            args: ["run", "schema:compile"],
            autorestart: false,
            watch: ["src/**/*.schema.ts"],
            ignore_watch: ["**/*.interface.ts"],
        },
        {
            name: "api-server",
            script: "dist/bin/api-server.js",
            watch: ["dist"],
        },
    ].map((app) => ({ ...app, ...LOG_OPTIONS })),
};
