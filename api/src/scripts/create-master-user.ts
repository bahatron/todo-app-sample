import { execute } from "@bahatron/utils/lib/helpers";
import { $config } from "../utils/config";
import { $logger } from "../utils/logger";
import { createUser } from "../controllers/users/create-user/create-user";

execute(async () => {
    await createUser({
        email: $config.superAdminEmail,
        password: $config.superAdminPassword,
    })
        .then(() => $logger.info(`master user created`))
        .catch($logger.error);
});
