import { IPostResponse } from "./../../types/posts.types";
import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../../bl/posts/posts.bl";
const app = express();
import { IPost } from "../../models/posts/post.models";
import { IResponse } from "../../types/utils.types";
app
  .route("/")
  .post(async (req, res) => {
    const { id, image, content, date, isPosted }: IPost = req.body;
    const post = { id, image, content, date, isPosted };
    try {
      const response: IResponse = await createPost(post);
      res.status(response.status).json({ message: response.message });
    } catch (e) {
      res.status(500).json({ message: "Post not created" });
    }
  })
  .get(async (req, res) => {
    console.log(req.query.userId);
    const userId = req.query.userId + "";
    try {
      const response: IPostResponse = await getPosts(userId);
      res
        .status(response.status)
        .json({ message: response.message, posts: response.posts });
    } catch (error) {
      res.status(500).json({ message: "Posts not fetched" });
    }
  });
app
  .route("/:id")
  .put(async (req, res) => {
    const { id, image, content, date, isPosted }: IPost = req.body;
    const post = { id, image, content, date, isPosted };
    const postId = req.params.id + "";
    try {
      const response = await updatePost(post, postId);
      res.status(response.status).json({ message: response.message });
    } catch (error) {
      res.status(500).json({ message: "Post not updated" });
    }
  })
  .delete(async (req, res) => {
    const postId = req.params.id + "";
    try {
    const response = await deletePost(postId);  
    res.status(response.status).json({ message: response.message });
    } catch (error) {
      res.status(500).json({ message: "Post not deleted" });
    }
    
  });

export { app as postsRouter };
