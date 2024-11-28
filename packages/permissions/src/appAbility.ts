import {
	createMongoAbility,
	type ForcedSubject,
	type CreateAbility,
	type MongoAbility,
} from "@casl/ability";
import { UserSchema } from "./models/User";

const actions = ["manage", "create", "read", "update", "delete"] as const;
const subjects = [UserSchema, "all"];
type AppAbilities = [
	(typeof actions)[number],
	(
		| (typeof subjects)[number]
		| ForcedSubject<Exclude<(typeof subjects)[number], "all">>
	),
];

export type AppAbility = MongoAbility<AppAbilities>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;
