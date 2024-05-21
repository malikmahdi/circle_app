import React, { useRef, useState } from "react";
import {
  Image,
  Text,
  Button,
  Box,
  FormControl,
  Input,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { updateProfile } from "../libs/call/profile";
import { getProfileAsync } from "../store/async/auth";
import { getThreadAsync } from "../store/async/thread";

import imageEdit from "../assets/image/img-edit-1.jpg";

const ModalEditProfile = () => {
  const _host_url = "http://localhost:5123/uploads/";
  const profile = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [formEditProfile, setFormEditProfile] = React.useState<{
    bio?: string;
    avatar?: File | null | string;
    cover?: File | null | string;
    username?: string;
    fullname?: string;
  }>({
    bio: profile?.bio || "",
    avatar: null,
    cover: null,
    username: profile?.user.username || "",
    fullname: profile?.user.fullname || "",
  });

  const [imagePreviewAvatar, setImagePreviewAvatar] = useState<
    string | undefined
  >();

  const [imagePreviewCover, setImagePreviewCover] = useState<
    string | undefined
  >();

  const handleImageAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewAvatar(imageUrl);
    }

    setFormEditProfile({
      ...formEditProfile,
      avatar: file || profile?.avatar || null,
    });
  };

  const handleImageCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewCover(imageUrl);
    }

    setFormEditProfile({
      ...formEditProfile,
      cover: file || profile?.cover || null,
    });
  };

  const handleEditProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile(token, formEditProfile);

      toast({
        title: "Profile updated!",
        status: "success",
        position: "top",
        // duration: 3000,
        isClosable: true,
      });

      setFormEditProfile(formEditProfile);

      await dispatch(getProfileAsync(token!));
      dispatch(getThreadAsync());

      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormEditProfile({ ...formEditProfile, [name]: value });
  };

  const inputAvatarRef = useRef<HTMLInputElement>(null);
  const inputCoverRef = useRef<HTMLInputElement>(null);

  const handleAvatar = () => {
    if (inputAvatarRef.current) {
      inputAvatarRef.current.click();
    }
  };

  const handleCover = () => {
    if (inputCoverRef.current) {
      inputCoverRef.current.click();
    }
  };

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
            <Box position={"relative"}>
              <Image
                width={"100%"}
                height={"80px"}
                src={imagePreviewCover ? imagePreviewCover : ""}
                rounded={"10px"}
                onClick={handleCover}
                objectFit={"cover"}
              />
              <Input
                type="file"
                display={"none"}
                onChange={handleImageCover}
                name="cover"
                ref={inputCoverRef}
              />
              <Image
                rounded={"full"}
                width={"70px"}
                height={"70px"}
                pos={"absolute"}
                top={"45px"}
                left={"30px"}
                objectFit={"cover"}
                src={imagePreviewAvatar ? imagePreviewAvatar : imageEdit}
                border={"4px"}
                borderColor={"#262626"}
                onClick={handleAvatar}
              />
              <Input
                type="file"
                display={"none"}
                onChange={handleImageAvatar}
                name="avatar"
                ref={inputAvatarRef}
              />
            </Box>

            <InputGroup display="flex" flexDir="column" gap="4">
              {/* <FormLabel color={"white"}>Fullname</FormLabel> */}
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type={"text"}
                name={"username"}
                placeholder={profile?.user.username}
                value={formEditProfile.username}
                onChange={handleInput}
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type={"text"}
                name={"fullname"}
                placeholder={profile?.user.fullname}
                value={formEditProfile.fullname}
                onChange={handleInput}
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
                onChange={handleInput}
              />
            </InputGroup>

            <Box py="5" display={"flex"} justifyContent="end">
              <Button
                type="submit"
                colorScheme="whatsapp"
                borderRadius="3xl"
                px="5"
              >
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
