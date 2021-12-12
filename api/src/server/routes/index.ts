import { createNoteRote } from "../../controllers/create-note/create-note.controller";
import { pingRoute } from "../../controllers/ping/ping.controller";
import { createUserRoute } from "../../controllers/users/create-user/create-user.controller";
import { getUserRoute } from "../../controllers/users/get-user/get-user.controller";
import { Route } from "../router";

export const routes: Route[] = [
    pingRoute,
    createNoteRote,
    createUserRoute,
    getUserRoute,
];
