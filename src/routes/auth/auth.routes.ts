import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// route to return the accessToken from linkedin
app.get("/accessToken/:code", async (req, res) => {
  console.log(req.params.code);
  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        grant_type: "authorization_code",
        code: req.params.code,
        redirect_uri: "http://localhost:5173/linkedin",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
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
    console.error("🚀 ~ file: auth.routes.ts ~ line 32 ~ .get ~ err", err);
    res.send(err).status(500);
  }
});
app.get("/accessToken/introspect/:code", async (req, res) => {
  console.log(req.params.code);
  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/introspectToken",
      {
        token: req.params.code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
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
