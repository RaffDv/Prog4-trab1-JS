import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import type { User } from "./models/User";
import type { AppAbility } from "./appAbility";

type DefinePermissions = (
	user: User,
	builder: AbilityBuilder<AppAbility>,
) => void;
type Roles = "member" | "admin";

const rolePermissions: Record<Roles, DefinePermissions> = {
	member(user, { can }) {},
	admin(user, { can }) {
		can("manage", "all");
	},
};

export function defineAbilityFor(user: User): AppAbility {
	const builder = new AbilityBuilder(createMongoAbility);

	if (typeof rolePermissions[user.role] === "function") {
		rolePermissions[user.role](user, builder);
	} else {
		throw new Error(`Trying to use unknown role "${user.role}"`);
	}

	return builder.build();
}
