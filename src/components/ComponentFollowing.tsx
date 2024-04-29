import {
  Text,
  Button,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import ISuggested from "../interface/Suggested";
import { IProfile, IUser } from "../types/app";
import FollowButton from "./ButtonFollow";

interface ISuggested {
  data: IUser;
}

const ComponentFollowing: React.FC<ISuggested> = ({ data }) => {
  const _host_url = "http://localhost:5123/uploads/";

  useEffect(() => {}, []);

  return (
    <>
      <Box key={data.id}>
        <Box display="flex" marginTop="5" justifyContent="space-between">
          <Box display="flex" alignItems={"center"} gap="5">
            <Wrap paddingTop="">
              <WrapItem>
                <Avatar
                  name={data.following.fullname}
                  src={_host_url + data.following?.profile?.avatar}
                />
              </WrapItem>
            </Wrap>

            <Flex gap={"2"}>
              <Text fontSize="md" color="white">
                {data.following.fullname}
              </Text>{" "}
              <Text color="gray">@{data.following.username}</Text>
            </Flex>
          </Box>

          <FollowButton followingId={data.following.id} />

          {/* {isFollow ? (
            <Button
              onClick={handleFollow}
              colorScheme="gray"
              color="white"
              variant="outline"
              borderRadius="3xl"
              _hover={{ bg: "white", color: "black" }}
            >
              Following
            </Button>
          ) : (
            <Button
              onClick={handleFollow}
              colorScheme="gray"
              color="white"
              variant="outline"
              borderRadius="3xl"
              _hover={{ bg: "white", color: "black" }}
            >
              Follow
            </Button>
          )} */}
        </Box>
      </Box>
    </>
  );
};

export default ComponentFollowing;
