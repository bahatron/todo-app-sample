import supertest from "supertest";
import { createSessionToken } from "../controllers/auth/create-user-session/create-user-session";
import { app } from "../server/app";
import { $config } from "./config";

export const $testApi = supertest(app);

export const TEST_AUTH_TOKEN = createSessionToken({
    email: $config.superAdminEmail,
    password: $config.superAdminPassword,
});
