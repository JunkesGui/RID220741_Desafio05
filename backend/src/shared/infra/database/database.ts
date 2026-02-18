require("dotenv/config");
require("reflect-metadata");
import { DataSource } from "typeorm";

const port = process.env.POSTGRES_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: port,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/database/migrations/*.ts"],
});
