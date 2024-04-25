import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import {
  updateProfile,
  getProfile,
  getProfileById,
} from "../controllers/profileController";

const profileRouter = Router();

profileRouter.patch(
  "/profile",
  authentication,
  uploadMiddleware("cover"),
  updateProfile
);

profileRouter.get("/profile", authentication, getProfile);
profileRouter.get("/profile/:id", getProfileById);

export default profileRouter;
