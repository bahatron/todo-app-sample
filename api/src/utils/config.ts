export const $config = {
    devMode: process.env.NODE_ENV !== "production",
    testUrl: process.env.TEST_URL || "http://locahost:3000",
    jwtSecret: process.env.JWT_SECRET || "secretToken",
    swaggerEnabled: Boolean(process.env.SWAGGER_ENABLED ?? "1"),
    swaggerTarget: process.env.SWAGGER_TARGET || "/",
    superAdminEmail: process.env.SUPER_ADMIN_EMAIL || "test@email.com",
    superAdminPassword: process.env.SUPER_ADMIN_PASSWORD || "secret",
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: parseInt(process.env.POSTGRES_PORT || ""),
    postgresUser: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDatabase: process.env.POSTGRES_DB,
    // this is for Heroku
    databaseUrl: process.env.DATABASE_URL,
    apiPort: process.env.PORT || 3000,
};
