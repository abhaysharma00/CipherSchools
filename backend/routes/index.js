import express from "express";
const Router = express.Router();
// creating a video
import {
  createvideo,
  fetchvideos,
  addcomment,
  addlike,
  adddislike,
  addview,
  loginuser,
} from "../controllers/index.js";
Router.post("/login", loginuser);
Router.get("/create", createvideo);
Router.get("/fetchvideos", fetchvideos);
Router.patch("/addcomment", addcomment);
Router.patch("/addlike", addlike);
Router.patch("/adddislike", adddislike);
Router.patch("/addview", addview);

// export
export default Router;
