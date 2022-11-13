// service to create a new user if it doesn't exist, or return the user if it does, and update the user's accessToken if it has changed

// Path: src/services/users/users.services.ts

import { IUser, User } from "../../models/users/user.model";

export const createOrUpdateUser = async (user: IUser) => {
  const userExists = await User.findOne({ id: user.id });
  if (userExists) {
    const updatedUser = await User.findOneAndUpdate(
      { id: user.id },
      { accessToken: user.accessToken },
      { new: true }
    );
    return updatedUser;
  } else {
    const newUser = await User.create(user);
    return newUser;
  }
};
export const getUserByIdService = async (id: string) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    return err;
  }
}

export const getAllUsersService = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    return err;
  }
}
