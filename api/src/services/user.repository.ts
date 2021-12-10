import { USER_TABLE } from "../migrations/20211209163612_initial";
import { $postgres } from "./postgres";

export const $users = {
    TABLE: USER_TABLE,
    knex: () => $postgres.table(USER_TABLE),
};
