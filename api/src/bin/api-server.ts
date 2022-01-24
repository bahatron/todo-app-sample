import { app } from "../server/app";
import { $postgres } from "../services/postgres";
import { $config } from "../utils/config";
import { $logger } from "../utils/logger";

$postgres.migrate.latest().then(() => {
    $logger.info(`Database up to date`);

    app.listen($config.apiPort, () => {
        $logger.info(`Server listening in port ${$config.apiPort}`);
    });
});
