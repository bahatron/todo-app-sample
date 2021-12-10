import { RunInContext } from "@bahatron/utils/lib/helpers";
import { randomUUID } from "crypto";
import { RequestHandler } from "express";

export const REQUEST_ID_KEY = "request_id";

export const setRequestIdMiddleware: RequestHandler = (req, res, next) => {
    RunInContext(next, {
        [REQUEST_ID_KEY]: req.headers["x-request-id"] || randomUUID(),
    });
};
