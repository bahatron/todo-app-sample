import express from "express";
import { pingController } from "../controllers/ping/ping.controller";
import { errorHandler } from "./middleware/error-handler";
import { setRequestIdMiddleware } from "./middleware/request-id";
import { requestTimerMiddleware } from "./middleware/request-timer";

export function Server() {
    const app = express();

    app.use(express.json());
    app.use(setRequestIdMiddleware);
    app.use(requestTimerMiddleware);

    app.get("/ping", pingController);

    app.use(errorHandler);

    return app;
}
