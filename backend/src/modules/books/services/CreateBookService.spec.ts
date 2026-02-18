import { DummyBook } from "@modules/books/entities/DummyBook";
import DummyBooksRepositories from "@modules/books/repositories/DummyBooksRepositories";
import CreateBookService from "@modules/books/services/CreateBookService";
import AppError from "@shared/errors/AppError";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;

describe("CreateBookService", () => {
  beforeEach(() => {
    bookRepositories = new DummyBooksRepositories();
    createBook = new CreateBookService(bookRepositories);
  });

  it("Should be able to create a Book", async () => {
    const book = await createBook.execute(DummyBook);

    expect(book.titulo).toBe("Teste");
  });

  it("Should not be able to create a book with a duplicate ISBN", async () => {
    const book = await createBook.execute(DummyBook);

    await expect(createBook.execute(DummyBook)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
