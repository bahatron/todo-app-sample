import { AsyncContext } from "@bahatron/utils/lib/context";
import { RequestHandler } from "express";
import { validateUserSession } from "../../controllers/auth/validate-user-session/validate-user-session";
import { UserSession } from "../../interfaces/user-session.interface";
import { $logger } from "../../utils/logger";

export const REQUEST_USER = "request_user";

export const fetchUserSession = () => {
    return AsyncContext.get(REQUEST_USER) as UserSession | undefined;
};

export const authenticationRequiredMiddleware: RequestHandler = (
    req,
    res,
    next,
) => {
    let user = validateUserSession(req.headers["authorization"] ?? "");

    $logger.debug({ user }, "auth success!");

    AsyncContext.set(REQUEST_USER, user);

    next();
};
