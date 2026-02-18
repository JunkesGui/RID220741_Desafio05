import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers";
import { createBookSchema } from "../schemas/BookSchema";

const booksRouter = Router();
const booksController = new BooksControllers();

booksRouter.post("/", createBookSchema, booksController.create);

export default booksRouter;
