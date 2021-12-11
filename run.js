#!/usr/bin/env node

const { execSync } = require("child_process");
const exit = (code) => process.exit(code);
const exec = (command, env) => execSync(command, { stdio: [0, 1, 2], env });
const argv = process.argv.slice(2);
const argsContains = (flag) => {
    return Array.isArray(flag)
        ? flag.some((val) => argv.includes(val))
        : argv.includes(flag);
};

const TILT_COMPOSE = "docker-compose.tilt.yml";

function shutDown() {
    exec(`docker-compose -f ${TILT_COMPOSE} down --remove-orphans --volumes`);
    exec(`test $(command -v tilt) && tilt down`);
}

if (argsContains("setup")) {
    if (argsContains(["-c", "--clean"])) {
        exec("npx lerna clean -y");
    }

    exec("npm install");
    exit(0);
}

/**
 * @description: starts the local dev environment
 */
if (argsContains("down")) {
    shutDown();
    exit(0);
}

/**
 * @description: starts the local dev environment
 */
if (argsContains(["up", "dev"])) {
    if (argsContains(["-c", "--clean"])) {
        shutDown();
    }

    exec(`tilt up --hud`);
    shutDown();
    exit(0);
}
