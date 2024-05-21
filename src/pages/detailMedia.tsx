import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import avatarr from "../assets/image/avatar2.jpg";
import { TbMessage, TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import APIConfig from "../libs/api";
import { getReplies, getThreadById } from "../libs/call/thread";
import { IThread } from "../types/app";
// import RepliesPost from "../components/RepliesPost";
import RepliesDetail from "../components/RepliesDetail";
import ThreadCard from "../features/ThreadCard";
import RepliesPost from "../components/RepliesPost";
import FormPost from "../components/FormPost";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { getRepliesAsync } from "../store/async/thread";
import LikeButton from "../components/ButtonLike";

const DetailThreadMedia = (): React.JSX.Element => {
  const { threadId } = useParams();
  const _host_url = "http://localhost:5123/uploads/";
  const [detailThread, setDetailThread] = useState<IThread>({
    userId: 0,
    content: "",
    image: [],
    id: 0,
  });
  // const { thread } = useAppSelector((state) => state);
  // const dispatch = useAppDispatch();

  const [replies, setReplies] = useState<IThread[]>([]);

  const fetchThreadDetail = async () => {
    try {
      const res = await getThreadById(Number(threadId));
      const resReplies = await getReplies(Number(threadId));

      setDetailThread(res.data.data);
      setReplies(resReplies.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // const [isLike, setIsLike] = React.useState<boolean>(false);
  // const handleLike = () => {
  //   setIsLike(!isLike);
  // };

  useEffect(() => {
    fetchThreadDetail();
    // dispatch(getRepliesAsync(Number(threadId)));
    // getDataById();
    // handleLike;
  }, [threadId]);

  return (
    <>
      <Box bg="#1D1D1D" py="30">
        <Text
          display="flex"
          alignItems="center"
          fontSize="4xl"
          as="b"
          color="white"
          px="10"
          gap="5"
        >
          <Link to="/">
            <FaArrowLeftLong />
          </Link>
          Status
        </Text>
        <ThreadCard thread={detailThread} />
        {/* <RepliesPost /> */}
        <Box>
          <FormPost callback={fetchThreadDetail} threadId={Number(threadId)} />
        </Box>
        {/* <FormPost threadId={threadId} callback={} />
        {/* <RepliesPost /> */}
        <Box>
          {replies.map((reply) => (
            <ThreadCard thread={reply} key={reply.id} />
          ))}
        </Box>
        {/* <RepliesDetail /> */}
      </Box>
    </>
  );
};

export default DetailThreadMedia;
