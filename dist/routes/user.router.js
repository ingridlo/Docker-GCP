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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../firebase/auth"));
const express_joi_validation_1 = require("express-joi-validation");
const user_schema_1 = __importDefault(require("../schemas-joi/user.schema"));
exports.userRouter = express_1.default.Router();
exports.userRouter.use(express_1.default.json());
const validator = express_joi_validation_1.createValidator();
exports.userRouter.post("/newUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield auth_1.default.createUser(email, password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.userRouter.post("/login", validator.body(user_schema_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield auth_1.default.login(email, password);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//# sourceMappingURL=user.router.js.map