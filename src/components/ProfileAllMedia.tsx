import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getThreadImages, getThreadProfile } from "../libs/call/thread";
import { IThread, ThreadImage } from "../types/app";
import ThreadCard from "../features/ThreadCard";
import { useNavigate } from "react-router-dom";

interface IProfileMedia {
  media: ThreadImage;
}

const ProfileAllMedia: React.FC = () => {
  const [threadProfile, setThreadProfile] = useState<IThread[]>([]);
  const _host_url = "http://localhost:5123/uploads/";
  const navigate = useNavigate();

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
      {threadProfile.map((thread) => (
        <Box key={thread.id}>
          <SimpleGrid columns={2} spacingX="10px">
            {thread.image &&
              thread.image.map((item, index) => (
                <Box
                  key={index}
                  mt={"10px"}
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
    </>
  );
};

export default ProfileAllMedia;
