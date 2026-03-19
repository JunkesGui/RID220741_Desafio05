import AppError from "@shared/errors/AppError";
import { Book } from "../entities/Book";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class GetBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute(id: number): Promise<Book> {
    const book = await this.bookRepositories.findById(id);

    if (!book) {
      throw new AppError("Book Not Found", 404);
    }

    return book;
  }
}
