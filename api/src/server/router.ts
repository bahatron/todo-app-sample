import { RequestHandler, Router } from "express";
import { JSONSchema } from "json-schema-to-typescript";
import swaggerUi from "swagger-ui-express";
import { $config } from "../utils/config";
import { swaggerDocs } from "./swagger";
import { routes } from "./routes";

export interface Route {
    method: "post" | "get" | "put" | "delete";
    route: string;
    handler: RequestHandler | RequestHandler[];
    request?: JSONSchema;
    response?: JSONSchema;
    docs?: {
        tags?: string[];
        description?: string;
        security?: Record<"SessionToken", []>[];
        requestBody?: {
            required?: boolean;
            content: {
                "application/json": {
                    schema: JSONSchema;
                };
            };
        };
        responses?: {
            [k: number]: {
                "application/json": {
                    schema: JSONSchema;
                };
            };
        };
    };
}

export const router = Router();

routes.forEach(({ method, route, handler }) => {
    router[method](route, handler);
});

if ($config.swaggerEnabled) {
    router.use("/docs", swaggerUi.serve);
    router.get("/docs", swaggerUi.setup(swaggerDocs));
    router.get("/docs-json", (req, res) => res.json(swaggerDocs));
}
