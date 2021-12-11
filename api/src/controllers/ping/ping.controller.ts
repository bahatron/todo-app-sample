import { asyncRoute } from "../../server/middleware/async-route";
import { Route } from "../../server/router";
import PingRequestSchema from "./ping.response.schema";

export const pingController = asyncRoute(async (req, res) => {
    return res.json("pong");
});

export const pingRoute: Route = {
    method: "get",
    route: "/ping",
    handler: pingController,
    response: PingRequestSchema,
} as const;
