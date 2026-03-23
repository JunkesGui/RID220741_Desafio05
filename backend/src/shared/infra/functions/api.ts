import serverless from "serverless-http";
import { startServer } from "../server";

let handlerInstance: ReturnType<typeof serverless> | null = null;

const getHandler = async () => {
  if (!handlerInstance) {
    const app = await startServer();
    handlerInstance = serverless(app, { basePath: "/api" });
  }
  return handlerInstance;
};

export const handler = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    console.log("Incoming event:", JSON.stringify(event));
    const h = await getHandler();
    return await h(event, context);
  } catch (error) {
    console.error("Handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(error) }),
    };
  }
};
