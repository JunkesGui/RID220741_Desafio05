import type { Request, Response } from "express";
import CreateBookService from "../services/CreateBookService";
import BooksRepositories from "../repositories/BooksRepositories";
import ListBookService from "../services/ListBookService";
import DeleteBookService from "../services/DeleteBookService";
import UpdateBookService from "../services/UpdateBookService";

const booksRepositories = new BooksRepositories();

export default class BooksControllers {
  async create(request: Request, response: Response): Promise<Response> {
    const { id, titulo, num_paginas, isbn, editora } = request.body;
    const createBookService = new CreateBookService(booksRepositories);

    const book = await createBookService.execute({
      id,
      titulo,
      num_paginas,
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

  async delete(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const deleteBook = new DeleteBookService(booksRepositories);
    await deleteBook.execute(id);
    return response.status(200).json("Livro deletado com sucesso");
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id, titulo, num_paginas, isbn, editora } = request.body;
    const updateBookService = new UpdateBookService(booksRepositories);

    const book = await updateBookService.execute({
      id,
      titulo,
      num_paginas,
      isbn,
      editora,
    });
    return response.json(book);
  }
}
