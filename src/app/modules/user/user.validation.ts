import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum(['user', 'admin'], {
      required_error: 'Role is required',
    }),
  }),
});

const updateUserZodSchema = z.object({
  body: z
    .object({
      name: z
        .string({
          required_error: 'Name is required',
        })
        .optional(),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .optional(),
      password: z
        .string({
          required_error: 'Password is required',
        })
        .optional(),
      role: z
        .enum(['seller', 'buyer'], {
          required_error: 'Role is required',
        })
        .optional(),
    })
    .refine(data => {
      if (!data.name && !data.email && !data.password && !data.role) {
        throw new Error('At least one field must be specified');
      }
      return true;
    }),
});


export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
