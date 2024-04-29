import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import cloudinary from "../libs/cloudinary";
import {
  updateProfile,
  getProfile,
  getProfileById,
} from "../controllers/profileController";

const profileRouter = Router();

cloudinary.config();

profileRouter.patch(
  "/profile",
  authentication,
  uploadMiddleware(),
  updateProfile
);

profileRouter.get("/profile", authentication, uploadMiddleware(), getProfile);
profileRouter.get("/profile/:id", getProfileById);

export default profileRouter;
