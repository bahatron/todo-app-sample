import { Validator } from "@bahatron/utils";
import { randomUUID } from "crypto";
import { CreateNoteRequest } from "../../interfaces/create-note-request.interface";
import noteSchema from "../../models/note/note.schema";
import { $testApi } from "../../utils/jest";

const VALID_NOTE_REQUEST: CreateNoteRequest = {
    userId: randomUUID(),
    note: "hello!",
};

describe("POST /notes", () => {
    describe("valid request", () => {
        it("creates a note", () => {
            return $testApi
                .post("/notes")
                .send(VALID_NOTE_REQUEST)
                .set("Content-Type", "application/json")
                .expect(201)
                .then((res) => {
                    expect(Validator.json(res.body, noteSchema)).toHaveLength(
                        0,
                    );
                });
        });
    });
});
