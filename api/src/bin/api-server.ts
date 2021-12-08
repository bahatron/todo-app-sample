import { Server } from "../server/app";
import { $logger } from "../utils/logger";

let app = Server();

app.listen(3000, () => {
    $logger.info(`Server listening in port 3000`);
});
