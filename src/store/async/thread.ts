import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getReplies,
  getThreadProfile,
  getThreads,
} from "../../libs/call/thread";

export const getThreadAsync = createAsyncThunk("thread/getThread", async () => {
  try {
    const threadRes = await getThreads();

    return threadRes.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const getThreadProfileAsync = createAsyncThunk(
  "thread/getThreadProfile",
  async () => {
    try {
      const thread = await getThreadProfile();
      return thread.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRepliesAsync = createAsyncThunk(
  "thread/getReplies",
  async (threadId: number) => {
    try {
      const repliesRes = await getReplies(threadId);
      return repliesRes.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
