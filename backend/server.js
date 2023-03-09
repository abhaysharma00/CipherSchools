import express from "express";
const app = express();
import mongoose from "mongoose";
import Router from "./routes/index.js";
import cors from "cors";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();

app.use(cors());
app.use(express.json());

// sample route
app.get("/videoplayer", (req, res) => res.send("welcome"));
app.use("/app", Router);

// connecting mongoDB and starting server
const start = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("db connected");
    app.listen(8000, () => {
      console.log("listening");
    });
  } catch (e) {
    console.log(e);
  }
};
start();
