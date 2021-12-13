import { randomUUID } from "crypto";
import { Knex } from "knex";
import { User } from "../../../interfaces/user.interface";
import { $users, UserFactory } from "../../../models/user/user.repository";
import { $postgres } from "../../../services/postgres";
import { $bcrypt } from "../../../utils/bcrypt";
import { $logger } from "../../../utils/logger";

export async function createUser(
    data: Pick<User, "email" | "firstName" | "lastName" | "password">,
    session: Knex = $postgres,
): Promise<User> {
    let user = UserFactory({
        ...data,
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        password: await $bcrypt.generate(data.password!),
    });

    await $users.knex(session).insert(user);

    $logger.debug({ userId: user.id }, "user created");

    return user;
}
