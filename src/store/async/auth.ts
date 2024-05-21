import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginApi } from "../../libs/call/user";
import { getProfile } from "../../libs/call/profile";

export const LoginAsync = createAsyncThunk(
  "auth/login",
  async (body: { username: string; password: string }, thunkApi) => {
    try {
      const res = await LoginApi(body);

      const token = res.data.data;
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      const err = error as unknown as Error;
      console.log(err);

      thunkApi.rejectWithValue(err.message);
    }
  }
);

export const getProfileAsync = createAsyncThunk(
  "auth/getProfile",
  async (token: string) => {
    try {
      const { data } = await getProfile(token);

      return data.data;
    } catch (error) {
      const err = error as unknown as Error;
      console.log(err);
    }
  }
);
