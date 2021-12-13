import { Knex } from "knex";
import { createUser } from "../controllers/users/create-user/create-user";
import { $config } from "../utils/config";
export async function up(knex: Knex): Promise<void> {
    await createUser(
        {
            email: $config.superAdminEmail,
            password: $config.superAdminPassword,
        },
        knex,
    );
}

export async function down(knex: Knex): Promise<void> {}
