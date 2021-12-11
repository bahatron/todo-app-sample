import { randomUUID } from "crypto";
import { CreateNoteRequest } from "../../interfaces/create-note-request.interface";
import { $notes, Note } from "../../models/note/note.repository";
import { $logger } from "../../utils/logger";

export async function createNote(data: CreateNoteRequest) {
    let note = Note({
        ...data,
        id: randomUUID(),
        createdAt: new Date().toISOString(),
    });

    await $notes.knex().insert(note);

    $logger.debug(note, "inserted note");

    return note;
}
