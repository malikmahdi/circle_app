import db from "../db";
import { Request, Response } from "express";
import * as followService from "../services/followService";

export const follow = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { followingId } = req.body;
    const followerId = res.locals.user;

    const follow = await followService.follow(followerId, followingId);

    res.json({ success: true, message: follow });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getFollower = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;
    // const { followingId } = req.params;

    const follower = await db.follow.findMany({
      where: {
        followingId: +userId,
      },
      select: {
        follower: {
          select: {
            id: true,
            fullname: true,
            username: true,
            profile: {
              select: {
                avatar: true,
              },
            },
          },
        },
      },
    });

    res.json({ success: true, message: "Success", data: follower });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getFollowing = async (req: Request, res: Response) => {
  try {
    // const { followerId } = req.params;
    const userId = res.locals.user;

    const following = await db.follow.findMany({
      where: {
        followerId: +userId,
      },
      include: {
        following: {
          select: {
            id: true,
            fullname: true,
            username: true,
            profile: {
              select: {
                avatar: true,
              },
            },
          },
        },
      },
    });

    res.json({ success: true, message: "Success", data: following });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getUserNotFollow = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;

    const users = await db.follow.findMany({
      where: {
        NOT: {
          followerId: +userId,
        },
      },
    });

    res.json({
      success: true,
      message: "Success",
      data: users,
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const checkFollowStatus = async (req: Request, res: Response) => {
  try {
    const loggedInId = res.locals.user;
    const { id_user } = req.params;

    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: loggedInId,
        followingId: +id_user,
      },
    });

    console.log(isFollowing);

    res.json({
      success: true,
      message: "Success",
      data: isFollowing ? true : false,
    });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getFollowingById = async (req: Request, res: Response) => {
  try {
    const { followingId } = req.body;
    const userId = res.locals.user;

    const followingById = await db.follow.findFirst({
      where: {
        followerId: +userId,
        followingId: +followingId,
      },
      include: {
        following: {
          select: {
            id: true,
            fullname: true,
            username: true,
            profile: {
              select: {
                avatar: true,
              },
            },
          },
        },
      },
    });

    res.json({ success: true, message: "Success", data: followingById });
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
