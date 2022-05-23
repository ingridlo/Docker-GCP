import express from "express";
import { connectToDatabase } from "./services/database.service";
import { bookRouter } from "./routes/book.router";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { userRouter } from "./routes/user.router";
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

const port = 4000; 
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API built in express for book registration',
            version: '1.0.0',
            description:
                'This is a REST API application made with Express. It retrieves data from Books database.',
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
const swaggerDocs=swaggerJSDoc(swaggerOptions)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.use(decodeToken)

connectToDatabase()
    .then(() => {        
        app.use("/books", bookRouter);
        app.use("/user", userRouter)
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });