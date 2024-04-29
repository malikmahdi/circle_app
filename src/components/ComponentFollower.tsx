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

const ComponentFollower: React.FC<ISuggested> = ({ data }) => {
  const [isFollow, setIsFollow] = useState<boolean>(false);
  const _host_url = "http://localhost:5123/uploads/";

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    handleFollow;
  }, []);

  return (
    <>
      <Box key={data.id}>
        <Box display="flex" marginTop="5" justifyContent="space-between">
          <Box display="flex" alignItems={"center"} gap="5">
            <Wrap paddingTop="">
              <WrapItem>
                <Avatar
                  name={data.follower.fullname}
                  src={_host_url + data.follower?.profile?.avatar}
                />
              </WrapItem>
            </Wrap>

            <Flex gap={"2"}>
              <Text fontSize="md" color="white">
                {data.follower.fullname}
              </Text>{" "}
              <Text color="gray">@{data.follower.username}</Text>
            </Flex>
          </Box>

          <FollowButton followingId={data.follower.id} />
        </Box>
      </Box>
    </>
  );
};

export default ComponentFollower;
