import { mongoDbUrl } from "./config/mongodb.config";
import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { postsRouter } from "./routes/posts/posts.routes";

mongoose
  .connect(mongoDbUrl)
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
app.use("/api/posts", postsRouter);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
