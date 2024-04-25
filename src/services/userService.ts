import db from "../db";
import { registerValidation } from "../libs/validation/register";
import { IRegister } from "../type/app";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { STATUS_CODE } from "../utills/constant";

export const getUsers = async () => {
  return await db.user.findMany({
    include: {
      profile: {
        select: {
          avatar: true,
        },
      },
    },
  });
};

export const getUser = async (id: number) => {
  return await db.user.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      fullname: true,
      email: true,
      profile: {
        select: {
          avatar: true,
        },
      },
    },
  });
};

export const register = async (payload: IRegister) => {
  const { error, value } = registerValidation.validate(payload);

  if (error) {
    throw new Error(error.details[0].message);
  }

  const isExist = await db.user.findFirst({
    where: {
      OR: [
        {
          username: value.username,
        },
        {
          email: value.email,
        },
      ],
    },
  });

  if (isExist) {
    throw new Error("Username or Email already exist!");
  }

  const hashPassword = await bcrypt.hash(value.password, 10);
  value.password = hashPassword;

  const user = await db.user.create({
    data: {
      ...value,
    },
  });

  const profile = await db.profile.create({
    data: {
      userId: user.id,
    },
  });

  return { user, profile };
};

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const user = await db.user.findFirst({
    where: {
      OR: [{ username: username }, { email: username }],
    },
  });

  if (!user) {
    throw new Error("User or Password is not valid!");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("User or Password is not valid!");
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
    expiresIn: "1d",
  });

  return token;
};
