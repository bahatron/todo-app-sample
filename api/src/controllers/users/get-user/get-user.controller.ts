import { Error } from "@bahatron/utils";
import { AsyncContext } from "@bahatron/utils/lib/context";
import { $users } from "../../../models/user/user.repository";
import { asyncRoute } from "../../../server/helpers";
import {
    authenticationRequiredMiddleware,
    REQUEST_USER,
} from "../../../server/middleware/authentication-required";
import { Route } from "../../../server/router";
import userPublicSchema from "../../../models/user/user-public.schema";
import { UserPublicFactory } from "../../../models/user/user-public.factory";

export const getUserController = asyncRoute(async (req, res) => {
    let userId = req.params.userId;

    if (!userId || userId !== AsyncContext.get(REQUEST_USER).userId) {
        throw Error.Unauthorized();
    }

    let user = await $users.knex().where({ id: userId }).first();
    if (!user) {
        throw Error.Unauthorized();
    }

    return res.json(UserPublicFactory(user));
});

export const getUserRoute: Route = {
    method: "get",
    route: "/user/:userId",
    handler: [authenticationRequiredMiddleware, getUserController],
    docs: {
        tags: ["User Management"],
        description: "Fetch Session User",
        security: [
            {
                SessionToken: [],
            },
        ],
        responses: {
            200: {
                "application/json": {
                    schema: userPublicSchema,
                },
            },
        },
    },
};
