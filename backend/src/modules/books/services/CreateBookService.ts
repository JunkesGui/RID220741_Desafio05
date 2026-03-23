import AppError from "@shared/errors/AppError";
import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class CreateBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute(book: ICreateBook): Promise<Book> {
    const [idMatch, isbnMatch] = await Promise.all([
      this.bookRepositories.findById(book.id),
      this.bookRepositories.findByIsbn(book.isbn),
    ]);
    if (idMatch || isbnMatch) {
      throw new AppError("Este ID e/ou ISBN já está em uso", 409);
    }

    const createbook = this.bookRepositories.create(book);

    return createbook;
  }
}
