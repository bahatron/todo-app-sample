import { Logger } from "@bahatron/utils";
import { AsyncContext } from "@bahatron/utils/lib/context";

export const $logger = Logger.Logger({
    id: () => AsyncContext.get("requestId") || "sample-todo-app",
    pretty: process.env.NODE_ENV !== "production",
});
