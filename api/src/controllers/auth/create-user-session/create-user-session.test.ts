import { $config } from "../../../utils/config";
import { $testApi, TEST_AUTH_TOKEN } from "../../../utils/jest";

describe("POST /login", () => {
    describe("valid request", () => {
        it("returns a session token", async () => {
            return $testApi
                .post("/login")
                .set("Content-Type", "application/json")
                .set("Authorization", await TEST_AUTH_TOKEN)
                .send({
                    email: $config.superAdminEmail,
                    password: $config.superAdminPassword,
                })
                .expect(200)
                .then((res) => {
                    expect(typeof res.body).toBe("string");
                });
        });
    });
});
