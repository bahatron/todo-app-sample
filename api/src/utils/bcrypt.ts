import bcrypt from "bcrypt";

const SALT_ROUNDS = 15;

export const $bcrypt = {
    async generate(plain: string): Promise<string> {
        return bcrypt.hash(plain, SALT_ROUNDS);
    },
};
