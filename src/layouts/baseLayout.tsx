import React, { useEffect } from "react";
import Home from "../pages/home";
import Navbar from "../components/Navbar";
import RightSideBar from "../pages/rightSideBar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { getProfile } from "../libs/call/profile";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { SET_LOGIN } from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";

const BaseLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);
  const checkToken = async () => {
    try {
      const token = await localStorage.getItem("token");
      if (!token) {
        return navigate("/login");
      }
      const res = await getProfile(token);
      dispatch(SET_LOGIN({ user: res.data.data, token }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  console.log("ini doc", document);

  return (
    <>
      <Flex color="white" height="100vh" backgroundColor={"#1D1D1D"}>
        <Box flex={1}>
          <Navbar />
        </Box>
        <Box flex={2.5}>
          <Outlet />
        </Box>
        <Box flex={1.5}>{auth.token && <RightSideBar />}</Box>
      </Flex>
    </>
  );
};

export default BaseLayout;
