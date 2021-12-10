import { ErrorRequestHandler } from "express";
import { $logger } from "../../utils/logger";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let code = isNaN(err.code) ? 500 : parseInt(err.code);

    if (code >= 500) {
        $logger.error(err);
    } else {
        $logger.warning(err, "request failed");
    }

    return res
        .status(code)
        .json({ error: err.message, context: err.context ?? err });
};
