import { RequestHandler } from "express";

export const pingController: RequestHandler = (req, res) => {
    return res.json("pong");
};
