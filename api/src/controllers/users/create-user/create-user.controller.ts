import { asyncRoute } from "../../../server/helpers";
import { Route } from "../../../server/router";
import getUserResponseSchema from "../../../models/user/user-public.schema";
import createUserRequestSchema from "./create-user-request.schema";
import { createUser } from "./create-user";

export const createUserController = asyncRoute(async (req, res) => {
    let user = await createUser(req.body);

    return res.status(201).json(user);
});

export const createUserRoute: Route = {
    method: "post",
    route: "/users",
    handler: createUserController,
    docs: {
        tags: ["User Management"],
        description: "Create a User",
        requestBody: {
            required: true,
            content: {
                "application/json": {
                    schema: createUserRequestSchema,
                },
            },
        },
        responses: {
            201: {
                "application/json": {
                    schema: getUserResponseSchema,
                },
            },
        },
    },
};
