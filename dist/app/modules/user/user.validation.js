"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        role: zod_1.z.enum(['user', 'admin'], {
            required_error: 'Role is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .optional(),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .optional(),
        role: zod_1.z
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
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
