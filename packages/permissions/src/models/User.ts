import { z } from "zod";

export const UserSchema = z.object({
	id: z.string(),
	username: z.string().min(1, "username needs a 1 characters or more"),
	email: z.string().email(),
	password: z.string().min(6, "password needs a 6 characters or more"),
});

export type User = z.infer<typeof UserSchema>;
