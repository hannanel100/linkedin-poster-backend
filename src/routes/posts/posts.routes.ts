import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../../controllers/posts/posts.controllers";
const app = express();

app
  .route("/")
  .post((req, res) => {
    createPost(req, res);
  })
  .get((req, res) => {
    getPosts(req, res);
  })
  .put((req, res) => {
    updatePost(req, res);
  })
  .delete((req, res) => {
    deletePost(req, res);
  });

export { app as postsRouter };
