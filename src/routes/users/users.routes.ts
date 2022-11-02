import express from "express";
import axios from "axios";
const app = express();

// route to return the user profile from linkedin
app.route("/linkedin/user/:accessToken").get(async (req, res) => {
  console.log(
    "🚀 ~ file: users.routes.ts ~ line 36 ~ app.get ~ req.params.accessToken",
    req.params.accessToken
  );

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
      "🚀 ~ file: users.routes.ts ~ line 43 ~ app.get ~ response",
      response
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("🚀 ~ file: users.routes.ts ~ line 46 ~ app.get ~ err", err);
    res.send(err).status(500);
  }
});

export { app as usersRouter };
