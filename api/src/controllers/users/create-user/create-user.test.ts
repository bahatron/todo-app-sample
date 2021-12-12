import { Validator } from "@bahatron/utils";
import faker from "faker";
import { CreateUserRequest } from "../../../interfaces/create-user-request.interface";
import userSchema from "../../../models/user/user.schema";
import { $testApi } from "../../../utils/jest";

export const VALID_CREATE_USER_REQUEST: CreateUserRequest = {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: "123123123",
};

describe("POST /users", () => {
    describe("valid request", () => {
        it(`creates an user with a hashed password`, () => {
            return $testApi
                .post(`/users`)
                .set("Content-Type", "application/json")
                .send(VALID_CREATE_USER_REQUEST)
                .expect(201)
                .then((res) => {
                    expect(Validator.json(res.body, userSchema)).toHaveLength(
                        0,
                    );

                    expect(
                        res.body.password !==
                            VALID_CREATE_USER_REQUEST.password,
                    ).toBeTruthy();
                });
        });
    });
});
