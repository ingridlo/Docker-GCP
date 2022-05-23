import express, { Request, Response} from "express";
import auth from '../firebase/auth'
import { createValidator } from "express-joi-validation";
import userSchema from "../schemas-joi/user.schema";

export const userRouter = express.Router();
userRouter.use(express.json());
const validator = createValidator();

userRouter.post("/newUser", async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      const user = await auth.createUser(email,password)
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  userRouter.post("/login",validator.body(userSchema), async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      const user = await auth.login(email,password)
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

