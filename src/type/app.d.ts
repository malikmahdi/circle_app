export interface IRegister {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export type AuthMiddlewareData = {
  id: string;
};

export enum EStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface IProfile {
  bio?: string;
  avatar?: string;
  cover?: string;
  userId?: number;
  // fullname?: string;
  // username?: string;
}

export interface IThread {
  id?: number;
  content?: string;
  userId: number;
  threadId: number;
}

export interface IEditProfile {
  bio?: string;
  avatar?: string;
  cover?: string;
  fullname?: string;
  username?: string;
}
