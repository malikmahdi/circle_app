import db from "../db";
import { IThread } from "../type/app";

export const getThreads = async () => {
  return await db.thread.findMany({
    where: {
      threadId: null,
    },
    include: {
      image: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          replies: true,
          like: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};

export const getThread = async (id: number) => {
  return await db.thread.findFirst({
    where: {
      id,
      threadId: null,
    },
    include: {
      image: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          password: false,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
    },
  });
};

export const getThreadProfile = async (userId: number) => {
  return await db.thread.findMany({
    where: {
      userId: userId,
      threadId: null,
    },

    include: {
      image: {
        select: {
          image: true,
        },
      },
      author: {
        select: {
          id: true,
          username: true,
          fullname: true,
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};
export const createThread = async (
  payload: IThread,
  files: { [fieldName: string]: Express.Multer.File[] }
) => {
  const thread = await db.thread.create({
    data: {
      ...payload,
      threadId: payload.threadId ? +payload.threadId : null,
    },
  });

  if (files.image) {
    await db.threadImage.createMany({
      data: files.image.map((image) => ({
        image: image.filename,
        threadId: thread.id,
      })),
    });
  }

  return thread;
};

export const updateThread = async (id: number, payload: IThread) => {};

export const deleteThread = async (threadId: number, userId: number) => {
  const existedThread = await db.thread.findFirst({
    where: {
      id: threadId,
    },
  });

  if (!existedThread) {
    throw new Error("Thread not found");
  }

  if (existedThread.userId !== userId) {
    throw new Error("You don't have permission to delete this thread");
  }

  await db.thread.delete({
    where: {
      id: threadId,
    },
  });

  await db.threadImage.deleteMany({
    where: {
      threadId,
    },
  });

  return true;
};

export const getReplies = async (threadId: number) => {
  return await db.thread.findMany({
    where: {
      threadId,
    },
    include: {
      image: {
        select: {
          image: true,
        },
      },
      author: {
        include: {
          profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          replies: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });
};
