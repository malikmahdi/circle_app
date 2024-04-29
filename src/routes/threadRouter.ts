import { Router } from "express";
import authentication from "../middleware/authentication";
import uploadMiddleware from "../middleware/upload";
import {
  createThread,
  getThreads,
  getThread,
  getThreadProfile,
  getReplies,
  getThreadImages,
  getThreadByUserId,
} from "../controllers/threadController";

const threadRouter = Router();

threadRouter.post("/thread", authentication, uploadMiddleware(), createThread);

threadRouter.get("/threads", getThreads);
threadRouter.get("/thread/:id", getThread);
threadRouter.get("/thread", authentication, getThreadProfile);
threadRouter.get("/threadUser/:id", authentication, getThreadByUserId);
threadRouter.get("/replies/:id", authentication, getReplies);

threadRouter.get("/images/:threadId", authentication, getThreadImages);

export default threadRouter;
