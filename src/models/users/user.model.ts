// mongoose model for user
import { Schema, model, Types } from "mongoose";

interface IUser {
  _id?: Types.ObjectId;
  id: string;
  accessToken: string;
}

const userSchema = new Schema<IUser>({
  // _id: { type: Schema.Types.ObjectId, required: false },
  id: { type: String, required: true },
  accessToken: { type: String, required: true },
});

const User = model("User", userSchema);
export { User, IUser };
