//controllers for crud operations

import { Request, Response } from 'express';
import {createPostService, getPostsService, updatePostService, deletePostService} from '../../services/posts/posts.services';
export const createPost = (req: Request, res: Response) => {
    createPostService(req, res);
    };
export const getPosts = (req: Request, res: Response) => {
    getPostsService(req, res);
    };
export const updatePost = (req: Request, res: Response) => {
    updatePostService(req, res);
    };
export const deletePost = (req: Request, res: Response) => {
    deletePostService(req, res);
    }