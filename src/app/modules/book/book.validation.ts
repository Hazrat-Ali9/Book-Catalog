import { z } from 'zod';
const addBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
    publicationDate: z.string({
      required_error: 'Publication Date is required',
    }),
    reviews: z.number({
      required_error: 'Reviews is required',
    }),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
      })
      .optional(),
    author: z
      .string({
        required_error: 'Author is required',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'Genre is required',
      })
      .optional(),
    image: z
      .string({
        required_error: 'Image is required',
      })
      .optional(),
    publicationDate: z
      .string({
        required_error: 'Publication Date is required',
      })
      .optional(),
    reviews: z
      .number({
        required_error: 'Reviews is required',
      })
      .optional(),
  }),
});

export const bookValidation = {
  addBookZodSchema,
  updateBookZodSchema,
};
