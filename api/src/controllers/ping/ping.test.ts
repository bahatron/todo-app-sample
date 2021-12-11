import { $testApi } from "../../utils/jest";
import { $logger } from "../../utils/logger";

describe("GET /ping", () => {
    it("responds with http 200", async () => {
        $testApi.get("/ping").expect(200);
    });
});
