import AppError from "@shared/errors/AppError";
import { Book } from "../entities/Book";
import { CreateDummyBook, UpdateDummyBook } from "../entities/DummyBook";
import DummyBooksRepositories from "../repositories/DummyBooksRepositories";
import CreateBookService from "./CreateBookService";
import UpdateBookService from "./UpdateBookService";

let bookRepositories: DummyBooksRepositories;
let createBook: CreateBookService;
let dummyBook: Book;
let dummyBook2: Book;
let updateDummy: Book;
let updateBook: UpdateBookService;
let book: Book;

describe("UpdateBookService", () => {
  beforeEach(async () => {
    bookRepositories = new DummyBooksRepositories();
    createBook = new CreateBookService(bookRepositories);
    dummyBook = CreateDummyBook(1, "Teste_ISBN");
    dummyBook2 = CreateDummyBook(2, "Teste2_ISBN");
    updateDummy = UpdateDummyBook(1, "Teste_ISBN");
    updateBook = new UpdateBookService(bookRepositories);
    book = await createBook.execute(dummyBook);
  });

  it("Should be able to update a Book's info", async () => {
    await updateBook.execute(updateDummy);

    expect(book.titulo).toBe(updateDummy.titulo);
  });

  it("Should not be able to update a book to a duplicate ISBN", async () => {
    const book2 = await createBook.execute(dummyBook2);

    await expect(
      updateBook.execute({
        id: book2.id,
        titulo: updateDummy.titulo,
        isbn: updateDummy.isbn,
        editora: updateDummy.editora,
        num_paginas: updateDummy.num_paginas,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
