"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_service_1 = require("./services/database.service");
const book_router_1 = require("./routes/book.router");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const user_router_1 = require("./routes/user.router");
const cors = require('cors');
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors());
const port = 4000;
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API built in express for book registration',
            version: '1.0.0',
            description: 'This is a REST API application made with Express. It retrieves data from Books database.',
        },
        servers: [
            {
                url: 'http://localhost:4000',
                description: 'Development server',
            }
        ],
    },
    apis: ['./dist/docs/*.js']
};
const swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
// app.use(decodeToken)
database_service_1.connectToDatabase()
    .then(() => {
    app.use("/books", book_router_1.bookRouter);
    app.use("/user", user_router_1.userRouter);
    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
//# sourceMappingURL=index.js.map