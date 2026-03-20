import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = process.env.MARIA_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: process.env.MARIA_HOST,
  port: port,
  username: process.env.MARIA_USER,
  password: process.env.MARIA_PASSWORD,
  database: process.env.MARIA_DB,
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/database/migrations/*.ts"],
});
