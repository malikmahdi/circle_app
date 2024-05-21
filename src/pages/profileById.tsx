import {
  Image,
  Text,
  Box,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
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
import { IThread } from "../types/app";
import { getProfileById } from "../libs/call/profile";
import ParentProfile from "../components/ParentProfile";

const ProfilePageById = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const _host_url = "http://localhost:5123/uploads/";
  const [threadImage, setThreadImage] = useState([]);

  const [userDetail, setUserDetail] = useState<any>({
    user: {
      id: 0,
      fullname: "",
      username: "",
      email: "",
      _count: {
        following: "",
        follower: "",
      },
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
                  <SimpleGrid columns={2} spacingX="10px">
                    {thread.image &&
                      thread.image.map((item, index) => (
                        <Box
                          bg="tomato"
                          mt={"10px"}
                          key={index}
                          width={""}
                          onClick={() => {
                            navigate(`/media/${thread.id}`);
                          }}
                        >
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
