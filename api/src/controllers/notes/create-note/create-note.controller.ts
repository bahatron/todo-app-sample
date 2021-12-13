import noteSchema from "../../../models/note/note.schema";
import { asyncRoute } from "../../../server/helpers";
import {
    authenticationRequiredMiddleware,
    fetchUserSession,
} from "../../../server/middleware/authentication-required";
import { Route } from "../../../server/router";
import { createNote } from "./create-note";
import createNoteRequestSchema from "./create-note-request.schema";

export const createNoteController = asyncRoute(async (req, res) => {
    let session = fetchUserSession();

    return res
        .status(201)
        .json(await createNote({ ...req.body, userId: session!.userId }));
});

export const createNoteRote: Route = {
    method: "post",
    route: "/notes",
    handler: [authenticationRequiredMiddleware, createNoteController],
    docs: {
        tags: ["Note Management"],
        description: "Create a Note",
        security: [{ SessionToken: [] }],
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: createNoteRequestSchema,
                },
            },
        },
        responses: {
            201: {
                "application/json": {
                    schema: noteSchema,
                },
            },
        },
    },
};
