module.exports = {
    settings: {
        "vetur.useWorkspaceDependencies": true,
    },
    projects: [
        {
            root: "./web",
            tsconfig: "./tsconfig.json",
            package: "./package.json",
        },
    ],
};
