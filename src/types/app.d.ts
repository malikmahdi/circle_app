export interface IThread {
  id?: number;
  content?: string;
  image?: ThreadImage[];
  userId?: number;
  threadId?: number;
  author?: IUser;
  _count?: ICount;
  map?: any;
}

interface ICount {
  replies?: string;
  like?: string;
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
  _count: ICount;
  follower?: any;
  following?: any;
}

export interface IProfile {
  id?: number;
  bio?: string;
  avatar?: string;
  cover?: string;
  user: IUser;
}

interface ICount {
  follower?: string;
  following?: string;
}
