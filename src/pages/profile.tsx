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

// import avatar from "../assets/image/avatar.jpg";
// import avatarr from "../assets/image/avatar2.jpg";
// import { UseSelector, useSelector } from "react-redux";
// import { RootState } from "../store/types/rootState";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppSelector } from "../store/rootReducer";
import { useState, useEffect } from "react";
import { getThreadProfile } from "../libs/call/thread";
import ThreadCard from "../features/ThreadCard";
import ProfileAllPost from "../components/ProfileAllPost";
import ProfileAllMedia from "../components/ProfileAllMedia";
import ParentProfile from "../components/ParentProfile";

const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.auth);
  // const thread = useAppSelector((state) => state.thread);
  const profile = useAppSelector((state) => state.auth.user);
  const _host_url = "http://localhost:5123/uploads/";
  // {thread.threads.map((thread) => (
  //   <ThreadCard key={thread.id} thread={thread} />
  // ))}

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
              <ProfileAllPost />
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
