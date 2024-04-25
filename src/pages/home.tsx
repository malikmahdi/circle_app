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

{
  /* {!isLoading ? (
  getThreads?.map((item: any) => (
    <ThreadCard
      key={item.id}
      // id={item.id}
      author_picture={item.author_picture}
      author_fullname={item.author_fullname}
      author_username={item.author_username}
      time_post={item.time_post}
      content={item.content}
      image={item.image}
      likes_count={item.likes_count}
      replies_count={item.replies_count}
      posted_at={item.posted_at}
      isLike={item.isLike}
    />
  ))
) : (
  <Box>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="gray.500"
      size="xl"
    />
  </Box>
)}

{isError && (
  <Alert
    status="error"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    bg="#1D1D1D"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Error while getting threads
    </AlertTitle>
  </Alert>
)} */
}
