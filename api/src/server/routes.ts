import { createUserSessionRoute } from "../controllers/auth/create-user-session/create-user-session.controller";
import { createNoteRote } from "../controllers/notes/create-note/create-note.controller";
import { fetchUserNotesRoute } from "../controllers/notes/fetch-user-notes/fetch-user-notes.controller";
import { pingRoute } from "../controllers/ping/ping.controller";
import { createUserRoute } from "../controllers/users/create-user/create-user.controller";
import { getUserRoute } from "../controllers/users/get-user/get-user.controller";
import { Route } from "./router";

export const routes: Route[] = [
    pingRoute,
    createNoteRote,
    createUserRoute,
    getUserRoute,
    createUserSessionRoute,
    fetchUserNotesRoute,
];
