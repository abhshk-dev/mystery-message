import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be atleast 10 characters" })
    .max(300, { message: "Content must be no longer 300 characters" }),
});
