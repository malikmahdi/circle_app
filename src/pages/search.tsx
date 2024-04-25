import {
  Box,
  Button,
  Stack,
  FormControl,
  Input,
  Text,
  FormHelperText,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Avatar,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IUser } from "../types/app";
import { getUsers } from "../libs/call/user";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  console.log("result search", searchResults);

  const handleSearch = async () => {
    try {
      const res = await getUsers();
      const filterSearchResults = res.data.data.filter((user: IUser) =>
        user.username.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      setSearchResults(filterSearchResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchResults = async () => {
      if (searchTerm.trim() !== "") {
        await handleSearch();
      } else {
        setSearchResults([]);
      }
    };
    fetchResults();
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Box>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            width: "98%",
            height: "30px",
            border: "1px solid gray",
            backgroundColor: "#1d1d1d",
            borderRadius: "20px",
            marginTop: "10px",
            marginLeft: "5px",
            color: "white",
          }}
        />
      </Box>

      {/* <List> */}
      {searchResults.map((user) => (
        <Box>
          {/* <ListItem> */}
          <Box>
            <Avatar
              src={`http://localhost:5123/uploads/${user.profile?.avatar}`}
            />

            <VStack>
              <Text>{user.fullname}</Text>
              <Text>@{user.username}</Text>
              <Text>{user.profile?.bio}</Text>
            </VStack>
          </Box>
          {/* </ListItem> */}
        </Box>
      ))}
      {/* </List> */}
    </>
  );
};
export default SearchPage;
