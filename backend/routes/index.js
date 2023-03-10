import express from "express";
const Router = express.Router();
import videoSchema from "../models/videos.js";
import userSchema from "../models/user.js";

// creating a video
const createvideo = async (req, res) => {
  const data = new videoSchema({
    videoid: req.body.videoid,
    videourl: req.body.videourl,
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

// adding comment
const addcomment = async (req, res) => {
  // console.log(req);
  const { name, text } = req.body;
  const { id } = req.query;
  try {
    // patch
    const response = await videoSchema.findOneAndUpdate(
      { _id: id },
      { $push: { comments: [{ name: name, text: text }] } },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};
Router.patch("/addcomment", addcomment);

// adding like
const addlike = async (req, res) => {
  const { likes } = req.body;
  const { id } = req.query;
  try {
    // patch
    const response = await videoSchema.findOneAndUpdate(
      { _id: id },
      { likes: likes },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};
Router.patch("/addlike", addlike);

// export
export default Router;
