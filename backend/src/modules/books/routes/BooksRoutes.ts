import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers";

const booksRouter = Router();
const booksController = new BooksControllers();

booksRouter.post("/", booksController.create);

export default booksRouter;
