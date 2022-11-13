// db access layer for posts

import { Post, IPost } from "../../models/posts/post.models";
import { Request, Response } from "express";
const createPost = async (post: IPost) => {
  const { id, image, content, date, isPosted } = post;
  const newPost = new Post({
    id,
    image,
    content,
    date,
    isPosted,
  });
  const returnedPost = await newPost.save();
  if (returnedPost === newPost) {
    return { message: "Post created successfully!", status: 201 };
  } else {
    return { message: "Post not created", status: 500 };
  }
};
const getPosts = async (userId: string) => {
  try {
    const documents = await Post.find({ id: userId });
    if (documents.length > 0) {
      return {
        message: "Posts fetched successfully!",
        status: 200,
        posts: documents,
      };
    } else {
      return { message: "No posts found", status: 404, posts: [] };
    }
  } catch (error) {
    return { message: "Posts not fetched", status: 500 };
  }
};
const updatePost = async (post: IPost, postId: string) => {
  const postToUpdate = new Post({
    ...post,
    _id: postId,
  });
  try {
    const updatedPost = await Post.updateOne({ _id: postId }, postToUpdate);
    return { message: "Post updated successfully!", status: 200 };
  } catch (error) {
    return { message: "Post not updated", status: 500 };
  }
};
const deletePost = async (postId: string) => {
  // delete using async await
  try {
    const post = await Post.findByIdAndDelete(postId);
    if (post) {
      return { message: "Post deleted successfully!", status: 200 };
    } else {
      return { message: "Post not found", status: 404 };
    }
  } catch (error) {
    return { message: "Post not deleted", status: 500 };
  }
};

export {
  createPost as createPostService,
  getPosts as getPostsService,
  updatePost as updatePostService,
  deletePost as deletePostService,
};
