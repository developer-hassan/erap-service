import { z } from "zod";

export const formOneSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password should be at least 8 characters"),
});
