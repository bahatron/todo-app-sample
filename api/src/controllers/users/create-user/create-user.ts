import { randomUUID } from "crypto";
import { User } from "../../../interfaces/user.interface";
import { $users, UserFactory } from "../../../models/user/user.repository";
import { $bcrypt } from "../../../utils/bcrypt";
import { $logger } from "../../../utils/logger";

export async function createUser(
    data: Pick<User, "email" | "firstName" | "lastName" | "password">,
): Promise<User> {
    let user = UserFactory({
        ...data,
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        password: await $bcrypt.generate(data.password!),
    });

    await $users.knex().insert(user);

    $logger.debug({ userId: user.id }, "user created");

    return user;
}
