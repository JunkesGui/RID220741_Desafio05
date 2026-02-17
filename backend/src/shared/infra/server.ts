import { AppDataSource } from "./database/database";
import express from "express";
import routes from "./routes";

const startServer = async () => {
  await AppDataSource.initialize();

  const app = express();

  app.use(routes);

  console.log("Connected to database");

  return app;
};

export default startServer()
  .then((app) => {
    return app.listen(3000, () => {
      console.log("Listening at port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
