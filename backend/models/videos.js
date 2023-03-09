import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    url: { type: String, required: [true] },
    view: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comment: {
      type: {
        name: { type: String },
        text: { type: String },
      },
    },
  }
  //   {timestamps:true}
);

export default mongoose.model("videos", videoSchema);
