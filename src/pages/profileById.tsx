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
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppSelector } from "../store/rootReducer";
import { useState, useEffect } from "react";
import { getThreadProfile } from "../libs/call/thread";
import ThreadCard from "../features/ThreadCard";
import ProfileAllPost from "../components/ProfileAllPost";
import ProfileAllMedia from "../components/ProfileAllMedia";
import { IUser } from "../types/app";
import { getProfileById } from "../libs/call/profile";
import ParentProfile from "../components/ParentProfile";

const ProfilePageById = () => {
  // const { user } = useAppSelector((state) => state.auth);
  // const thread = useAppSelector((state) => state.thread);
  const profile = useAppSelector((state) => state.auth.user);

  const { id } = useParams();

  const _host_url = "http://localhost:5123/uploads/";

  const [userDetail, setUserDetail] = useState<any>({
    user: {
      id: 0,
      fullname: "",
      username: "",
      email: "",
    },
    bio: "",
    avatar: "",
    cover: "",
  });

  const fetchDataUser = async () => {
    try {
      const { data } = await getProfileById(Number(id));

      setUserDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, [id]);

  console.log("detail user", userDetail);

  return (
    <>
      {/* <Card mx="3" marginTop="5" bg="#1d1d1d">
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
            {userDetail.user.fullname}
          </Text>
        </Box>
        <CardBody>
          <Box position="relative">
            <Image
              src={_host_url + userDetail.cover}
              borderRadius="lg"
              height={"250px"}
              width={"100%"}
            />
          </Box>

          <Box display="flex" marginTop="3" justifyContent="space-between">
            <Wrap position="absolute" marginTop="" top="270" left="30">
              <WrapItem>
                <Avatar
                  size="xl"
                  name={user?.user.fullname}
                  src={_host_url + userDetail.avatar}
                />
              </WrapItem>
            </Wrap>

            <Box position="absolute" right="5"> */}
      {/* <Button
                  colorScheme="gray"
                  color="white"
                  variant="outline"
                  borderRadius="3xl"
                  _hover={{ bg: "white", color: "black" }}
                >
                  Edit Profile
                </Button> */}
      {/* </Box>
          </Box>

          <Stack mt="10">
            <Heading size="md" color="white">
              ✨ {userDetail.user.fullname}✨
            </Heading>
            <Text color="gray">@{userDetail.user.username}</Text>
            <Text color="white" fontSize="2xl">
              {userDetail.bio}
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
      </Card> */}

      {/* {userDetail.map((data: any) => (
        <ParentProfile profile={data} key={data.id} />
      ))} */}

      <ParentProfile profile={userDetail} />

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

export default ProfilePageById;
