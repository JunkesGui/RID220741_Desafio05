import type { Request, Response } from "express";
import CreateBookService from "../services/CreateBookService";
import BooksRepositories from "../repositories/BooksRepositories";

const booksRepositories = new BooksRepositories();

export default class BooksControllers {
  async create(request: Request, response: Response): Promise<Response> {
    const { titulo, paginas, isbn, editora } = request.body;
    const createBookService = new CreateBookService(booksRepositories);

    const book = await createBookService.execute({
      titulo,
      paginas,
      isbn,
      editora,
    });
    return response.json(book);
  }
}
