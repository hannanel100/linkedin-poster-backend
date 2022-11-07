// model for a post
import { Schema, model, Types } from "mongoose";
interface IPost {
  _id?: Types.ObjectId;
  id: string;
  image?: string;
  content: string;
  date: string;
  isPosted: boolean;
}

const postSchema = new Schema<IPost>({
  // _id: { type: Schema.Types.ObjectId, required: false },
  id: { type: String, required: true },
  image: { type: String, required: false },
  content: { type: String, required: true },
  date: { type: String, required: true },
  isPosted: { type: Boolean, required: true },
});
const Post = model("Post", postSchema);
export { Post, IPost };
