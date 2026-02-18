import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";

export default class DummyBooksRepositories {
  private books: Book[] = [];

  async create({ titulo, paginas, isbn, editora }: ICreateBook): Promise<Book> {
    const book = new Book();

    book.id = this.books.length + 1;
    book.titulo = titulo;
    book.paginas = paginas;
    book.isbn = isbn;
    book.editora = editora;

    this.books.push(book);

    return book;
  }

  async save(book: Book): Promise<Book> {
    const findBook = this.books.findIndex((find) => find.id === book.id);

    this.books[findBook] = book;

    return book;
  }
}
