//db access layer for posts

import { Post, IPost } from "../../models/posts/post.models";
import { Request, Response } from "express";
const createPost = (req: Request, res: Response) => {
  const post = new Post({
    image: req.body.image,
    content: req.body.content,
    date: req.body.date,
  });
  post.save().then((returnedPost) => {
    if (returnedPost === post) {
      res.status(201).json({
        message: "Post added successfully",
      });
    } else {
      res.status(500).json({
        message: "Post not added",
      });
    }
  });
};
const getPosts = (req: Request, res: Response) => {
  Post.find().then((documents: IPost[]) => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents,
      });
    } else {
      res.status(500).json({
        message: "Posts not fetched",
      });
    }
  });
};
const updatePost = (req: Request, res: Response) => {
  const post = new Post({
    _id: req.body.id,
    image: req.body.image,
    content: req.body.content,
    date: req.body.date,
  });
  Post.updateOne({ _id: req.params.id }, post)
    .then(() => {
      res.status(200).json({ message: "Update successful!" });
    })
    .catch((e) => {
      res.status(500).json({ message: "Update failed!" });
    });
};
const deletePost = (req: Request, res: Response) => {
  Post.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Post deleted!" });
    })
    .catch((e) => {
      res.status(500).json({ message: "Post not deleted!" });
    });
};

export {
  createPost as createPostService,
  getPosts as getPostsService,
  updatePost as updatePostService,
  deletePost as deletePostService,
};
