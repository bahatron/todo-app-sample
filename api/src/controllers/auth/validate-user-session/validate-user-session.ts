import { verify } from "jsonwebtoken";
import { UserSession } from "../../../interfaces/user-session.interface";
import { $config } from "../../../utils/config";

export function validateUserSession(token: string): UserSession {
    let session = verify(token, $config.jwtSecret) as UserSession;

    return session;
}
