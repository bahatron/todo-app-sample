import { Error, Validator } from "@bahatron/utils";
import { Note } from "../../interfaces/note.interface";
import { NOTES_TABLE } from "../../migrations/20211209163612_initial";
import { $postgres } from "../../services/postgres";
import noteSchema from "./note.schema";

export const $notes = {
    knex: (session = $postgres) => session.table<Note>(NOTES_TABLE),
};

export function Note(data: any): Note {
    let errors = Validator.json(data, noteSchema);

    if (errors.length) {
        throw Error.ValidationFailed("Validation failed", { errors });
    }

    return data;
}
