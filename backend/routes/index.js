import express from "express";
const Router = express.Router();
import videoSchema from "../models/videos.js";
import userSchema from "../models/user.js";

// creating a video
const createvideo = async (req, res) => {
  const data = new videoSchema({
    url: req.body.url,
  });
  try {
    const response = await data.save();
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
Router.get("/create", createvideo);

// fetch all videos
const fetchvideos = async (req, res) => {
  // console.log("incoming");
  try {
    const response = await videoSchema.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};
Router.get("/fetchvideos", fetchvideos);

// login user
const loginuser = async (req, res) => {
  const data = new userSchema({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const response = await data.save();
    res.send(response);
  } catch (error) {
    res.json(error);
  }
};
Router.post("/login", loginuser);

// export
export default Router;
