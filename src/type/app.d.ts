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
}

export interface IThread {
  id?: number;
  content?: string;
  userId: number;
  threadId: number;
}
