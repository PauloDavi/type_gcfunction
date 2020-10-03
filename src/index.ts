// To use .env in development
if (process.env.NODE_ENV !== "development") {
  require("dotenv/config");
}

// You first function
export const helloWorld = (req: any, res: any) => {
  return res.send(process.env.NODE_ENV || "Hello World!");
};
