import { z } from "zod";

export const userSchema = z.object({});

export type UserC = z.infer<typeof userSchema>;
