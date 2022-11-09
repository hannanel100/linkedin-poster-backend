// db access layer for posts

import { Post, IPost } from "../../models/posts/post.models";
import { Request, Response } from "express";
const createPost = (req: Request, res: Response) => {
  const post = new Post({
    id: req.body.id,
    image: req.body.image,
    content: req.body.content,
    date: req.body.date,
    isPosted: req.body.isPosted,
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
const getPosts = async (req: Request, res: Response) => {
  const userId = req.query.userId;
  try {
    const documents = await Post.find({ id: userId });
    if (documents) {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Posts not fetched",
    });
  }
};
const updatePost = (req: Request, res: Response) => {
  const post = new Post({
    _id: req.params.id,
    id: req.body.id,
    image: req.body.image,
    content: req.body.content,
    date: req.body.date,
    isPosted: req.body.isPosted,
  });
  Post.updateOne({ _id: req.params.id }, post)
    .then(() => {
      res.status(200).json({ message: "Update successful!" });
    })
    .catch((e) => {
      res.status(500).json({ message: "Update failed!" });
    });
};
const deletePost = async (req: Request, res: Response) => {
  // delete using async await
  const post = await Post.findByIdAndDelete(req.params.id);
  if (post) {
    res.status(200).json({ message: "Delete successful!" });
  } else {
    res.status(500).json({ message: "Delete failed!" });
  }
};

export {
  createPost as createPostService,
  getPosts as getPostsService,
  updatePost as updatePostService,
  deletePost as deletePostService,
};
