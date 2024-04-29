import db from "../db";
import { Request, Response } from "express";
import * as profileService from "../services/profileService"; // profileService
import { v2 as cloudinary } from "cloudinary";

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;
    const { body } = req;

    console.log("body", body);

    if (!req.files) {
      await profileService.updateProfile(userId, body);
      return res.json({
        status: true,
        message: "success",
      });
    }

    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    if (files.cover && files.cover.length > 0) {
      const cover = files.cover[0].filename;
      const cloudinaryRes = await cloudinary.uploader.upload(
        "./src/uploads" + cover
      );
      body.cover = cloudinaryRes.secure_url;
    }

    if (files.avatar && files.avatar.length > 0) {
      const avatar = files.avatar[0].filename;
      const cloudinaryRes = await cloudinary.uploader.upload(
        "./src/uploads" + avatar
      );
      body.avatar = cloudinaryRes.secure_url;
    }

    await profileService.updateProfile(userId, body);

    res.json({
      status: true,
      message: "success",
    });

    // const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    // const cover = files.cover[0].filename;
    // const avatar = files.avatar[0].filename;

    // if (cover) {
    //   body.cover = cover;
    // }

    // if (avatar) {
    //   body.avatar = avatar;
    // }
  } catch (error) {
    const err = error as unknown as Error;
    console.log(err);
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user;

    const profile = await profileService.getProfile(userId);

    res.json({
      status: true,
      message: "success",
      data: profile,
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

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const profile = await profileService.getProfileById(+id);

    res.json({
      status: true,
      message: "success",
      data: profile,
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
