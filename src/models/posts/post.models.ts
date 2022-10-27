// model for a post
import {Schema, model, Types} from 'mongoose';
 interface IPost{
  _id?: Types.ObjectId,
  image: string,
  content: string,
  date: string
};

const postSchema= new Schema<IPost>({
  // _id: { type: Schema.Types.ObjectId, required: false },
  image: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
});
const Post = model("Post", postSchema);
export {Post, IPost};
