import { asyncRoute } from "../../server/middleware/async-route";
import PingRequestSchema from "./ping.response.schema";

export const pingController = asyncRoute(async (req, res) => {
    return res.json("pong");
});

export const pingRoute = {
    method: "get",
    handler: pingController,
    response: PingRequestSchema,
};
