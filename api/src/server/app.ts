import express from "express";
import { errorHandler } from "./middleware/error-handler";
import { setRequestIdMiddleware } from "./middleware/request-id";
import { requestTimerMiddleware } from "./middleware/request-timer";
import { router } from "./router";

export function Server() {
    const app = express();

    app.use(express.json());
    app.use(setRequestIdMiddleware);
    app.use(requestTimerMiddleware);

    app.use(router);

    app.use(errorHandler);

    return app;
}
