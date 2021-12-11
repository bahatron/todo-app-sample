export default {
    type: "object",
    aditionalProperties: false,
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