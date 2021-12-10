export default {
    type: "object",
    additionalProperties: false,
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
    },
};
