import { Book } from "../entities/Book";
import { DummyBook } from "../entities/DummyBook";
import DummyBooksRepositories from "../repositories/DummyBooksRepositories";
import CreateBookService from "./CreateBookService";
import ListBookService from "./ListBookService";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;
let listBook: ListBookService;

describe("ListBookService", () => {
  beforeEach(() => {
    bookRepositories = new DummyBooksRepositories();
    listBook = new ListBookService(bookRepositories);
    createBook = new CreateBookService(bookRepositories);
  });

  it("Should be able to return the list of registered Books", async () => {
    await createBook.execute(DummyBook);
    let findBooks = await listBook.execute();

    expect(findBooks[0]).toBeInstanceOf(Book);
    expect(findBooks).toHaveLength(1);
  });

  it("Should be able to return an empty Array if there is no registered Books", async () => {
    let findBooks = await listBook.execute();

    expect(findBooks).toHaveLength(0);
  });
});
