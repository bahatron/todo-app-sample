import { Logger } from "@bahatron/utils";
import { AsyncContext } from "@bahatron/utils/lib/context";
import { REQUEST_ID_KEY } from "../server/middleware/request-id";
import { $config } from "./config";

export const $logger = Logger.Logger({
    id: () => AsyncContext.get(REQUEST_ID_KEY) || "sample-todo-app",
    pretty: $config.devMode,
});
