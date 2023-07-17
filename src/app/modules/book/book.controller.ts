import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookFilterableFields } from './book.contants';
import { IBook } from './book.interface';
import { bookService } from './book.service';

const addBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const book: IBook = req.body;

    const result = await bookService.addBook(book);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book added successfully!',
      data: result,
    });
  }
);

const getBooks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await bookService.getBooks(filters, paginationOptions);

    const message =
      result.data.length > 0
        ? 'Books fetched successfully!'
        : 'No book founded';

    sendResponse<IBook[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: message,
      meta: result.meta,
      data: result.data,
    });
  }
);

const getBookById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { bookId } = req.params;

    const result = await bookService.getBookById(bookId);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book fetched successfully!',
      data: result,
    });
  }
);

const updateBookById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const book: IBook = req.body;

    const result = await bookService.updateBookById(bookId, book);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully!',
      data: result,
    });
  }
);

const deleteBookById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { bookId } = req.params;

    const result = await bookService.deleteBookById(bookId);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book deleted successfully!',
      data: result,
    });
  }
);

export const bookController = {
  addBook,
  getBooks,
  getBookById,
  deleteBookById,
  updateBookById,
};
