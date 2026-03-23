import serverless from "serverless-http";
import { startServer } from "../server";

export const handler = async (event: any, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const app = await startServer();
    const serverlessHandler = serverless(app, { basePath: "/api" });
    const result = await serverlessHandler(event, context);
    console.log("Handler result:", JSON.stringify(result));
    return result;
  } catch (error) {
    console.error("Handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(error) }),
    };
  }
};
