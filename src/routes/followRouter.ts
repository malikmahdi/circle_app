import { Router } from "express";
import authentication from "../middleware/authentication";
import {
  follow,
  getFollower,
  getFollowing,
} from "../controllers/followController";

const followRouter = Router();

followRouter.post("/follow", authentication, follow);
followRouter.get("/follower/:followingId", authentication, getFollower);
followRouter.get("/following/:followerId", authentication, getFollowing);

export default followRouter;
