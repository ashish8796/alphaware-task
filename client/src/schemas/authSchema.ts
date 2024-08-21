import { z } from "zod";

export const signupFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password is required"),
});

export type SignupFormData = z.infer<typeof signupFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
