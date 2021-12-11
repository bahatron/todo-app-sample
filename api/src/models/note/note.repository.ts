import { Note } from "../../interfaces/note.interface";
import { NOTES_TABLE } from "../../migrations/20211209163612_initial";
import { $postgres } from "../../services/postgres";

export const $notes = {
    knex: (session = $postgres) => session.table<Note>(NOTES_TABLE),
};
