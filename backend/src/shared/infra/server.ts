import { AppDataSource } from "./database/database";
import express from "express";
import routes from "./routes";
import ErrorHandlerMiddleware from "@shared/errors/ErrorHandlerMiddleware";
import cors from "cors";

export const startServer = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(routes);
  app.use(ErrorHandlerMiddleware.handleError);

  console.log("Connected to database");

  return app;
};

if (require.main === module) {
  startServer()
    .then((app) => {
      app.listen(3000, () => console.log("Listening at port 3000"));
    })
    .catch(console.error);
}
