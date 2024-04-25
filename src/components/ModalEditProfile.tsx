import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  HStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import avatar from "../assets/image/avatar.jpg";
import avatarr from "../assets/image/avatar2.jpg";
import { UseSelector, useSelector } from "react-redux";
// import { RootState } from "../store/types/rootState";
import { LuImagePlus } from "react-icons/lu";

const ModalEditProfile = () => {
  // const { name, username, email } = useSelector(
  //   (state: RootState) => state.auth
  // );

  return (
    <>
      <Box>
        <Text color="white" as="b" fontSize="xl">
          Edit Profile
        </Text>
        <Box px="5" paddingTop="5"></Box>
        <Box position="relative">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={"150px"}
            width={"1000px"}
          />
        </Box>

        <Box display="flex" marginTop="3">
          <Wrap position="absolute" marginTop="" top="155" left="30">
            <WrapItem>
              <Avatar size="xl" name="Malik Mahdi" src={avatarr} />
            </WrapItem>
          </Wrap>
        </Box>

        <Stack marginTop={"10"}>
          <FormControl>
            <Box
              border={"1px"}
              borderRadius={"lg"}
              borderColor={"gray"}
              py={"3px"}
              gap={"1px"}
            >
              <FormLabel color="gray" fontSize={"sm"} px={"10px"}>
                Name
              </FormLabel>
              <Input
                type="email"
                size={"sm"}
                color={"white"}
                border={"none"}
                _focus={{ border: "none", outline: "none" }}
                _active={{ border: "none" }}
                value={"User"}
              />
            </Box>
          </FormControl>
        </Stack>
        <HStack py="5" justifyContent="end">
          <Button colorScheme="whatsapp" borderRadius="3xl" px="5">
            Save
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default ModalEditProfile;
