import AppError from "@shared/errors/AppError";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class DeleteBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute(id: number): Promise<any> {
    const book = await this.bookRepositories.findById(id);

    if (!book) {
      throw new AppError("Livro não encontrado", 404);
    }

    await this.bookRepositories.remove(book);
  }
}
