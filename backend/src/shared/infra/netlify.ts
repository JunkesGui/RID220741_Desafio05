import serverless from "serverless-http";
import { startServer } from "./server";

const handler = startServer().then((app) => serverless(app));

export { handler };
