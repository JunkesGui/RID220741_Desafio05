import { Book } from "../entities/Book";
import { AppDataSource } from "@shared/infra/database/database";
import { IBookRepositories } from "./IBookRepositories";
import { ICreateBook } from "@shared/interfaces/ICreateBook";

export default class BooksRepositories implements IBookRepositories {
  datasource = AppDataSource.getRepository(Book);

  async create(book: ICreateBook): Promise<Book> {
    const Createbook = this.datasource.create(book);

    await this.datasource.save(book);

    return book;
  }

  async save(book: Book): Promise<Book> {
    await this.datasource.save(book);
    return book;
  }

  async findByIsbn(isbn: string): Promise<Book | null> {
    return this.datasource.findOneBy({ isbn });
  }

  async findById(id: number): Promise<Book | null> {
    return this.datasource.findOneBy({ id });
  }

  async findAll(): Promise<Book[]> {
    return this.datasource.find();
  }
}
