import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getThreadImages, getThreadProfile } from "../libs/call/thread";
import { IThread, ThreadImage } from "../types/app";
import ThreadCard from "../features/ThreadCard";

interface IProfileMedia {
  media: ThreadImage;
}

const ProfileAllMedia: React.FC = () => {
  const [threadProfile, setThreadProfile] = useState<IThread[]>([]);
  const _host_url = "http://localhost:5123/uploads/";

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
    <Box width={"100%"} bg={"#1D1D1D"}>
      {threadProfile.map((thread) => (
        <Box key={thread.id}>
          <SimpleGrid columns={2} spacingX="20px" spacingY="20px">
            {thread.image &&
              thread.image.map((item, index) => (
                <Box key={index}>
                  <Box bg="tomato" mt={"8px"}>
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
              ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileAllMedia;
