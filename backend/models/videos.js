import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  videoid: { type: String, required: [true] },
  videourl: { type: String, required: [true] },
  view: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  comments: {
    type: [
      {
        name: { type: String },
        text: { type: String },
      },
    ],
    default: [{ name: "abhay", text: "fav song" }],
  },
});

export default mongoose.model("videos", videoSchema);
