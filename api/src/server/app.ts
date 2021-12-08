import express from "express";
import { pingController } from "../controllers/ping/ping.controller";

export function Server() {
    const app = express();

    app.use(express.json());

    app.get("/ping", pingController);

    return app;
}
