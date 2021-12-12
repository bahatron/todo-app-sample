import { JSONSchema } from "json-schema-to-typescript";
import { pick } from "lodash";
import userSchema from "../../../models/user/user.schema";

export const PROPERTIES = ["email", "firstName", "lastName", "password"];

export default <JSONSchema>{
    ...userSchema,
    properties: pick(userSchema.properties!, PROPERTIES),
};
