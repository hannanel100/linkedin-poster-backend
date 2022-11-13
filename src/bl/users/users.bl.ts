// call users.services.ts from users.controllers.ts
import { createOrUpdateUser } from "../../services/users/users.services";
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
//
