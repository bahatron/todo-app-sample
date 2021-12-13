import { Validator } from "@bahatron/utils";
import { CreateNoteRequest } from "../../../interfaces/create-note-request.interface";
import noteSchema from "../../../models/note/note.schema";
import { $testApi, TEST_AUTH_TOKEN } from "../../../utils/jest";

const VALID_NOTE_REQUEST: CreateNoteRequest = {
    header: "title!",
    body: "hello!",
};

describe("POST /notes", () => {
    describe("valid request", () => {
        it("creates a note", async () => {
            return $testApi
                .post("/notes")
                .send(VALID_NOTE_REQUEST)
                .set("Content-Type", "application/json")
                .set("Authorization", await TEST_AUTH_TOKEN)
                .expect(201)
                .then((res) => {
                    expect(Validator.json(res.body, noteSchema)).toHaveLength(
                        0,
                    );
                });
        });
    });
});
