import serverless from "serverless-http";
import { startServer } from "../server";

let handlerInstance: ReturnType<typeof serverless>;

export const handler = async (event: any, context: any) => {
  if (!handlerInstance) {
    const app = await startServer();
    handlerInstance = serverless(app);
  }
  return handlerInstance(event, context);
};
