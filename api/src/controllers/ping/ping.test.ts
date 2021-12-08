import request from "supertest";
import { Server } from "../../server/app";

describe("GET /ping", () => {
    let app: any;

    beforeAll(() => {
        app = Server();
    });

    it("responds with http 200", async () => {
        request(app).get("/ping").expect(200);
    });
});
