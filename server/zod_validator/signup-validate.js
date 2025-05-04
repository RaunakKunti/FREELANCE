const { z } = require("zod");

const loginValidator = z.object({
  email: z.string().trim().min(5).email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

const signupValidator = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().trim().min(5).email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

module.exports = { loginValidator, signupValidator };
