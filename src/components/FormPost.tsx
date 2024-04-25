import {
  Box,
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
import { useRef, useState } from "react";
import { createThread } from "../libs/call/thread";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { getThreadAsync } from "../store/async/thread";

interface IThreadPostProps {
  threadId?: number;
  callback?: () => Promise<void>;
}
const FormPost: React.FC<IThreadPostProps> = ({ threadId, callback }) => {
  const profile = useAppSelector((state) => state.auth);
  //   const { handleChange, handlePost } = UseThread();
  const [formThread, setFormThread] = useState<{
    content: string;
    image: FileList | null;
    threadId?: number;
  }>({ content: "", image: null });
  const dispatch = useAppDispatch();

  const handlePostThread = async (e: React.MouseEvent) => {
    try {
      e.preventDefault();

      if (threadId) {
        formThread.threadId = threadId;
      }

      await createThread(formThread);

      if (callback) {
        await callback();
      } else {
        dispatch(getThreadAsync());
      }

      // window.location.reload();

      setFormThread({
        content: "",
        image: null,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const handleImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <HStack
        display="flex"
        borderBottom={"1px solid gray "}
        paddingTop="10"
        paddingBottom={10}
        px="5"
      >
        <Wrap paddingTop="">
          <WrapItem>
            <Avatar
              name="Malik Mahdi"
              src={"http://localhost:5123/uploads/" + profile.user?.avatar}
            />
          </WrapItem>
        </Wrap>
        <form
          encType="multipart/form-data"
          // onSubmit={handlePost}
        >
          <FormControl display="flex" gap="2" w={"160%"}>
            <InputGroup display="flex" flexDirection="column" gap="2">
              <Input
                w={"100%"}
                type="text"
                name="content"
                value={formThread.content}
                onChange={(e) =>
                  setFormThread({ ...formThread, content: e.target.value })
                }
                borderRadius="sm"
                px="5"
                py="3"
                variant="unstyled"
                placeholder="Tell your story"
                color="white"
                size="lg"
                _hover={{
                  backgroundColor: "#262626",
                  borderRadius: "sm",
                }}
                _focus={{
                  borderBottom: "1px solid gray",
                }}
              />
            </InputGroup>

            <HStack>
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
                  onChange={(e) =>
                    setFormThread({ ...formThread, image: e.target.files })
                  }
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
                <LuImagePlus color="green" />
                <Text color={"white"}>{formThread.image?.length}</Text>
              </Button>
              <Button
                type="submit"
                colorScheme="whatsapp"
                borderRadius="3xl"
                px="5"
                onClick={handlePostThread}
              >
                Post
              </Button>
            </HStack>
          </FormControl>
        </form>
      </HStack>

      {/* <Box>
        {formThread.image.map((item) => (
          // <Image key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
          <Image {...srcset(item.image, 121, item={item.cols || 1}, item={item.rows || 1})} />
          // </Image>
        ))}
      </Box> */}
    </>
  );
};
export default FormPost;
