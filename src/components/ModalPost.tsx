import {
  Box,
  Text,
  Avatar,
  Button,
  HStack,
  Input,
  InputGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import avatarr from "../assets/image/avatar2.jpg";

const ModalPost = () => {
  return (
    <>
      <Box>
        <HStack
          display="flex"
          paddingTop={10}
          paddingBottom={10}
          borderBottom="1px"
          borderColor="gray"
        >
          <Wrap paddingTop="">
            <WrapItem>
              <Avatar name="Malik Mahdi" src={avatarr} />
            </WrapItem>
          </Wrap>
          <InputGroup>
            <Input
              id="form-post"
              px="5"
              type="tel"
              variant="unstyled"
              placeholder="Create youre post"
              color="white"
              size="lg"
            />
          </InputGroup>
        </HStack>
        <HStack py="5" justifyContent="space-between">
          <Text fontSize="3xl">
            <LuImagePlus color="green" />
          </Text>
          <Button colorScheme="whatsapp" borderRadius="3xl" px="5">
            Post
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default ModalPost;
