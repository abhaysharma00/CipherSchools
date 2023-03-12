import videoSchema from "../models/videos.js";
import userSchema from "../models/user.js";

export const createvideo = async (req, res) => {
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

export const fetchvideos = async (req, res) => {
  // console.log("incoming");
  try {
    const response = await videoSchema.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

export const loginuser = async (req, res) => {
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

export const addcomment = async (req, res) => {
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

export const addlike = async (req, res) => {
  const { likes } = req.body;
  const { id } = req.query;
  // console.log(likes);
  try {
    // patch
    const response = await videoSchema.findOneAndUpdate(
      { _id: id },
      { likes: 1 + likes },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};

export const adddislike = async (req, res) => {
  const { dislikes } = req.body;
  const { id } = req.query;
  // console.log(dislikes);
  try {
    // patch
    const response = await videoSchema.findOneAndUpdate(
      { _id: id },
      { dislikes: 1 + dislikes },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};

export const addview = async (req, res) => {
  const { view } = req.body;
  const { id } = req.query;
  try {
    // patch
    const response = await videoSchema.findOneAndUpdate(
      { _id: id },
      { view: 1 + view },
      { new: true }
    );
    res.json(response);
  } catch (error) {
    res.json("error");
  }
};
