import express from "express";
import { errorHandler } from "./middleware/error-handler";
import { setRequestIdMiddleware } from "./middleware/request-id";
import { requestTimerMiddleware } from "./middleware/request-timer";
import { router } from "./router";

export function Server(routes = router) {
    const app = express();

    app.use(express.json());
    app.use(setRequestIdMiddleware);
    app.use(requestTimerMiddleware);

    app.use(routes);

    app.use(errorHandler);

    return app;
}

export const app = Server();
