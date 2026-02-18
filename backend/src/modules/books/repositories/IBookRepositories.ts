import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";

export interface IBookRepositories {
  create(book: ICreateBook): Promise<Book>;
  save(book: Book): Promise<Book>;
}
