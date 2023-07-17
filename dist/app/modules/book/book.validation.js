"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookValidation = void 0;
const zod_1 = require("zod");
const addBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'Publication Date is required',
        }),
        reviews: zod_1.z.number({
            required_error: 'Reviews is required',
        }),
    }),
});
const updateBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'Title is required',
        })
            .optional(),
        author: zod_1.z
            .string({
            required_error: 'Author is required',
        })
            .optional(),
        genre: zod_1.z
            .string({
            required_error: 'Genre is required',
        })
            .optional(),
        image: zod_1.z
            .string({
            required_error: 'Image is required',
        })
            .optional(),
        publicationDate: zod_1.z
            .string({
            required_error: 'Publication Date is required',
        })
            .optional(),
        reviews: zod_1.z
            .number({
            required_error: 'Reviews is required',
        })
            .optional(),
    }),
});
exports.bookValidation = {
    addBookZodSchema,
    updateBookZodSchema,
};
