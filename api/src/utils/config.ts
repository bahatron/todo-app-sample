export const $config = {
    devMode: process.env.NODE_ENV !== "production",
    testUrl: process.env.TEST_URL || "http://locahost:3000",
    jwtSecret: process.env.JWT_SECRET || "secretToken",
    swaggerEnabled: Boolean(process.env.SWAGGER_ENABLED ?? "1"),
    swaggerTarget: process.env.SWAGGER_TARGET || "/",
    superAdminEmail: process.env.SUPER_ADMIN_EMAIL || "test@email.com",
    superAdminPassword: process.env.SUPER_ADMIN_PASSWORD || "secret",
};
