import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const server = express();

server.use(json())
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(
    `This server is running the port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}/`
  );
});
