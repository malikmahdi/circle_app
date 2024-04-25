import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import {
  createThread,
  getThreads,
  getThread,
  getThreadProfile,
  getReplies,
} from "../controllers/threadController";

const threadRouter = Router();

threadRouter.post(
  "/thread",
  authentication,
  uploadMiddleware("image"),
  createThread
);

threadRouter.get("/threads", getThreads);
threadRouter.get("/thread/:id", getThread);
threadRouter.get("/thread", authentication, getThreadProfile);
threadRouter.get("/replies/:id", authentication, getReplies);

export default threadRouter;
