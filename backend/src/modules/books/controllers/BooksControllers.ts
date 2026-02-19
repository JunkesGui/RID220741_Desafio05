import type { Request, Response } from "express";
import CreateBookService from "../services/CreateBookService";
import BooksRepositories from "../repositories/BooksRepositories";
import ListBookService from "../services/ListBookService";

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

  async index(request: Request, response: Response): Promise<Response> {
    const listBookService = new ListBookService(booksRepositories);
    const books = await listBookService.execute();
    return response.json(books);
  }
}
