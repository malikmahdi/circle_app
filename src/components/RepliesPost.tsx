import {
  Avatar,
  Button,
  FormControl,
  HStack,
  Input,
  InputGroup,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import avatarr from "../assets/image/avatar2.jpg";
import { LuImagePlus } from "react-icons/lu";
// import UseThread from "../hooks/useThread";

const RepliesPost = () => {
  //   const { handleChange, handlePost } = UseThread();

  return (
    <>
      <HStack
        display="flex"
        paddingTop="5"
        paddingBottom="5"
        px="5"
        borderBottom="1px"
        borderColor="gray"
      >
        <Wrap paddingTop="">
          <WrapItem>
            <Avatar name="Malik Mahdi" src={avatarr} />
          </WrapItem>
        </Wrap>
        <FormControl display="flex" gap="2">
          <InputGroup display="flex" flexDirection="column" gap="2">
            <Input
              name="content"
              //   onChange={handleChange}
              bg="#262626"
              id="form-post"
              px="5"
              py="3"
              variant="filled"
              placeholder="Type your reply!"
              color="white"
              size="lg"
              _hover={{ borderColor: "gray", color: "white" }}
              _focus={{ bg: "#262626", borderColor: "#262620" }}
            />
          </InputGroup>

          <HStack>
            <Text fontSize="3xl">
              <LuImagePlus color="green" />
            </Text>
            <Button
              //   onClick={() => handlePost.mutate()}
              colorScheme="whatsapp"
              borderRadius="3xl"
              px="5"
            >
              Reply
            </Button>
          </HStack>
        </FormControl>
      </HStack>
    </>
  );
};
export default RepliesPost;
