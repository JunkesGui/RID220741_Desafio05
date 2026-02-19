import { Book } from "../entities/Book";
import { IBookRepositories } from "../repositories/IBookRepositories";

export default class ListBookService {
  constructor(private readonly bookRepositories: IBookRepositories) {}

  async execute(): Promise<Book[]> {
    let findBooks = await this.bookRepositories.findAll();
    return findBooks;
  }
}
