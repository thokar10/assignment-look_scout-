import express from "express";
import "./models/userModel";
import cors from "cors";
import signUpUser from "./controller/signUpUser";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.db_connect!, {})
  .then(() => {
    console.log("connection to database successful");
  })
  .catch(() => {
    console.log("connection to database failed");
  });

app.get("/user/signUp", signUpUser);
app.listen("8000", () => {
  console.log("server started successfully");
});
