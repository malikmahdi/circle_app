import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessage, TbPointFilled } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
// import IThread from "../interface/Thread";
import { FaHeart } from "react-icons/fa";
import { IThread } from "../types/app";
import LikeButton from "../components/ButtonLike";
import { useAppSelector } from "../store/rootReducer";

interface IThreadProps {
  thread: IThread;
  // callback: () => Promise<void>;
}

const ThreadCard: React.FC<IThreadProps> = ({ thread }) => {
  const _host_url = "http://localhost:5123/uploads/";
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Box
        width={"100%"}
        bg="#1D1D1D"
        borderBottom="1px solid gray"
        px="7"
        py="5"

        // key={thread.id}
      >
        <HStack
          marginBottom="3"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="5"
        >
          <HStack>
            <Wrap paddingTop="">
              <WrapItem>
                <Avatar
                  name={thread.author?.fullname}
                  src={_host_url + thread.author?.profile?.avatar}
                />
              </WrapItem>
            </Wrap>
            <Box display="flex" alignItems="center" gap="2">
              <Heading size="md" color="white">
                {user?.id === thread.userId ? (
                  <Link to={`/profile`}>{thread.author?.fullname}</Link>
                ) : (
                  <Link to={`/profile/${thread.userId}`}>
                    {thread.author?.fullname}
                  </Link>
                )}
              </Heading>
              <HStack gap="1">
                <Text fontSize="sm" color="gray">
                  {thread.author?.username}
                </Text>
                <Text color="gray">
                  <TbPointFilled />
                </Text>
                <Text fontSize="sm" color="gray">
                  4 hr
                </Text>
              </HStack>
            </Box>
          </HStack>

          <Box marginBottom="">
            <Text color="gray">01 januari 2024</Text>
          </Box>
        </HStack>

        <Box
          flex="1"
          display="flex"
          flexDir="column"
          gap="5"
          onClick={() => {
            navigate(`/thread/${thread.id}`);
          }}
          _hover={{ cursor: "pointer" }}
        >
          <Box display="flex" mt={"10px"} textAlign="start">
            <Text color="white" textAlign="start">
              {thread.content}
            </Text>
          </Box>

          {/* <Box display={"flex"} flexWrap={"wrap"} gap="1"> */}
          <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
            {thread.image &&
              thread.image.map((item, index) => (
                <Box bg="tomato" key={index}>
                  <Image
                    src={_host_url + item.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
          </SimpleGrid>
          {/* </Box> */}
        </Box>

        <HStack direction="row" spacing="5">
          <Box display="flex" gap="">
            <LikeButton threadId={thread.id as number} />
            <Text color="gray" marginTop="2">
              {thread._count?.like}
            </Text>
          </Box>
          <Box display="flex" gap="2">
            <Link to={`/thread/${thread.id}`}>
              <Button colorScheme="gray" variant="link" size="0">
                <Text fontSize="2xl">
                  <TbMessage />
                </Text>
              </Button>
            </Link>
            <Text color="gray">{thread._count?.replies}</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default ThreadCard;
