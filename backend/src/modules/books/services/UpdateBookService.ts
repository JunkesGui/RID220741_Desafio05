import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { IBookRepositories } from "../repositories/IBookRepositories";
import { Book } from "../entities/Book";
import AppError from "@shared/errors/AppError";

export default class UpdateBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute(book: ICreateBook): Promise<Book> {
    const oldBook = await this.bookRepositories.findById(book.id);

    if (!oldBook) {
      throw new AppError("Livro não encontrado", 404);
    }

    const isbnMatch = await this.bookRepositories.findByIsbn(book.isbn);

    if (isbnMatch && book.isbn !== oldBook.isbn) {
      throw new AppError("Este ID e/ou ISBN já está em uso", 409);
    }

    oldBook.titulo = book.titulo;
    oldBook.num_paginas = book.num_paginas;
    oldBook.isbn = book.isbn;
    oldBook.editora = book.editora;

    await this.bookRepositories.save(oldBook);

    return oldBook;
  }
}
