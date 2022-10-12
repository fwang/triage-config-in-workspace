import { Config } from "@serverless-stack/node/config";

export const handler = async () => {
  return {
    statusCode: 200,
    body: "Hello, World!",
  };
};
