import { Router } from "express";
import {
  register,
  login,
  getUsers,
  getUser,
} from "../controllers/userController";
import authentication from "../middleware/authentication";

const userRouter = Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/users", authentication, getUsers);
userRouter.get("/user/:id", getUser);

export default userRouter;
