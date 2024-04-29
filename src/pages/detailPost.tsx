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

const DetailThread = (): React.JSX.Element => {
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
        {/* <Box
          width="100%"
          bg="#1D1D1D"
          borderBottom="1px"
          borderColor="gray"
          px="10"
          py="8"
        >
          <HStack
            marginBottom="3"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap="5"
          >
            <HStack gap="5">
              <Wrap paddingTop="">
                <WrapItem>
                  <Avatar
                    name={detailThread.author?.fullname}
                    src={_host_url + detailThread.author?.profile?.avatar}
                  />
                </WrapItem>
              </Wrap>
              <Box display="flex" flexDir="column">
                <Heading size="md" color="white">
                  {detailThread.author?.fullname}
                </Heading>
                <Text fontSize="sm" color="gray">
                  {detailThread.author?.email}
                </Text>
              </Box>
            </HStack>

            <Box marginBottom="">
              <Text color="gray">posted_at</Text>
            </Box>
          </HStack>

          <VStack marginTop="">
            <Box flex="1" display="flex" flexDir="column" gap="5">
              <Box display="flex" textAlign="start">
                <Text color="white" textAlign="start">
                  {detailThread.content}
                </Text>
              </Box> */}

        {/* <Box width="100%" height="100%">
                <Image
                  src={}
                  alt="Dan Abramov"
                  width="100%"
                  objectFit="cover"
                />
              </Box> */}
        {/* <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
                {detailThread.image &&
                  detailThread.image.map((image) => (
                    <Box bg="tomato">
                      <Image
                        src={_host_url + image.image}
                        alt="Dan Abramov"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  ))}
              </SimpleGrid>

              <HStack>
                <Text color="gray">01.00 AM </Text>
                <Text color="gray">
                  <TbPointFilled />
                </Text>
                <Text color="gray">Jul 26 2020</Text>
              </HStack>
              <HStack direction="row" spacing="5">
                <Box display="flex" gap="2"> */}
        {/* <LikeButton threadId={thread.id as number} />
                  <Text color="gray" marginTop="2">
                    {thread._count?.like}
                  </Text> */}
        {/* </Box>
                <Box display="flex" gap="2">
                  <Button colorScheme="gray" variant="link" size="0">
                    <Text fontSize="2xl">
                      <TbMessage />
                    </Text>
                  </Button>
                  <Text color="gray">3000</Text>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box> */}
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
