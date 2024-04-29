import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppSelector } from "../store/rootReducer";
import { useState, useEffect } from "react";
import { getThreadProfile } from "../libs/call/thread";
import ThreadCard from "../features/ThreadCard";
// import ProfileAllPost from "../components/ProfileAllPost";
import ProfileAllMedia from "../components/ProfileAllMedia";
import ParentProfile from "../components/ParentProfile";
import { IThread } from "../types/app";

const ProfilePage = () => {
  // const { user } = useAppSelector((state) => state.auth);
  // const thread = useAppSelector((state) => state.thread);
  const profile = useAppSelector((state) => state.auth.user);
  // const _host_url = "http://localhost:5123/uploads/";

  const [threadProfile, setThreadProfile] = useState<IThread[]>([]);

  const handleThreadProfile = async () => {
    try {
      const { data } = await getThreadProfile();
      setThreadProfile(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleThreadProfile();
  }, []);

  return (
    <>
      {/* <ParentProfile profile={profile} /> */}
      {profile && <ParentProfile profile={profile} />}
      <HStack w={"100%"}>
        <Tabs isFitted w={"100%"}>
          <TabList mb="1em">
            <Tab w={"100%"}>
              <Text _hover={{}}>All Post</Text>
            </Tab>
            <Tab>All Media</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box width={"100%"} bg={"#1D1D1D"}>
                {threadProfile.map((thread) => (
                  <ThreadCard key={thread.id} thread={thread} />
                ))}
              </Box>
            </TabPanel>
            <TabPanel>
              <ProfileAllMedia />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      {/* {media ? <Text>Ini ALL POST</Text> : <Text>Ini Media</Text>} */}
    </>
  );
};

export default ProfilePage;
