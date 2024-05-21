import { Box, Text } from "@chakra-ui/react";
// import ProfileSidebar from "../components/ProfileSideBar";
import SuggestedSidebar from "../features/SuggestedSidebar";
import FooterSideBar from "../components/FooterSideBar";
import DataSuggested from "../mocks/suggested.json";
import React, { useEffect, useState } from "react";
import ISuggested from "../interface/Suggested";
import ProfileSidebar from "../components/ProfileSideBar";
import { getFollower } from "../libs/call/follow";
import { getUsers } from "../libs/call/user";
import { IUser } from "../types/app";

const RightSideBar = (): React.JSX.Element => {
  const [data, setData] = React.useState<ISuggested[]>([]);

  const [users, setUsers] = useState<IUser[]>([]);

  const getAllUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData(DataSuggested);
    getAllUsers();
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
          {users.map((item) => (
            <SuggestedSidebar data={item} key={item.id} />
          ))}
        </Box>
        <FooterSideBar />
      </Box>
    </>
  );
};

export default RightSideBar;
