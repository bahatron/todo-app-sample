import { Error, Validator } from "@bahatron/utils";
import { User } from "../../interfaces/user.interface";
import { USER_TABLE } from "../../migrations/20211209163612_initial";
import { $postgres } from "../../services/postgres";
import userSchema from "./user.schema";

export const $users = {
    knex: (session = $postgres) => session.table<User>(USER_TABLE),
};

export function UserFactory(data: any): User {
    let errors = Validator.json(data, userSchema);

    if (errors.length) {
        throw Error.ValidationFailed({ errors }, `validation failed`);
    }

    return data;
}
