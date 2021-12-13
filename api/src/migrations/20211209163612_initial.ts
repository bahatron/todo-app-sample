import { Knex } from "knex";

export const USER_TABLE = "users";
export const NOTES_TABLE = "notes";

export async function up(knex: Knex): Promise<void> {
    await knex.transaction(async (trx) => {
        await trx.schema.createTable(USER_TABLE, (table) => {
            table.string("id").primary();
            table.string("email").unique();
            table.string("firstName");
            table.string("lastName");
            table.string("password").notNullable();
            table.timestamp("createdAt").notNullable();
            table.timestamp("updatedAt");

            table.index("email");
        });

        await trx.schema.createTable(NOTES_TABLE, (table) => {
            table.string("id").primary();
            table.string("userId");
            table.timestamp("createdAt").notNullable();
            table.timestamp("updatedAt");
            table.string("header");
            table.text("body");

            table.index("userId");
        });
    });
}

export async function down(knex: Knex): Promise<void> {}
