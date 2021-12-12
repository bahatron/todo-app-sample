import { Request, Response, RequestHandler } from "express";

export const asyncRoute = (
    handler: (req: Request, res: Response) => void,
): RequestHandler => {
    return async (req, res, next) => {
        try {
            await handler(req, res);
            next();
        } catch (err) {
            next(err);
        }
    };
};
