import { mongoDbUrl } from "./config/mongodb.config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const app = express();
import { postsRouter } from "./controllers/posts/posts.controllers";
import { usersRouter } from "./controllers/users/users.controllers";
import { authRouter } from "./controllers/auth/auth.controllers";

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}${mongoDbUrl}`
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log("error: ", e);
    console.log("Connection failed!");
  });
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
