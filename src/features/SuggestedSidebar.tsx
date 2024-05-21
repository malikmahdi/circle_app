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
import { getUsers } from "../libs/call/user";
import FollowButton from "../components/ButtonFollow";

interface ISuggested {
  data: IUser;
}

const SuggestedSidebar: React.FC<ISuggested> = ({ data }) => {
  const _host_url = "http://localhost:5123/uploads/";

  return (
    <>
      <Box px="5" key={data.id}>
        <Box
          display="flex"
          alignItems={"center"}
          marginTop="5"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems={"center"} gap="5">
            <Wrap paddingTop="">
              <WrapItem>
                <Avatar
                  name={data.fullname}
                  src={_host_url + data.profile?.avatar}
                />
              </WrapItem>
            </Wrap>

            <Box display="flex" flexDir="column">
              <Box gap={"2"}>
                <Text fontSize="md" color="white">
                  {data.fullname}
                </Text>{" "}
                <Text color="gray">@{data.username}</Text>
              </Box>
            </Box>
          </Box>

          <FollowButton followingId={data.id as number} />
        </Box>
      </Box>
    </>
  );
};

export default SuggestedSidebar;
