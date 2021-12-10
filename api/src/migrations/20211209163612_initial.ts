import { Knex } from "knex";

export const USER_TABLE = "users";
export const TODO_TABLE = "todos";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(USER_TABLE, (table) => {
        table.string("id").primary();
        table.string("email").unique();
        table.string("firstName");
        table.string("lastName");
        table.string("password");
    });

    await knex.schema.createTable(TODO_TABLE, (table) => {
        table.string("id").primary();
        table.string("userId");
        table.timestamp("createdAt").notNullable();
        table.timestamp("updatedAt");
        table.text("note");

        table.index("userId");
    });
}

export async function down(knex: Knex): Promise<void> {}
