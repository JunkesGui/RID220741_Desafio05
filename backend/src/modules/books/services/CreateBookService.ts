import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";
import AppError from "@shared/errors/AppError";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class CreateBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute({
    titulo,
    paginas,
    isbn,
    editora,
  }: ICreateBook): Promise<Book> {
    const bookExists = null;

    if (bookExists) {
      throw new AppError("This book is already registered", 409);
    }
    const book = this.bookRepositories.create({
      titulo,
      paginas,
      isbn,
      editora,
    });

    return book;
  }
}
