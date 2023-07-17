"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewAccessToken = void 0;
const config_1 = __importDefault(require("../config"));
const jwtHelpers_1 = require("./jwtHelpers");
const getNewAccessToken = (email, role) => {
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        email,
        role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return newAccessToken;
};
exports.getNewAccessToken = getNewAccessToken;
