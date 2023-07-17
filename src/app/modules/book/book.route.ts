import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { bookController } from './book.controller';
import { bookValidation } from './book.validation';
const router = express.Router();

router.post(
  '/add-book',
  validateRequest(bookValidation.addBookZodSchema),
  bookController.addBook
);

router.get('/:bookId', bookController.getBookById);

router.get('/', bookController.getBooks);

router.patch(
  '/:bookId',
  validateRequest(bookValidation.updateBookZodSchema),
  bookController.updateBookById
);

router.delete('/:bookId', bookController.deleteBookById);

export const BookRoutes = router;
