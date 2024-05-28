import { createSlice } from "@reduxjs/toolkit";
import { IFollow } from "../../types/app";
import { getFollowerAsync, getFollowingAsync } from "../async/follow";

interface IInitialState {
  followers: IFollow[];
  followings: IFollow[];
}

const initialState: IInitialState = {
  followers: [],
  followings: [],
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFollowerAsync.fulfilled, (state, action) => {
      state.followers = action.payload;
    });
    builder.addCase(getFollowingAsync.fulfilled, (state, action) => {
      state.followings = action.payload;
    });
  },
});

export default followSlice.reducer;
