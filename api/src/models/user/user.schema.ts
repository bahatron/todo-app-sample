import { JSONSchema } from "json-schema-to-typescript";

export default <JSONSchema>{
    type: "object",
    additionalProperties: false,
    required: ["id", "email", "password"],
    properties: {
        id: {
            type: "string",
        },
        email: {
            type: "string",
            format: "email",
        },
        firstName: {
            type: "string",
        },
        lastName: {
            type: "string",
        },
        password: {
            type: "string",
        },
        createdAt: {
            type: "string",
            format: "date-time",
        },
        updatedAt: {
            type: "string",
            format: "date-time",
        },
    },
};
