import { RequestHandler, Router } from "express";
import { JSONSchema } from "json-schema-to-typescript";
import { createNoteRote } from "../controllers/create-note/create-note.controller";
import { pingRoute } from "../controllers/ping/ping.controller";

export interface Route {
    method: "post" | "get" | "put" | "delete";
    route: string;
    handler: RequestHandler;
    request?: JSONSchema;
    response?: JSONSchema;
}

const routes: Route[] = [pingRoute, createNoteRote];

export const router = Router();

routes.forEach(({ method, route, handler }) => {
    router[method](route, handler);
});
