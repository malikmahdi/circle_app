import { Box, Card, Flex, Text } from "@chakra-ui/react";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { getUsers } from "../libs/call/user";
import CardSuggested from "./CardSuggested";
// import Component_UserCard from "./Component_UserCard";

export default function Component_SuggestCard(): React.JSX.Element {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const getAllUsers = async () => {
    try {
      console.log(token);
      const res = await getAllUser(token);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box display="flex" width="100%" height={"fit-content"}>
      <Card
        width="100%"
        bg="#2f2f2f"
        color="white"
        padding="8px 16px"
        borderRadius="12px"
        overflow={"hidden"}
        overflowY={"auto"}
        height={"236px"}
        style={{ scrollbarWidth: "none" }}
      >
        <Text
          fontWeight="semibold"
          marginLeft="4px"
          marginTop="4px"
          marginBottom="10px"
          fontSize="18px"
        >
          Suggested for You
        </Text>
        {users?.map((user) => (
          <Component_UserCard
            key={user.id}
            fullname={user.fullname}
            username={user.username}
            avatar={user.profile?.avatar}
            followingId={user.id}
          />
        ))}
      </Card>
    </Box>
  );
}
