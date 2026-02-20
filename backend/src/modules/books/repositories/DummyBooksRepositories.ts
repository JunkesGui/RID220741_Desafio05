import { ICreateBook } from "@shared/interfaces/ICreateBook";
import { Book } from "../entities/Book";
import { IBookRepositories } from "./IBookRepositories";

export default class DummyBooksRepositories implements IBookRepositories {
  private books: Book[] = [];

  async create({
    id,
    titulo,
    paginas,
    isbn,
    editora,
  }: ICreateBook): Promise<Book> {
    const book = new Book();

    book.id = id;
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

  async findByIsbn(isbn: string): Promise<Book | null> {
    const book = this.books.find((book) => book.isbn === isbn);

    return book as Book | null;
  }

  async findById(id: number): Promise<Book | null> {
    const book = this.books.find((book) => book.id === id);

    return book as Book | null;
  }

  async findAll(): Promise<Book[]> {
    return this.books;
  }
}
