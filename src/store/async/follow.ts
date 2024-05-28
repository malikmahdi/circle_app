import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFollower, getFollowing } from "../../libs/call/follow";

export const getFollowerAsync = createAsyncThunk(
  "follow/getFollower",
  async () => {
    try {
      const followerRes = await getFollower();

      return followerRes.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFollowingAsync = createAsyncThunk(
  "follow/getFollowing",
  async () => {
    try {
      const followingRes = await getFollowing();

      return followingRes.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
