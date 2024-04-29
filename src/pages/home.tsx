import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ThreadCard from "../features/ThreadCard";
import FormPost from "../components/FormPost";
// import UseThread from "../hooks/useThread";
import { UseSelector, useSelector } from "react-redux";
// import { RootState } from "../store/types/rootState";
import { IThread } from "../types/app";
import { getThreads } from "../libs/call/thread";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { getThreadAsync } from "../store/async/thread";
import { getFollower } from "../libs/call/follow";

// const callback = () => {};

const Home = () => {
  const { thread } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getThreadAsync());
  }, []);

  return (
    <>
      <Box py="30">
        <Text fontSize="4xl" as="b" color="white" px="10">
          Home
        </Text>
        <FormPost />
        <Box display="flex" flexDir="column" alignItems="center">
          {thread.threads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Home;
