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
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppSelector } from "../store/rootReducer";
import { useState, useEffect } from "react";
import { getThreadProfile } from "../libs/call/thread";
import ThreadCard from "../features/ThreadCard";
import ProfileAllPost from "../components/ProfileAllPost";
import ProfileAllMedia from "../components/ProfileAllMedia";
import { IProfile } from "../types/app";

interface IProfileProps {
  profile: IProfile;
}

const ParentProfile: React.FC<IProfileProps> = ({ profile }) => {
  const _host_url = "http://localhost:5123/uploads/";
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Card mx="3" marginTop="5" bg="#1d1d1d" height="">
        <Box px="5" paddingTop="5">
          <Text
            display="flex"
            alignItems="center"
            fontSize="3xl"
            as="b"
            color="white"
            gap="3"
          >
            <Link to="/">
              <FaArrowLeftLong />
            </Link>
            Hallo <MdWavingHand />
            {profile?.user.fullname}
          </Text>
        </Box>
        <CardBody>
          <Box position="relative">
            <Image
              src={_host_url + profile.cover}
              borderRadius="lg"
              height={"250px"}
              width={"1000px"}
            />
          </Box>

          <Box display="flex" marginTop="3" justifyContent="space-between">
            <Wrap position="absolute" marginTop="" top="270" left="30">
              <WrapItem>
                <Avatar
                  size="xl"
                  name={profile?.user.fullname}
                  src={_host_url + profile.avatar}
                />
              </WrapItem>
            </Wrap>

            <Box position="absolute" right="5">
              {/* <Button
                colorScheme="gray"
                color="white"
                variant="outline"
                borderRadius="3xl"
                _hover={{ bg: "white", color: "black" }}
              >
                Edit Profile
              </Button> */}
            </Box>
          </Box>

          <Stack mt="10">
            <Heading size="md" color="white">
              ✨ {profile?.user.fullname}✨
            </Heading>
            <Text color="gray">@{profile?.user.username}</Text>
            <Text color="white" fontSize="2xl">
              {profile?.bio}
            </Text>
            <HStack gap="1">
              <Box display="flex" gap="1">
                <Text fontSize="md" color="white">
                  300
                </Text>
                <Text fontSize="md" color="gray">
                  Following
                </Text>
              </Box>

              <Box display="flex" gap="1">
                <Text fontSize="md" color="white">
                  300
                </Text>
                <Text fontSize="md" color="gray">
                  Followers
                </Text>
              </Box>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ParentProfile;
