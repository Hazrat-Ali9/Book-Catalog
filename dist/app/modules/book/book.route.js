"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post('/add-book', (0, validateRequest_1.default)(book_validation_1.bookValidation.addBookZodSchema), book_controller_1.bookController.addBook);
router.get('/:bookId', book_controller_1.bookController.getBookById);
router.get('/', book_controller_1.bookController.getBooks);
router.patch('/:bookId', (0, validateRequest_1.default)(book_validation_1.bookValidation.updateBookZodSchema), book_controller_1.bookController.updateBookById);
router.delete('/:bookId', book_controller_1.bookController.deleteBookById);
exports.BookRoutes = router;
