import { asyncRoute } from "../../server/helpers";
import { Route } from "../../server/router";
import pingResponseSchema from "./ping.response.schema";

export const pingController = asyncRoute(async (req, res) => {
    return res.json("pong");
});

export const pingRoute: Route = {
    method: "get",
    route: "/ping",
    handler: pingController,
    docs: {
        tags: ["APM"],
        description: "ping",
        responses: {
            200: {
                "application/json": {
                    schema: pingResponseSchema,
                },
            },
        },
    },
};
