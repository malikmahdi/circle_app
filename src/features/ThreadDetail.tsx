import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessage, TbPointFilled } from "react-icons/tb";

import React, { useEffect, useState } from "react";
// import IThread from "../interface/Thread";
import { FaHeart } from "react-icons/fa";
// import { IThreadCard } from "../types/Thread";

import avatarr from "../assets/image/avatar2.jpg";

const ThreadDetail = (props: any) => {
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const handleLike = () => {
    setIsLike(!isLike);
  };

  useEffect(() => {
    handleLike;
  }, []);

  return (
    <>
      <Box
        width="100%"
        bg="#1D1D1D"
        borderBottom="1px"
        borderColor="gray"
        px="10"
        py="8"
        // key={props.id}
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
                <Avatar name="Malik.jpg" src={avatarr} />
              </WrapItem>
            </Wrap>
            <VStack display="flex" alignItems="center">
              <Heading size="md" color="white">
                Malik Mahdi
              </Heading>
              <Text fontSize="sm" color="gray">
                @malikmahdi123
              </Text>
            </VStack>
          </HStack>

          <Box marginBottom="">
            <Text color="gray">{props.posted_at}</Text>
          </Box>
        </HStack>

        <VStack marginTop="">
          <Box flex="1" display="flex" flexDir="column" gap="5">
            <Box display="flex" textAlign="start">
              <Text color="white" textAlign="start">
                {props.content}
              </Text>
            </Box>

            <Box width="100%" height="100%">
              <Image
                src={props.image}
                alt="Dan Abramov"
                width="100%"
                objectFit="cover"
              />
            </Box>

            <HStack>
              <Text color="gray">01.00 AM </Text>
              <Text color="gray">
                <TbPointFilled />
              </Text>
              <Text color="gray">Jul 26 2020</Text>
            </HStack>
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
                <Text color="gray">3000</Text>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default ThreadDetail;
