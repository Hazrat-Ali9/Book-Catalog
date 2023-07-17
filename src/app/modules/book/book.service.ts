import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { bookSearchableFields } from './book.contants';
import { BookFilterableFields, IBook } from './book.interface';
import { Book } from './book.model';

const addBook = async (book: IBook): Promise<IBook | null> => {
  const addedBook = await Book.create(book);

  if (!addedBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to add book');
  }

  return addedBook;
};

const getBooks = async (
  filters: BookFilterableFields,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  
  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          // $options: typeof searchTerm === 'string' ? 'i' : undefined,
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => {
        return {
          [field]: value,
        };
      }),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const books = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments(whereConditions);

  if (!books) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Books not found');
  }

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: books,
  };
};

const getBookById = async (bookId: string): Promise<IBook | null> => {
  const book = await Book.findById(bookId);

  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }

  return book;
};

const updateBookById = async (
  bookId: string,
  book: IBook
): Promise<IBook | null> => {
  const updateBook = Book.findByIdAndUpdate(bookId, book, { new: true });

  if (!updateBook) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }

  return updateBook;
};

const deleteBookById = async (bookId: string): Promise<IBook | null> => {
  const book = await Book.findByIdAndDelete(bookId);

  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }

  return book;
};

export const bookService = {
  addBook,
  getBooks,
  getBookById,
  deleteBookById,
  updateBookById,
};
