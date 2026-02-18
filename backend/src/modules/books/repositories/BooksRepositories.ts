import { Book } from "../entities/Book";
import { AppDataSource } from "@shared/infra/database/database";
import { IBookRepositories } from "./IBookRepositories";
import { ICreateBook } from "@shared/interfaces/ICreateBook";

export default class BooksRepositories implements IBookRepositories {
  datasource = AppDataSource.getRepository(Book);

  async create({ titulo, paginas, isbn, editora }: ICreateBook): Promise<Book> {
    const book = this.datasource.create({ titulo, paginas, isbn, editora });

    await this.datasource.save(book);

    return book;
  }

  async save(book: Book): Promise<Book> {
    await this.datasource.save(book);
    return book;
  }
}
