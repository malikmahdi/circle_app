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
  SimpleGrid,
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
import {
  getThreadImages,
  getThreadProfile,
  getThreadUserId,
  getThreads,
} from "../libs/call/thread";
import ThreadCard from "../features/ThreadCard";
// import ProfileAllPost from "../components/ProfileAllPost";
import ProfileAllMedia from "../components/ProfileAllMedia";
import { IThread, IUser } from "../types/app";
import { getProfileById } from "../libs/call/profile";
import ParentProfile from "../components/ParentProfile";
import ProfileAllMediaUser from "../components/ProfileAllMediaUser";

const ProfilePageById = () => {
  // const { user } = useAppSelector((state) => state.auth);
  // const thread = useAppSelector((state) => state.thread);
  // const profile = useAppSelector((state) => state.auth.user);

  const { id } = useParams();

  const _host_url = "http://localhost:5123/uploads/";
  const [threadImage, setThreadImage] = useState([]);

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

  const [threadUserId, setThreadUserId] = useState<IThread>();

  const handleThreadUserId = async (id: Number) => {
    try {
      const { data } = await getThreadUserId(Number(id));

      setThreadUserId(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataUser = async () => {
    try {
      const { data } = await getProfileById(Number(id));

      setUserDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleThreadImages = async (id: number) => {
    try {
      const { data } = await getThreadImages(id);

      setThreadImage(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDataUser();
    handleThreadUserId(Number(id));
    handleThreadImages(Number(id));
  }, [id]);

  // console.log("data image", threadImage);
  console.log("data detail", threadUserId);

  return (
    <>
      <ParentProfile profile={userDetail} />

      <HStack w={"100%"}>
        <Tabs isFitted w={"100%"}>
          <TabList mb="1em">
            <Tab w={"100%"}>
              <Text _hover={{}}>All Post</Text>
            </Tab>
            <Tab>
              <Text _hover={{}}>All Media</Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {threadUserId?.map((thread: IThread) => (
                <ThreadCard key={thread.id} thread={thread} />
              ))}
            </TabPanel>
            <TabPanel>
              {threadUserId?.map((thread: IThread) => (
                <Box>
                  {/* {thread.image &&
                    thread.image.map((item) => (
                      <Image src={_host_url + item.image}></Image>
                    ))} */}
                  <SimpleGrid columns={2} spacingX="10px" spacingY="20px">
                    {thread.image &&
                      thread.image.map((item, index) => (
                        <Box bg="tomato" key={index} width={""}>
                          <Image
                            src={_host_url + item.image}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      ))}
                  </SimpleGrid>
                </Box>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>

      {/* {media ? <Text>Ini ALL POST</Text> : <Text>Ini Media</Text>} */}
    </>
  );
};

export default ProfilePageById;
