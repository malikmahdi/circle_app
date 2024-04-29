import { Router } from "express";
import authentication from "../middleware/authentication";
import {
  follow,
  getFollower,
  getFollowing,
  checkFollowStatus,
  getUserNotFollow,
  getFollowingById,
} from "../controllers/followController";

const followRouter = Router();

followRouter.post("/follow", authentication, follow);
followRouter.get("/check-follow/:id_user", authentication, checkFollowStatus);
followRouter.get("/follower", authentication, getFollower);
followRouter.get("/following", authentication, getFollowing);
followRouter.get("/followingById", authentication, getFollowingById);
followRouter.get("/userNotFollow", authentication, getUserNotFollow);

export default followRouter;
