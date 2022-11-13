// call users.services.ts from users.controllers.ts
import {
  createOrUpdateUser,
  getUserByIdService,
  getAllUsersService,
} from "../../services/users/users.services";
import { ParamsDictionary } from "express-serve-static-core";

import { IUser, User } from "../../models/users/user.model";

export const getUserProfile = async (user: IUser) => {
  try {
    const receivedUser = await createOrUpdateUser(user);
    return receivedUser;
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    return err;
  }
};
export const getUserById = async (id: string) => {
  try {
    const user = await getUserByIdService(id);
    return user;
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    return err;
  }
};
export const getAllUsers = async () => {
  try {
    const users = await getAllUsersService();
    return users;
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    return err;
  }
};

//
