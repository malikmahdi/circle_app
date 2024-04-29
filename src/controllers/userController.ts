import { Request, Response } from "express";
import * as userService from "../services/userService";

export const register = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const result = await userService.register(body);

    res.json({
      status: true,
      message: "Success",
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);

    res.json({
      status: true,
      message: "success",
      data: token,
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const condition = req.query;
    const userId = res.locals.user;

    const users = await userService.getUsers(
      condition as { username: string },
      userId
    );

    res.json({
      status: true,
      message: "success",
      data: users,
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(+id);

    res.json({
      status: true,
      message: "Success",
      data: user,
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
  }
};
