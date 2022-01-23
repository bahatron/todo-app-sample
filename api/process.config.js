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
            watch: process.env.NODE_ENV === "production" ? undefined : ["dist"],
            exec_mode: "cluster",
            instances: "3",
        },
    ].map((app) => ({ ...app, ...LOG_OPTIONS })),
};
