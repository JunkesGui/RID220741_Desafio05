import { AppDataSource } from "@shared/infra/database/database";
import { App } from "supertest/types";
import server from "@shared/infra/server";
import request from "supertest";
import { DummyBook } from "@modules/books/entities/DummyBook";

describe("CreateBook Integration", () => {
  let app: App;

  beforeAll(async () => {
    await AppDataSource.initialize();
    app = (await server) as App;
  });

  afterAll(async () => {
    const entities = AppDataSource.entityMetadatas;

    for (const entity of entities) {
      const repository = AppDataSource.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    }
    await AppDataSource.destroy();
  });

  it("Should be able to create a new Book", async () => {
    const res = await request(app).post("/livros").send(DummyBook);

    expect(res.status).toBe(200);
    expect(res.body.titulo).toBe(DummyBook.titulo);
  });

  it("Should not be able to create a book with a duplicate ISBN", async () => {
    const res = await request(app).post("/livros").send(DummyBook);

    expect(res.status).toBe(409);
  });
});
