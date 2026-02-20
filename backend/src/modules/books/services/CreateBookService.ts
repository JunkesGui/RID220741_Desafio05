import AppError from "@shared/errors/AppError";
import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class CreateBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute({
    id,
    titulo,
    paginas,
    isbn,
    editora,
  }: ICreateBook): Promise<Book> {
    const [idMatch, isbnMatch] = await Promise.all([
      this.bookRepositories.findById(id),
      this.bookRepositories.findByIsbn(isbn),
    ]);
    if (idMatch || isbnMatch) {
      throw new AppError("This book is already registered", 409);
    }

    const book = this.bookRepositories.create({
      id,
      titulo,
      paginas,
      isbn,
      editora,
    });

    return book;
  }
}
