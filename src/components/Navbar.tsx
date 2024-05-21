import {
  Box,
  Button,
  Stack,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiUserSearchLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import ModalPost from "./ModalPost";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/rootReducer";
import { SET_LOGOUT } from "../store/slice/authSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize: any) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  return (
    <>
      <Box
        height="100%"
        display="flex"
        flexDir="column"
        position="fixed"
        borderRight="1px"
        borderColor="gray"
        py="20px"
        px="20px"
        width="20%"
        justifyContent="space-between"
      >
        <Link to={"/"}>
          <Text fontSize="5xl" color="green" as="b">
            Circle
          </Text>
        </Link>

        <Box display="flex">
          <Stack>
            <Link to={"/"}>
              <Text
                fontSize="xl"
                display="flex"
                alignItems="center"
                gap="2"
                _hover={{ color: "#5AC35F" }}
                _focus={{ color: "#5AC35F" }}
              >
                <AiOutlineHome />
                Home
              </Text>
            </Link>

            <Link to={"/search"}>
              <Text
                fontSize="xl"
                display="flex"
                alignItems="center"
                gap="2"
                _hover={{ color: "#5AC35F" }}
              >
                <RiUserSearchLine />
                Seach
              </Text>
            </Link>

            <Link to={"/follow"}>
              <Text
                fontSize="xl"
                display="flex"
                alignItems="center"
                gap="2"
                _hover={{ color: "#5AC35F" }}
              >
                <AiOutlineHeart />
                Follows
              </Text>
            </Link>

            <Link to={"/profile"}>
              <Text
                fontSize="xl"
                display="flex"
                alignItems="center"
                gap="2"
                _hover={{ color: "#5AC35F" }}
              >
                <CgProfile />
                Profile
              </Text>
            </Link>
          </Stack>
        </Box>

        {sizes.map((size) => (
          <Button
            colorScheme="whatsapp"
            borderRadius="3xl"
            px="20"
            onClick={() => handleSizeClick(size)}
            key={size}
          >
            Create Post
          </Button>
        ))}

        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent borderRadius="2xl">
            <ModalCloseButton
              color="white"
              mt="2"
              mr="2"
              // variant="outline"
              bg="gray"
              borderColor="white"
              borderRadius="2xl"
            />
            <ModalBody bg="#1D1D1D" borderRadius="xl">
              <ModalPost />
            </ModalBody>
          </ModalContent>
        </Modal>

        <Box marginTop="100%" display="flex">
          <Button
            color="white"
            width="100%"
            bg="#1D1D1D"
            fontSize="xl"
            px="5"
            onClick={() => {
              dispatch(SET_LOGOUT());
              navigate("/login");
            }}
            _hover={{ bg: "white", color: "black" }}
          >
            <Flex alignItems="center" gap="2">
              <TbLogout2 />
              Logout
            </Flex>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
