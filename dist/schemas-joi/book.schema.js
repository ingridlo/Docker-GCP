"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const bookSchema = joi_1.default.object({
    _id: joi_1.default.string(),
    name: joi_1.default.string().min(1).max(200).required(),
    author: joi_1.default.string().min(1).max(200).required(),
    pages_numer: joi_1.default.number().integer().min(1).max(2000).required(),
    language: joi_1.default.string().min(1).max(20).required(),
    published: joi_1.default.number().integer().min(1).max(3000).required()
});
exports.default = bookSchema;
//# sourceMappingURL=book.schema.js.map