// controllers for crud operations

import { Request, Response } from "express";
import {
  createPostService,
  getPostsService,
  updatePostService,
  deletePostService,
} from "../../services/posts/posts.services";
import { IPost } from "../../models/posts/post.models";
import { IResponse } from "../../types/utils.types";
import { IPostResponse } from "../../types/posts.types";
export const createPost = async (post: IPost) => {
  try {
    const response: IResponse = await createPostService(post);
    console.log(
      "🚀 ~ file: posts.bl.ts ~ line 16 ~ createPost ~ response",
      response
    );
    return response;
  } catch (e) {
    return { message: "Post not created", status: 500 };
  }
};
export const getPosts = async (userId: string) => {
  try {
    const response: IPostResponse = await getPostsService(userId);
    return response;
  } catch (error) {
    return { message: "Posts not fetched", status: 500 };
  }
};
export const updatePost = async (post: IPost, postId: string) => {
  try {
    const response = await updatePostService(post, postId);
    return response;
  } catch (error) {
    return { message: "Post not updated", status: 500 };
  }
};
export const deletePost = (postId: string) => {
    try {
    const response = deletePostService(postId);
    return response;
    } catch (error) {
        return { message: "Post not deleted", status: 500 };
    }

};
