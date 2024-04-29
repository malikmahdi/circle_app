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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FaUserAltSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IUser } from "../types/app";
import { getUsers } from "../libs/call/user";
import SuggestedSidebar from "../features/SuggestedSidebar";
import { RiUserSearchFill } from "react-icons/ri";

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
        <Stack spacing={4}>
          <InputGroup display={"flex"} alignItems={"center"}>
            <InputLeftElement pointerEvents="none" pt="3px">
              <RiUserSearchFill color="white" fontSize={"20px"} />
            </InputLeftElement>
            <Input
              type="text"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                py: "20px",
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
          </InputGroup>
        </Stack>
        {/* <Input /> */}
      </Box>
      {/* {} */}
      {/* <Flex width={"100%"} height={"100%"} justifyContent={"center"}>
        <Box display={"flex"} alignItems={"center"} gap={"2"}>
          // <Text color={"white"}>User not found</Text>
          // <FaUserAltSlash />
        </Box>
      </Flex> */}
      {/* <List> */}
      {searchResults ? (
        searchResults.map((user) => (
          <Box>
            <SuggestedSidebar data={user} />
          </Box>
        ))
      ) : (
        <Text color={"white"}>User not found</Text>
      )}

      {/* </List> */}
    </>
  );
};
export default SearchPage;
