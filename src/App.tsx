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
import ErrorPage from "./pages/errorPage";
import DetailMedia from "./pages/detailMedia";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="follow" element={<FollowPage />} />
        <Route path="profile/:id" element={<ProfilePageById />} />
        <Route path="thread/:threadId" element={<DetailPost />} />
      </Route>
      <Route path="media/:threadId" element={<DetailMedia />} />
      <Route path="login" element={<LoginLayout />} />
      <Route path="register" element={<RegisterLayout />} />
      {/* <Route path="/" element={<BaseLayout />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
