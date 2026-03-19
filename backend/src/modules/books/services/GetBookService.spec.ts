import AppError from "@shared/errors/AppError";
import { Book } from "../entities/Book";
import { CreateDummyBook } from "../entities/DummyBook";
import DummyBooksRepositories from "../repositories/DummyBooksRepositories";
import CreateBookService from "./CreateBookService";
import GetBookService from "./GetBookService";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;
let getBook: GetBookService;
let dummyBook = CreateDummyBook(1, "Teste_ISBN");
let newBook: Book;

describe("GetBookService", () => {
  beforeEach(async () => {
    bookRepositories = new DummyBooksRepositories();
    getBook = new GetBookService(bookRepositories);
    createBook = new CreateBookService(bookRepositories);
    newBook = await createBook.execute(dummyBook);
  });

  it("Should be able to return a book by its ID", async () => {
    let book = await getBook.execute(dummyBook.id);

    expect(book?.isbn).toBe(dummyBook.isbn);
  });

  it("Should not be able to find a invalid ID", async () => {
    await expect(getBook.execute(2)).rejects.toBeInstanceOf(AppError);
  });
});
