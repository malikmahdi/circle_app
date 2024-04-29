import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getThreadById,
  getThreadImages,
  getThreadProfile,
} from "../libs/call/thread";
import { IThread, ThreadImage } from "../types/app";
import ThreadCard from "../features/ThreadCard";
import { useParams } from "react-router-dom";

interface IProfileMedia {
  media: IThread;
}

const ProfileAllMediaUser: React.FC = () => {
  const [threadProfile, setThreadProfile] = useState<IThread[]>([]);
  const _host_url = "http://localhost:5123/uploads/";

  const id = useParams();

  const handleThreadProfile = async (id: number) => {
    try {
      const { data } = await getThreadById(Number(id));
      //   setThreadProfile(data.data);
      console.log("data detail img", data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("id detail", id);

  useEffect(() => {
    handleThreadProfile(Number(id));
  }, []);

  return (
    <Box width={"100%"} bg={"#1D1D1D"}>
      {threadProfile.map((thread) => (
        <Box key={thread.id}>
          {thread.image &&
            thread.image.map((item, index) => (
              <SimpleGrid
                key={index}
                columns={2}
                spacingX="10px"
                spacingY="20px"
              >
                <Box>
                  <Box bg="tomato">
                    <Image
                      src={_host_url + item.image}
                      alt="Dan Abramov"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </SimpleGrid>
            ))}
        </Box>
      ))}
    </Box>
  );
};

export default ProfileAllMediaUser;
