import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getThreadProfile } from "../libs/call/thread";
import { IThread } from "../types/app";
import ThreadCard from "../features/ThreadCard";

const ProfileAllMedia = () => {
  const [threadProfile, setThreadProfile] = useState<IThread[]>([]);
  const _host_url = "http://localhost:5123/uploads/";

  const handleThreadProfile = async () => {
    try {
      const { data } = await getThreadProfile();
      setThreadProfile(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    handleThreadProfile();
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

export default ProfileAllMedia;
