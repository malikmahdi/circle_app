import React from "react";
import BaseLayout from "./layouts/baseLayout";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import ProfilePage from "./pages/profile";
import LoginLayout from "./layouts/loginLayout";
import DetailPost from "./pages/detailPost";
import RegisterLayout from "./layouts/registerLayout";
import ProfilePageById from "./pages/profileById";
import FollowPage from "./pages/follow";
// import ErrorPage from "./pages/errorPage";
// import DetailLayout from "./layouts/detailLayout";
// import RegisterLayout from "./layouts/registerLayout";
// import LoginLayout from "./layouts/loginLayout";
// import ForgotPasswordLayout from "./layouts/forgotLayout";
// import ResetPasswordLayout from "./layouts/resetLayout";
// // import { ApiConfig, setAuthToken } from "./src/libs/api";
// // import { AUTH_CHECK, AUTH_ERROR } from "./store/rootReducer";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import MyProfileLayout from "./layouts/myProfileLayout";

const App: React.FC = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const authCheck = async () => {
  //   try {
  //     setAuthToken(localStorage.token);

  //     const response = await ApiConfig.get("/auth/check");

  //     dispatch(AUTH_CHECK(response.data));
  //   } catch (error) {
  //     dispatch(AUTH_ERROR());
  //     navigate("/auth/login");
  //   }
  // };

  // React.useEffect(() => {
  //   authCheck();
  // }, []);

  // const IsLogin = () => {
  //   if (!localStorage.token) {
  //     return <Navigate to={"/auth/login"}></Navigate>;
  //   } else {
  //     return <Outlet></Outlet>;
  //   }
  // };

  // const IsNotLogin = () => {
  //   if (localStorage.token) {
  //     return <Navigate to={"/"}></Navigate>;
  //   } else {
  //     return <Outlet></Outlet>;
  //   }
  // };

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="follow" element={<FollowPage />} />
        <Route path="profile/:id" element={<ProfilePageById />} />
        <Route path="thread/:threadId" element={<DetailPost />} />
        {/* <Route path="search" element={<Home />} />
        <Route path="profile" element={<Home />} />
        <Route path="login" element={<LoginPage />} /> */}
      </Route>
      <Route path="login" element={<LoginLayout />} />
      <Route path="register" element={<RegisterLayout />} />
      {/* <Route path="/" element={<BaseLayout />} />
      <Route path="/" element={<IsLogin />}>
        <Route path="/my-profile" element={<MyProfileLayout />} />
      </Route>

      <Route path="/" element={<IsNotLogin />}>
        <Route path="/auth/login" element={<LoginLayout />} />
        <Route path="/forgot-password" element={<ForgotPasswordLayout />} />
        <Route path="/reset-password" element={<ResetPasswordLayout />} />
      </Route> */}

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default App;
