import { User } from "../../interfaces/user.interface";
import { USER_TABLE } from "../../migrations/20211209163612_initial";
import { $postgres } from "../../services/postgres";

export const $users = {
    knex: (session = $postgres) => session.table<User>(USER_TABLE),
};
