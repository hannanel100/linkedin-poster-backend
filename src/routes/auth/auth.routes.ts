import express from "express";
import axios from "axios";
const app = express();
//route to return the accessToken from linkedin
app.route("/accessToken/:code").get(async (req, res) => {
  console.log(req.params.code);
  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        grant_type: "authorization_code",
        code: req.params.code,
        redirect_uri: "http://localhost:5173/linkedin",
        client_id: "77oz8xd2w9jzop",
        client_secret: "Uwg5ICdpDKwxc9xl",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("🚀 ~ file: users.routes.ts ~ line 53 ~ .get ~ err", err);
    res.send(err).status(500);
  }
});

export { app as authRouter };