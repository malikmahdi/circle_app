import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { getFollower, getFollowing } from "../libs/call/follow";
import { useEffect, useState } from "react";
import { IUser } from "../types/app";
import SuggestedSidebar from "../features/SuggestedSidebar";
import ComponentFollower from "../components/ComponentFollower";
import ComponentFollowing from "../components/ComponentFollowing";

const FollowPage = () => {
  const [follower, setFollower] = useState<IUser[]>([]);
  const [following, setFollowing] = useState<IUser[]>([]);

  const handleGetFollower = async () => {
    const { data } = await getFollower();
    setFollower(data.data);
  };

  const handleGetFollowing = async () => {
    const { data } = await getFollowing();
    setFollowing(data.data);
  };

  useEffect(() => {
    handleGetFollower();
    handleGetFollowing();
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
              {follower.map((data) => (
                <Box>
                  <ComponentFollower data={data} />
                </Box>
              ))}
            </TabPanel>
            <TabPanel>
              {following.map((following) => (
                <ComponentFollowing data={following} />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default FollowPage;
