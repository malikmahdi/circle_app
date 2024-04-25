import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessage, TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import avatarr from "../assets/image/avatar2.jpg";

const dataReplies = [
  {
    name: "Udin",
    email: "udin@gmail.com",
    content: "akoakfoakfoakfoaaosjfoas",
  },
  {
    name: "Soni",
    email: "soni@gmail.com",
    content: "akoakfoakfoakfoaaosjfoasa adasa da as",
  },
  {
    name: "Ujang",
    email: "ujang@gmail.com",
    content: "akoakfoakfoakfoaaosj as afoas",
  },
  {
    name: "Bambang",
    email: "bamnbag@gmail.com",
    content: "akoakfoak ada asdsa dasdadasd asd as afoakfoaaosjfoas",
  },
];

const RepliesDetail = () => {
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };

  useEffect(() => {
    handleLike;
  }, []);

  return (
    <>
      {dataReplies.map((data) => (
        <Flex
          width="100%"
          bg="#1D1D1D"
          borderBottom="1px"
          borderColor="gray"
          px="5"
          py="5"
        >
          <Avatar src={avatarr} />
          <Box ml="3" display="flex" flexDirection="column" gap="2">
            <Box display="flex" gap="3">
              <Heading size="md" color="white">
                {data.name}
              </Heading>
              <HStack gap="1">
                <Text fontSize="sm" color="gray">
                  {data.email}
                </Text>
                <Text color="gray">
                  <TbPointFilled />
                </Text>
                <Text fontSize="sm" color="gray">
                  4hr
                </Text>
              </HStack>
            </Box>
            <Text color="white" textAlign="start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              odio natus totam excepturi pariatur! Rem quidem itaque voluptatem
              velit. Sunt tempore tempora accusamus, inventore fugiat in
              molestiae similique ea nisi.
            </Text>

            <HStack direction="row" spacing="5">
              <Box display="flex" gap="2">
                <Text fontSize="2xl" marginTop="1">
                  <Button
                    type="button"
                    onClick={handleLike}
                    colorScheme="gray"
                    variant="link"
                    size="0"
                  >
                    {isLike ? <FaHeart color="red" /> : <AiOutlineHeart />}
                  </Button>
                </Text>
                <Text color="gray" marginTop="2">
                  300
                </Text>
              </Box>
              <Box display="flex" gap="2">
                <Button colorScheme="gray" variant="link" size="0">
                  <Text fontSize="2xl">
                    <TbMessage />
                  </Text>
                </Button>
                <Text color="gray">300</Text>
              </Box>
            </HStack>
          </Box>
        </Flex>
      ))}
    </>
  );
};

export default RepliesDetail;
