import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { getReplies, getThreadById } from "../libs/call/thread";
import { IThread } from "../types/app";
import ThreadCard from "../features/ThreadCard";
import FormPost from "../components/FormPost";

const DetailThread = (): React.JSX.Element => {
  const { threadId } = useParams();
  const [detailThread, setDetailThread] = useState<IThread>({
    userId: 0,
    content: "",
    image: [],
    id: 0,
  });

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
          px="7"
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

export default DetailThread;
