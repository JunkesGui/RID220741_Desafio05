import booksRouter from "../../../modules/books/routes/BooksRoutes";
import { request, response, Router } from "express";

const routes = Router();

routes.get("/health", (request, response) => {
  return response.json({ message: "Recieving requests" });
});

routes.use("/livros", booksRouter);

export default routes;
