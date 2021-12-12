import { JSONSchema } from "json-schema-to-typescript";
import { pick } from "lodash";
import userSchema from "./user.schema";

export const USER_PUBLIC_FIELDS = ["id", "email", "firstName", "lastName"];

export default <JSONSchema>{
    ...userSchema,
    required: ["id", "email"],
    properties: pick(userSchema.properties, USER_PUBLIC_FIELDS),
};
