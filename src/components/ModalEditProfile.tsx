import React, { useRef } from "react";
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
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import avatar from "../assets/image/avatar.jpg";
import avatarr from "../assets/image/avatar2.jpg";
import { UseSelector, useSelector } from "react-redux";
// import { RootState } from "../store/types/rootState";
import { LuImagePlus } from "react-icons/lu";
import { useAppSelector } from "../store/rootReducer";
import { updateProfile } from "../libs/call/profile";

const ModalEditProfile = () => {
  const [formEditProfile, setFormEditProfile] = React.useState<{
    fullname?: string;
    bio?: string;
    cover?: FileList | null;
    avatar?: FileList | null;
  }>({ fullname: "", bio: "", cover: null, avatar: null });

  const profile = useAppSelector((state) => state.auth.user);
  const _host_url = "http://localhost:5123/uploads/";

  const handleEditProfile = async (e: React.FormEvent): Promise<void> => {
    await updateProfile(formEditProfile);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEditProfile({ ...formEditProfile, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormEditProfile({ ...formEditProfile, [e.target.name]: e.target.files });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  console.log(formEditProfile);

  return (
    <>
      <Box>
        <Box>
          <Text color="white" as="b" fontSize="xl">
            Edit Profile
          </Text>
        </Box>

        <form onSubmit={handleEditProfile}>
          <FormControl>
            <Box my={"20px"} py={"90px"}>
              <Button
                onClick={handleImage}
                fontSize="3xl"
                background={"none"}
                width={"100%"}
                _hover={{ backgroundColor: "none", color: "white" }}
              >
                <Input
                  ref={inputRef}
                  hidden
                  type="file"
                  name="cover"
                  onChange={handleChangeImage}
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
                <Image
                  src={_host_url + profile?.cover}
                  objectFit={"cover"}
                  width={"100%"}
                  height={"200px"}
                />
                <Box position={"absolute"}>
                  <LuImagePlus color="white" />
                </Box>
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleImage}
                fontSize="3xl"
                background={"none"}
                width={""}
                _hover={{ backgroundColor: "none", color: "white" }}
              >
                <Input
                  ref={inputRef}
                  hidden
                  type="file"
                  name="avatar"
                  onChange={handleChangeImage}
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
                <Wrap position={"absolute"} top={"-80px"} left={"30px"}>
                  <WrapItem>
                    <Avatar
                      size={"xl"}
                      name={profile?.user.fullname}
                      src={_host_url + profile?.avatar}
                    />
                    <Box position={"absolute"} right={"0px"} bottom={"0px"}>
                      <LuImagePlus color="white" />
                    </Box>
                  </WrapItem>
                </Wrap>
              </Button>
            </Box>

            <InputGroup display="flex" flexDir="column" gap="4">
              {/* <FormLabel color={"white"}>Fullname</FormLabel> */}
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type={"text"}
                name={"fullname"}
                placeholder={profile?.user.fullname}
                value={formEditProfile.fullname}
                onChange={handleChange}
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type={"bio"}
                name={"bio"}
                placeholder={profile?.bio}
                value={formEditProfile.bio}
                onChange={handleChange}
              />
            </InputGroup>

            <Box py="5" display={"flex"} justifyContent="end">
              <Button colorScheme="whatsapp" borderRadius="3xl" px="5">
                Save
              </Button>
            </Box>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default ModalEditProfile;

// <FormControl>
//   <Box
//     border={"1px"}
//     borderRadius={"lg"}
//     borderColor={"gray"}
//     py={"3px"}
//     gap={"1px"}
//   >
//     <FormLabel color="gray" fontSize={"sm"} px={"10px"}>
//       Name
//     </FormLabel>
//     <Input
//       type="email"
//       size={"sm"}
//       color={"white"}
//       border={"none"}
//       _focus={{ border: "none", outline: "none" }}
//       _active={{ border: "none" }}
//       value={"User"}
//     />
//   </Box>
// </FormControl>
