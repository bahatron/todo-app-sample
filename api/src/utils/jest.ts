import supertest from "supertest";
import { Server } from "../server/app";

export const $testApi = supertest(Server());
