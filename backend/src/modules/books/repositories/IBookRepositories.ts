import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";

export interface IBookRepositories {
  create(book: ICreateBook): Promise<Book>;
  save(book: Book): Promise<Book>;
  findByIsbn(isbn: string): Promise<Book | null>;
  findById(id: number): Promise<Book | null>;
  findAll(): Promise<Book[]>;
}
