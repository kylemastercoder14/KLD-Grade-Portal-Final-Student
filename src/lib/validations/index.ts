import { z } from "zod";

export const LoginValidators = z.object({
    studentNumber: z.string().min(1, {message: "Student number is required"}),
    password: z.string().min(1, {message: "Password is required"}),
})

export const ResetPasswordValidators = z.object({
    studentNumber: z.string().min(1, {message: "Student number is required"}),
})