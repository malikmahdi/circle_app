import { Box, Text } from "@chakra-ui/react";
// import ProfileSidebar from "../components/ProfileSideBar";
import SuggestedSidebar from "../features/SuggestedSidebar";
import FooterSideBar from "../components/FooterSideBar";
import DataSuggested from "../mocks/suggested.json";
import React, { useEffect } from "react";
import ISuggested from "../interface/Suggested";
import ProfileSidebar from "../components/ProfileSideBar";

const RightSideBar = (): React.JSX.Element => {
  const [data, setData] = React.useState<ISuggested[]>([]);

  useEffect(() => {
    setData(DataSuggested);
  }, []);

  return (
    <>
      <Box height="100%" position="fixed">
        <ProfileSidebar />
        <Box my={"5"} px={"5"}>
          <Text color="white" as="b" fontSize="xl">
            Suggested for you
          </Text>
        </Box>
        <Box
          height="200"
          mx="3"
          bg="#262626"
          my="5"
          borderRadius="lg"
          overflow="auto"
          paddingBottom="5"
        >
          {data.map((item) => (
            <SuggestedSidebar
              key={item.id}
              id={item.id}
              author_fullname={item.author_fullname}
              author_username={item.author_username}
              author_picture={item.author_picture}
            />
          ))}
        </Box>
        <FooterSideBar />
      </Box>
    </>
  );
};

export default RightSideBar;
