import { pick } from "lodash";
import { UserPublic } from "../../interfaces/user-public.interface";
import { User } from "../../interfaces/user.interface";
import { USER_PUBLIC_FIELDS } from "./user-public.schema";

export function UserPublicFactory(user: User): UserPublic {
    return pick(user, USER_PUBLIC_FIELDS) as any;
}
