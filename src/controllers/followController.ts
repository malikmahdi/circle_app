import db from "../db";
import { Request, Response } from "express";
import * as followService from "../services/followService";

export const follow = async (req: Request, res: Response) => {
  try {
    const { followingId } = req.body;
    const followerId = res.locals.user;

    const follow = await followService.follow(followerId, followingId);

    res.json({ success: true, message: follow });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
};

export const getFollower = async (req: Request, res: Response) => {
  try {
    const { followingId } = req.params;

    const follower = await db.follow.findMany({
      where: {
        followingId: +followingId,
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
    const { followerId } = req.params;

    const following = await db.follow.findMany({
      where: {
        followerId: +followerId,
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
