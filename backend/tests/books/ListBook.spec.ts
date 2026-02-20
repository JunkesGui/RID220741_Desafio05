import { AppDataSource } from "@shared/infra/database/database";
import { App } from "supertest/types";
import server from "@shared/infra/server";
import request from "supertest";
import { DummyBook } from "@modules/books/entities/DummyBook";
import { get } from "http";

describe("ListBook Integration", () => {
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

  it("Should be able to return an empty Array if there is no registered Books", async () => {
    const res = await request(app).get("/livros");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(0);
  });

  it("Should be able to return the list of registered Books", async () => {
    await request(app).post("/livros").send(DummyBook);
    const res = await request(app).get("/livros");
  });
});
