import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers";
import { createBookSchema } from "../schemas/BookSchema";

const booksRouter = Router();
const booksController = new BooksControllers();

booksRouter.post("/", createBookSchema, booksController.create);
booksRouter.get("/", booksController.index);
booksRouter.delete("/:id", booksController.delete);

export default booksRouter;
