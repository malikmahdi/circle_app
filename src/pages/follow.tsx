import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Wrap,
  WrapItem,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { getFollower, getFollowing } from "../libs/call/follow";
import { useEffect, useState } from "react";
import { IUser } from "../types/app";
import SuggestedSidebar from "../features/SuggestedSidebar";
import ComponentFollower from "../components/ComponentFollower";
import ComponentFollowing from "../components/ComponentFollowing";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { getFollowerAsync, getFollowingAsync } from "../store/async/follow";
import FollowButton from "../components/ButtonFollow";

const FollowPage = () => {
  // const [follower, setFollower] = useState<IUser[]>([]);
  // const [following, setFollowing] = useState<IUser[]>([]);

  // const handleGetFollower = async () => {
  //   const { data } = await getFollower();
  //   setFollower(data.data);
  // };

  // const handleGetFollowing = async () => {
  //   const { data } = await getFollowing();
  //   setFollowing(data.data);
  // };
  const _host_url = "http://localhost:5123/uploads/";

  const dispatch = useAppDispatch();
  const { followers, followings } = useAppSelector((state) => state.follow);

  useEffect(() => {
    dispatch(getFollowerAsync());
    dispatch(getFollowingAsync());
  }, []);

  return (
    <>
      <Box>
        <Tabs>
          <TabList width={"100%"}>
            <Tab
              py={"15px"}
              width={"50%"}
              cursor={"pointer"}
              color={"white"}
              _focus={{ color: "green.500" }}
            >
              <Text as="b">Follower</Text>
            </Tab>
            <Tab
              py={"15px"}
              width={"50%"}
              color={"white"}
              cursor={"pointer"}
              _focus={{ color: "green.500" }}
            >
              <Text as="b">Following</Text>
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="green.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              {followers.map((follow) => (
                // <Box>
                //   <ComponentFollower data={follow} />
                // </Box>
                <Box key={follow.follower?.id}>
                  <Box
                    display="flex"
                    marginTop="5"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems={"center"} gap="5">
                      <Wrap paddingTop="">
                        <WrapItem>
                          <Avatar
                            name={follow.follower?.fullname}
                            src={_host_url + follow.follower?.profile?.avatar}
                          />
                        </WrapItem>
                      </Wrap>

                      <Flex gap={"2"}>
                        <Text fontSize="md" color="white">
                          {follow.follower?.fullname}
                        </Text>{" "}
                        <Text color="gray">@{follow.follower?.username}</Text>
                      </Flex>
                    </Box>

                    {/* <FollowButton followingId={follow.follower?.id} /> */}
                  </Box>
                </Box>
              ))}
            </TabPanel>
            <TabPanel>
              {followings.map((following) => (
                <Box key={following.following?.id}>
                  <Box
                    display="flex"
                    marginTop="5"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems={"center"} gap="5">
                      <Wrap paddingTop="">
                        <WrapItem>
                          <Avatar
                            name={following.following?.fullname}
                            src={
                              _host_url + following.following?.profile?.avatar
                            }
                          />
                        </WrapItem>
                      </Wrap>

                      <Flex gap={"2"}>
                        <Text fontSize="md" color="white">
                          {following.following?.fullname}
                        </Text>{" "}
                        <Text color="gray">
                          @{following.following?.username}
                        </Text>
                      </Flex>
                    </Box>

                    {/* <FollowButton followingId={data.following.id} /> */}

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
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default FollowPage;
