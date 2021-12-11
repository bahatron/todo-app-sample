import { JSONSchema } from "json-schema-to-typescript";

export default <JSONSchema>{
    type: "object",
    aditionalProperties: false,
    required: ["id", "userId", "createdAt", "note"],
    properties: {
        id: {
            type: "string",
        },
        userId: {
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
        note: {
            type: "string",
        },
    },
};
