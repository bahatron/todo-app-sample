import { app } from "../server/app";
import { $postgres } from "../services/postgres";
import { $logger } from "../utils/logger";

$postgres.migrate.latest().then(() => {
    $logger.info(`Database up to date`);

    app.listen(3000, () => {
        $logger.info(`Server listening in port 3000`);
    });
});
