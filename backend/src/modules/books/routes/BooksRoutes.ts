import { Router } from "express";
import BooksControllers from "../controllers/BooksControllers";
import { createBookSchema, updateBookSchema } from "../schemas/BookSchema";

const booksRouter = Router();
const booksController = new BooksControllers();

booksRouter.post("/", createBookSchema, booksController.create);
booksRouter.get("/", booksController.index);
booksRouter.get("/:id", booksController.show);
booksRouter.delete("/:id", booksController.delete);
booksRouter.put("/:id", updateBookSchema ,booksController.update);

export default booksRouter;
