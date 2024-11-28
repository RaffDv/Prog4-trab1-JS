import { z } from "zod";

export const BadRequestSchema = z.object({
	message: z.string(),
	cause: z.any(),
});
export type BadRequestC = z.infer<typeof BadRequestSchema>;
