import knex, { Knex } from "knex";
import { resolve } from "path";
import { $config } from "../utils/config";

export const CONFIG: Knex.Config = {
    client: "pg",
    connection: $config.databaseUrl ?? {
        host: $config.postgresHost,
        port: $config.postgresPort,
        user: $config.postgresUser,
        password: $config.postgresPassword,
        database: $config.postgresDatabase,
    },
    migrations: {
        tableName: "migrations",
        directory: resolve(__dirname, "../migrations"),
        extension: "ts",
    },
};

export const $postgres = knex(CONFIG);
