import db from "../db";

export const getFollow = async () => {
  return await db.follow.findMany({
    include: {
      follower: {
        select: {
          id: true,
          username: true,
          fullname: true,
          _count: true,
        },
      },
      following: {
        select: {
          id: true,
          username: true,
          fullname: true,
          _count: true,
        },
      },
    },
  });
};

export const follow = async (followerId: number, followingId: number) => {
  const existingFollow = await db.follow.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  if (existingFollow) {
    await db.follow.deleteMany({
      where: {
        followerId,
        followingId,
      },
    });
    return "Unfollowing successful";
  }

  const follow = await db.follow.create({
    data: {
      followerId,
      followingId,
    },
  });

  return "Following successful";
};
