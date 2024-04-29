import db from "../db";
import { IEditProfile } from "../type/app";

export const updateProfile = async (userId: number, payload: IEditProfile) => {
  const dataToUpdate: Partial<IEditProfile> = {};

  if (payload.bio !== undefined && payload.bio !== null) {
    dataToUpdate.bio = payload.bio;
  }

  if (payload.avatar !== undefined && payload.avatar !== null) {
    dataToUpdate.avatar = payload.avatar;
  }
  if (payload.cover !== undefined && payload.cover !== null) {
    dataToUpdate.cover = payload.cover;
  }

  if (payload.fullname !== undefined && payload.fullname !== null) {
    await db.user.update({
      where: { id: userId },
      data: { fullname: payload.fullname },
    });
  }

  // if (payload.username !== undefined && payload.username !== null) {
  //   await db.user.update({
  //     where: { id: userId },
  //     data: { username: payload.username },
  //   });
  // }

  return await db.profile.update({
    where: {
      userId,
    },
    data: dataToUpdate,
  });
  // return await db.profile.update({
  //   where: {
  //     userId,
  //   },
  //   data: {
  //     ...payload,
  //   },
  // });
};

export const getProfile = async (userId: number) => {
  return await db.profile.findFirst({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          _count: {
            select: {
              following: true,
              follower: true,
            },
          },
        },
      },
    },
  });
};

export const getProfileById = async (userId: number) => {
  return await db.profile.findFirst({
    where: {
      userId,
      // threadId: null,
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
        },
      },
    },
  });
};
