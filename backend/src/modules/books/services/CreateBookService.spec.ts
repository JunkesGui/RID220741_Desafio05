import DummyBooksRepositories from "@modules/books/repositories/DummyBooksRepositories";
import CreateBookService from "@modules/books/services/CreateBookService";
import AppError from "@shared/errors/AppError";
import { CreateDummyBook } from "../entities/DummyBook";
import { Book } from "../entities/Book";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;
let dummyBook: Book;

describe("CreateBookService", () => {
  beforeEach(() => {
    bookRepositories = new DummyBooksRepositories();
    createBook = new CreateBookService(bookRepositories);
    dummyBook = CreateDummyBook(1, "Teste_ISBN");
  });

  it("Should be able to create a Book", async () => {
    const book = await createBook.execute(dummyBook);

    expect(book.titulo).toBe(dummyBook.titulo);
  });

  it("Should not be able to create a book with a duplicate ISBN", async () => {
    const book = await createBook.execute(dummyBook);

    await expect(createBook.execute(dummyBook)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
