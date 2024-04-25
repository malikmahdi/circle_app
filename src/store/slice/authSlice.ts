import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { IProfile, IUser } from "../../types/app";
import { LoginAsync, getProfileAsync } from "../async/auth";

interface IAuthState {
  user: IProfile | null | undefined;
  token: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: IAuthState = {
  token: "",
  user: undefined,
  loading: false,
  errorMessage: "",
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN: (
      state,
      action: PayloadAction<{ user: IProfile; token: string }>
    ) => {
      (state.user = action.payload.user), (state.token = action.payload.token);
    },
    SET_LOGOUT: (state) => {
      localStorage.removeItem("token");
      state.user = undefined;
      state.token = "";
    },
  },

  extraReducers(builder) {
    // login process
    builder.addCase(LoginAsync.pending, (state) => {
      state.token = "";
      state.loading = true;
    });

    builder.addCase(LoginAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.token = action.payload;
    });

    builder.addCase(LoginAsync.rejected, (state, action) => {
      state.loading = false;
      state.token = "";
      state.errorMessage = action.payload as string;
    });

    // get profile process
    builder.addCase(getProfileAsync.pending, (state) => {
      state.user = undefined;
      state.loading = true;
    });

    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(getProfileAsync.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.token = "";
      state.errorMessage = action.payload as string;
    });
  },
});

export const { SET_LOGIN, SET_LOGOUT } = counterSlice.actions;
export default counterSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { IAuth } from "../../types/Auth";
// import { jwtDecode } from "jwt-decode";
// import { setAuthToken } from "../../libs/api";

// const initialAuthState: IAuth = {
//   id: 0,
//   name: "",
//   username: "",
//   email: "",
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     AUTH_LOGIN: (_, action) => {
//       const { data, token } = action.payload;
//       localStorage.setItem("token", token);
//       setAuthToken(token);

//       const user = {
//         id: data.id,
//         name: data.name,
//         username: data.username,
//         email: data.email,
//       };

//       return user;
//     },
//     AUTH_CHECK: (_, action) => {
//       const { id, name, username, email } = action.payload;
//       const user = {
//         id: id,
//         name: name,
//         username: username,
//         email: email,
//       };

//       return user;
//     },
//     LOGOUT: () => {
//       localStorage.removeItem("token");
//     },
//     AUTH_ERROR: () => {
//       localStorage.removeItem("token");
//     },
//   },
// });

// // import { createSlice } from "@reduxjs/toolkit";
// // import type { PayloadAction } from "@reduxjs/toolkit";
// // import { IProfile, IUser } from "../../types/app";

// // interface IAuthState {
// //   user: IProfile | null | undefined;
// //   token: string;
// // }

// // const initialState: IAuthState = {
// //   token: "",
// //   user: undefined,
// // };

// // export const counterSlice = createSlice({
// //   name: "counter",
// //   // `createSlice` will infer the state type from the `initialState` argument
// //   initialState,
// //   reducers: {
// //     SET_LOGIN: (
// //       state,
// //       action: PayloadAction<{ user: IProfile; token: string }>
// //     ) => {
// //       state.user = action.payload.user;
// //       state.token = action.payload.token;
// //     },

// //     SET_LOGOUT: (state) => {
// //       localStorage.removeItem("token");
// //       state.user = undefined;
// //       state.token = "";
// //     },
// //   },
// // });

// // export const { SET_LOGIN, SET_LOGOUT } = counterSlice.actions;
// // export default counterSlice.reducer;
