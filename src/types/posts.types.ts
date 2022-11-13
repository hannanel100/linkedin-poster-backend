import { IPost } from "../models/posts/post.models";
import { IResponse } from "../types/utils.types";
import type { WithId, Document } from "mongodb";

// type for document response
export interface IPostResponse extends Document {
  message: string;
  status: number;
  posts?: IPost[];
}
