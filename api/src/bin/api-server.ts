import { Server } from "../server/app";
import { $postgres } from "../services/postgres";
import { $logger } from "../utils/logger";

let app = Server();

$postgres.migrate.latest().then(() => {
    $logger.info(`Database up to date`);

    app.listen(3000, () => {
        $logger.info(`Server listening in port 3000`);
    });
});
