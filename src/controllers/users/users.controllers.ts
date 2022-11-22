import {
  getUserProfile,
  getUserById,
  getAllUsers,
} from "./../../bl/users/users.bl";
import express from "express";
import axios from "axios";
import { User } from "../../models/users/user.model";
const app = express();
// route to return the user profile from linkedin
app.route("/linkedin/user/:accessToken").get(async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,localizedLastName,localizedFirstName,profilePicture(displayImage~:playableStreams))",
      {
        headers: {
          Authorization: `Bearer ${req.params.accessToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.log(
      "🚀 ~ file: users.controllers.ts ~ line 24 ~ app.route ~ err",
      err
    );
    res.send(err).status(500);
  }
});
// post route to create a new user if it doesn't exist, or return the user if it does, and update the user's accessToken if it has changed
app.route("/linkedin/user").post(async (req, res) => {
  try {
    const user = await getUserProfile(req.body);
    res.json(user).status(200);
  } catch (err) {
    console.log(
      "🚀 ~ file: users.controllers.ts ~ line 34 ~ app.route ~ err",
      err
    );
    res.send(err).status(500);
  }
});

app.route("/linkedin/user/:id").get(async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json(user).status(200);
  } catch (err) {
    console.log(
      "🚀 ~ file: users.controllers.ts ~ line 44 ~ app.route ~ err",
      err
    );

    res.send(err).status(500);
  }
});
// route to get all users
app.route("/linkedin/users").get(async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users).status(200);
  } catch (err) {
    console.log(
      "🚀 ~ file: users.controllers.ts ~ line 64 ~ app.route ~ err",
      err
    );
    res.send(err).status(500);
  }
});

export { app as usersRouter };
