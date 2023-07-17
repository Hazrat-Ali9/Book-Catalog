"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import { auth } from '../../middlewares/auth';
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// router.get(
//   '/users/:id',
//   auth.authRole(ENUM_USER_ROLE.ADMIN),
//   UserController.getSingleUser
// );
// router.get(
//   '/users/',
//   auth.authRole(ENUM_USER_ROLE.ADMIN),
//   UserController.getAllUsers
// );
// router.patch(
//   '/users/my-profile',
//   auth.authRole(
//     ENUM_USER_ROLE.ADMIN,
//     ENUM_USER_ROLE.BUYER,
//     ENUM_USER_ROLE.SELLER
//   ),
//   validateRequest(UserValidation.updateMyProfileZodSchema),
//   UserController.updateMyProfile
// );
// router.patch(
//   '/users/:id',
//   auth.authRole(ENUM_USER_ROLE.ADMIN),
//   validateRequest(UserValidation.updateUserZodSchema),
//   UserController.updateUser
// );
// router.delete(
//   '/users/:id',
//   auth.authRole(ENUM_USER_ROLE.ADMIN),
//   UserController.deleteUser
// );b
router.post('/auth/signup', (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.UserController.createUser);
exports.UserRoutes = router;
