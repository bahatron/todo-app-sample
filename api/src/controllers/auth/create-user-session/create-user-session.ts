import { $users } from "../../../models/user/user.repository";
import { Error } from "@bahatron/utils";
import { $logger } from "../../../utils/logger";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { $config } from "../../../utils/config";

export async function createSessionToken({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<string> {
    let user = await $users.knex().where({ email }).first();

    if (!user) {
        throw Error.Unauthorized(`Invalid credentials`);
    }

    if (!(await bcrypt.compare(password, user.password))) {
        throw Error.Unauthorized(`Invalid credentials`);
    }

    let token = jwt.sign({ userId: user.id }, $config.jwtSecret);

    $logger.debug({ token, userId: user.id }, "session token created");

    return token;
}
