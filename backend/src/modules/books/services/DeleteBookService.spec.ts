import DummyBooksRepositories from "@modules/books/repositories/DummyBooksRepositories";
import CreateBookService from "@modules/books/services/CreateBookService";
import AppError from "@shared/errors/AppError";
import { CreateDummyBook } from "../entities/DummyBook";
import { Book } from "../entities/Book";
import DeleteBookService from "./DeleteBookService";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;
let dummyBook: Book;
let deleteBook: DeleteBookService;

describe("DeleteBookService", () => {
  beforeEach(() => {
    bookRepositories = new DummyBooksRepositories();
    createBook = new CreateBookService(bookRepositories);
    deleteBook = new DeleteBookService(bookRepositories);
    dummyBook = CreateDummyBook(1, "Teste_ISBN");
  });

  it("Should be able to delete a Book", async () => {
    const book = await createBook.execute(dummyBook);
    await deleteBook.execute(book.id);

    expect(await bookRepositories.findById(book.id)).toBe(undefined);
  });

  it("Should not be able to delete a Book with an invalid ID", async () => {
    await expect(deleteBook.execute(dummyBook.id)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
