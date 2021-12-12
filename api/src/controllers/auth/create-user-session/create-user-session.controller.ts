import { pick } from "lodash";
import userSchema from "../../../models/user/user.schema";
import { asyncRoute } from "../../../server/helpers";
import { Route } from "../../../server/router";
import { createSessionToken } from "./create-user-session";

export const createUserSessionController = asyncRoute(async (req, res) => {
    let session = await createSessionToken(req.body);

    return res.json(session);
});

export const createUserSessionRoute: Route = {
    method: "post",
    route: "/login",
    handler: createUserSessionController,
    docs: {
        tags: ["Authentication"],
        description: "create session token",
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: pick(userSchema, ["email", "password"]),
                    },
                },
            },
        },
        responses: {
            200: {
                "application/json": {
                    schema: {
                        type: "string",
                    },
                },
            },
        },
    },
};
