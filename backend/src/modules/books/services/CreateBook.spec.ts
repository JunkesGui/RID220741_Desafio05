import { DummyBook } from "@modules/books/entities/DummyBook";
import DummyBooksRepositories from "@modules/books/repositories/DummyBooksRepositories";
import CreateBookService from "@modules/books/services/CreateBookService";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;

describe("CreateBookService", () => {
  beforeEach(() => {
    bookRepositories = new DummyBooksRepositories();
    createBook = new CreateBookService(bookRepositories);
  });

  it("Should be able to create a Book", async () => {
    const book = await createBook.execute(DummyBook);
    console.log(book);

    expect(book.titulo).toBe("Teste");
  });
});
