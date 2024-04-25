import { Router } from "express";
import authentication from "../middleware/authentication";
import {
  createLike,
  getLikes,
  getCurrentLike,
} from "../controllers/likeController";

const likeRouter = Router();

likeRouter.post("/like", authentication, createLike);
likeRouter.get("/likes/:threadId", authentication, getLikes);
likeRouter.get("/like/:threadId/", authentication, getCurrentLike);

export default likeRouter;
