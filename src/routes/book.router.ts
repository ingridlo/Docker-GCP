import express, { Request, Response} from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import { createValidator } from "express-joi-validation";
import bookSchema from "../schemas-joi/book.schema";
import { decodeToken } from "../firebase/tokens";

export const bookRouter = express.Router();
bookRouter.use(express.json());


const validator = createValidator();

bookRouter.get("/", decodeToken , async (req: Request, res: Response) => {
  try {
    const books = await collections.books.find({}).toArray();
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
bookRouter.post( "/addBook", decodeToken ,  validator.body(bookSchema),  async (req: Request, res: Response) => {
    try {
      let data = req.body;
      const books = await collections.books.insertOne(data);
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
);

bookRouter.put("/editBook/:id", decodeToken ,validator.body(bookSchema), async (req: Request, res: Response) => {
  try {
    let data = req.body;
    const books = await collections.books.replaceOne(
      { _id: new ObjectId(req.params.id) },
      data
    );
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

bookRouter.delete("/deleteBook/:id", decodeToken ,async (req: Request, res: Response) => {
  try {
    const book = await collections.books.find({_id: new ObjectId(req.params.id)}).toArray()  
    collections.books.deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
