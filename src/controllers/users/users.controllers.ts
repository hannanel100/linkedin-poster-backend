import { createOrUpdateUser } from "../../services/users/users.services";
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
    console.log(
      "🚀 ~ file: users.routes.ts ~ line 18 ~ app.route ~ response.data",
      response.data
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error(
      "🚀 ~ file: users.routes.ts ~ line 19 ~ app.route ~ err",
      err
    );

    res.send(err).status(500);
  }
});
// post route to create a new user if it doesn't exist, or return the user if it does, and update the user's accessToken if it has changed
app.route("/linkedin/user").post(async (req, res) => {
  try {
    const user = await createOrUpdateUser(req.body);
    res.json(user).status(200);
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    res.send(err).status(500);
  }
});

app.route("/linkedin/user/:id").get(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user).status(200);
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    res.send(err).status(500);
  }
});
// route to get all users
app.route("/linkedin/users").get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (err) {
    console.error(
      "🚀 ~ file: users.controllers.ts ~ line 12 ~ getUserProfile ~ err",
      err
    );
    res.send(err).status(500);
  }
});

export { app as usersRouter };
