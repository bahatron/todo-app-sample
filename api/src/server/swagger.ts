import { $config } from "../utils/config";
import { routes } from "./routes";

/**
 * @description Converts express param expression to swagger's pattern
 * express: /users/:id
 * swagger: /users/{id}
 */
export function swaggerRoute(route: string): string {
    return route
        .split("/")
        .map((bit) => (bit.startsWith(":") ? `{${bit.slice(1)}}` : bit))
        .join("/");
}

export const swaggerDocs = {
    openapi: "3.0.0",

    info: {
        title: "TODO API",
        description: "Hello Mom!",
        version: "0.1.0",
    },

    servers: [
        {
            url: $config.swaggerTarget,
        },
    ],

    paths: routes.reduce((partial, route) => {
        partial[swaggerRoute(route.route)] = {
            ...partial[route.route],
            [route.method]: route.docs,
        };
        return partial;
    }, {} as any),

    components: {
        securitySchemes: {
            SessionToken: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },
};
