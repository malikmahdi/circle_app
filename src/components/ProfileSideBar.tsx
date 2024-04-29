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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  InputGroup,
} from "@chakra-ui/react";
import avatarr from "../assets/image/avatar2.jpg";
import { useSelector } from "react-redux";
// import { RootState } from "../store/types/rootState";
// import ModalEditProfile from "./ModalEditProfile";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ModalEditProfile from "./ModalEditProfile";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { LuImagePlus } from "react-icons/lu";
import { getFollower } from "../libs/call/follow";

const ProfileSidebar = () => {
  const profile = useAppSelector((state) => state.auth.user);
  const _host_url = "http://localhost:5123/uploads/";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize: any) => {
    setSize(newSize);
    onOpen();
  };
  const sizes = ["xl"];

  return (
    <>
      <Card mx="3" p={"5px"} marginTop="5" bg="#262626" height="">
        <Box px="5" paddingTop="5">
          <Text color="white" as="b" fontSize="xl">
            MyProfile
          </Text>
        </Box>
        <CardBody>
          <Box position="relative">
            <Image
              src={_host_url + profile?.cover}
              alt="cover image"
              borderRadius="lg"
              height={"150px"}
              // width={"1000px"}
              objectFit="cover"
            />
          </Box>

          <Box display="flex" marginTop="3" justifyContent="space-between">
            <Wrap position="absolute" marginTop="" top="170" left="30">
              <WrapItem>
                <Avatar
                  size="xl"
                  name={_host_url + profile?.user.fullname}
                  src={_host_url + profile?.avatar}
                />
              </WrapItem>
            </Wrap>

            {sizes.map((size, index) => (
              <Box position="absolute" right="5" key={index}>
                <Button
                  colorScheme="gray"
                  color="white"
                  variant="outline"
                  borderRadius="3xl"
                  _hover={{ bg: "white", color: "black" }}
                  onClick={() => handleSizeClick(size)}
                  key={size}
                >
                  Edit Profile
                </Button>
              </Box>
            ))}
          </Box>

          <Stack mt="10">
            <Heading size="md" color="white">
              <Link to={`/profile`}>✨ {profile?.user.fullname} ✨</Link>
            </Heading>
            <Text color="gray">@{profile?.user.username}</Text>
            <Text color="white" fontSize="2xl">
              {profile?.bio}
            </Text>
            <HStack gap="1">
              <Box display="flex" gap="1">
                <Text fontSize="md" color="white">
                  {profile?.user?._count.following}
                </Text>
                <Text fontSize="md" color="gray">
                  Follower
                </Text>
              </Box>

              <Box display="flex" gap="1">
                <Text fontSize="md" color="white">
                  {profile?.user?._count.follower}
                </Text>
                <Text fontSize="md" color="gray">
                  Following
                </Text>
              </Box>
            </HStack>
          </Stack>
        </CardBody>
      </Card>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl">
          <ModalCloseButton
            color="white"
            mt="2"
            mr="2"
            bg="gray"
            borderColor="white"
            borderRadius="2xl"
          />
          <ModalBody bg="#1D1D1D" borderRadius="xl">
            <ModalEditProfile />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileSidebar;

{
  /* <Box position="relative" paddingTop={"5"}>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  height={"150px"}
                  width={"1000px"}
                  objectFit={"cover"}
                />
              </Box>

              <Box display="" top={1} marginTop="">
                <Button
                  fontSize="3xl"
                  onClick={handleImage}
                  background={"#1d1d1d"}
                  _hover={{ backgroundColor: "gray", color: "white" }}
                >
                  <Input
                    ref={inputRef}
                    // display="none"
                    hidden
                    type="file"
                    name="image"
                    multiple
                    max={4}
                    // onChange={(e) =>
                    //   setFormThread({ ...formThread, image: e.target.files })
                    // }
                    bg="#262626"
                    px="5"
                    py="3"
                    variant="filled"
                    placeholder="Enter the image link"
                    color="white"
                    size="lg"
                    _hover={{ borderColor: "gray", color: "white" }}
                    _focus={{ bg: "#262626", borderColor: "#262620" }}
                  />
                  <Wrap position="absolute" marginTop="" top="155" left="30">
                    <WrapItem>
                      <Avatar size="xl" name="Malik Mahdi" src={avatarr} />
                      <LuImagePlus />
                    </WrapItem>
                  </Wrap>
                </Button>
                {/* <Text color={"white"}>{formThread.image?.length}</Text> */
}
