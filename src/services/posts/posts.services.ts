// db access layer for posts
import { Post, IPost } from "../../models/posts/post.models";

import { uploadImage } from "../../cloudinary";

const createPost = async (post: IPost) => {
  const { id, image, content, date, isPosted } = post;
  let publicId = undefined;
  // upload image to cloudinary
  if (image) {
    publicId = await uploadImage(image);
  }
  // save post to db
  const newPost = new Post({
    id,
    publicId,
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
      // retrieve image urls from cloudinary
      const posts = documents.map((post) => {
        const { publicId, content, date, isPosted } = post;
        const image = publicId
          ? `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}.jpg`
          : undefined;
        return { image, content, date, isPosted, _id: post._id, id: post.id };
      });
      return {
        message: "Posts fetched successfully!",
        status: 200,
        posts: posts.length> 0 ? posts : [],
      };
    
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
