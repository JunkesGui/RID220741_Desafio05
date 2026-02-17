import { request, response, Router } from "express";

const routes = Router();

routes.get("/health", (request, response) => {
  return response.json({ message: "Recieving requests" });
});

export default routes;
