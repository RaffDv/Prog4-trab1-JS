import { z } from "zod";

export const ForbiddenResponseSchema = z.object({
	message: z.string(),
	cause: z.any(),
});
