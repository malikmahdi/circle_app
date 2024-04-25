export interface IThread {
  id?: number;
  content?: string;
  image?: ThreadImage[];
  userId?: number;
  threadId?: number;
  author?: IUser;
}

interface ThreadImage {
  image?: string;
}

export interface IUser {
  id?: number;
  fullname: string;
  username: string;
  email: string;
  profile?: IProfile;
}

export interface IProfile {
  id?: number;
  bio?: string;
  avatar?: string;
  cover?: string;
  user: IUser;
}
