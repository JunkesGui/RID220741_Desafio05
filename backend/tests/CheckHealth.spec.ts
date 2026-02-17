import { App } from "supertest/types";
import request from "supertest";
import appPromise from "../src/shared/infra/server";

describe("Check Application Connection", () => {
  let app: App;

  beforeAll(async () => {
    app = (await appPromise) as App;
  });

  it("Should be able to return server's health status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Recieving requests");
  });
});
