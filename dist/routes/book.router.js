"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const express_joi_validation_1 = require("express-joi-validation");
const book_schema_1 = __importDefault(require("../schemas-joi/book.schema"));
const tokens_1 = require("../firebase/tokens");
exports.bookRouter = express_1.default.Router();
exports.bookRouter.use(express_1.default.json());
const validator = express_joi_validation_1.createValidator();
exports.bookRouter.get("/", tokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield database_service_1.collections.books.find({}).toArray();
        res.status(200).send(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.bookRouter.post("/addBook", tokens_1.decodeToken, validator.body(book_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        const books = yield database_service_1.collections.books.insertOne(data);
        res.status(200).send(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.bookRouter.put("/editBook/:id", tokens_1.decodeToken, validator.body(book_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        const books = yield database_service_1.collections.books.replaceOne({ _id: new mongodb_1.ObjectId(req.params.id) }, data);
        res.status(200).send(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.bookRouter.delete("/deleteBook/:id", tokens_1.decodeToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield database_service_1.collections.books.find({ _id: new mongodb_1.ObjectId(req.params.id) }).toArray();
        database_service_1.collections.books.deleteOne({ _id: new mongodb_1.ObjectId(req.params.id) });
        res.status(200).send(book);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//# sourceMappingURL=book.router.js.map