//mongoose model for user
import { Schema, model, Types } from "mongoose";

interface IUser {
  _id?: Types.ObjectId;
  email: string;
  image: string;
  code: string;
}

const userSchema = new Schema<IUser>({
  // _id: { type: Schema.Types.ObjectId, required: false },
  email: { type: String, required: true },
  image: { type: String, required: true },
  code: { type: String, required: true },
});

const User = model("User", userSchema);
export { User, IUser };
