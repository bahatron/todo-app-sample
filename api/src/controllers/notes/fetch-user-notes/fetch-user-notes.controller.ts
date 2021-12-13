import { $notes } from "../../../models/note/note.repository";
import noteSchema from "../../../models/note/note.schema";
import { asyncRoute } from "../../../server/helpers";
import {
    authenticationRequiredMiddleware,
    fetchUserSession,
} from "../../../server/middleware/authentication-required";
import { Route } from "../../../server/router";

export const fetchUserNotesController = asyncRoute(async (req, res) => {
    let { userId } = fetchUserSession();

    let notes = await $notes.knex().where({ userId });

    return res.json(notes);
});

export const fetchUserNotesRoute: Route = {
    method: "get",
    route: "/notes",
    handler: [authenticationRequiredMiddleware, fetchUserNotesController],
    docs: {
        tags: ["Note Management"],
        description: "Fetches Session's User Notes",
        security: [{ SessionToken: [] }],
        responses: {
            200: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: noteSchema,
                    },
                },
            },
        },
    },
};
