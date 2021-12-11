import noteSchema from "../../models/note/note.schema";
import { asyncRoute } from "../../server/middleware/async-route";
import { Route } from "../../server/router";
import { createNote } from "./create-note";

export const createNoteController = asyncRoute(async (req, res) => {
    return res.status(201).json(await createNote(req.body));
});

export const createNoteRote: Route = {
    method: "post",
    route: "/notes",
    handler: createNoteController,
    response: noteSchema,
};
