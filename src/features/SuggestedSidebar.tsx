import { Text, Button, Box, Wrap, WrapItem, Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ISuggested from "../interface/Suggested";

const SuggestedSidebar = (props: ISuggested) => {
  const [isFollow, setIsFollow] = useState<boolean>(false);

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    handleFollow;
  }, []);

  return (
    <>
      <Box px="5" key={props.id}>
        <Box display="flex" marginTop="5" justifyContent="space-between">
          <Box display="flex" gap="5">
            <Wrap paddingTop="">
              <WrapItem>
                <Avatar name="Malik Mahdi" src={props.author_picture} />
              </WrapItem>
            </Wrap>

            <Box display="flex" flexDir="column">
              <Text fontSize="md" color="white">
                {props.author_fullname}
              </Text>
              <Text color="gray">{props.author_username}</Text>
            </Box>
          </Box>

          {isFollow ? (
            <Button
              onClick={handleFollow}
              colorScheme="gray"
              color="white"
              variant="outline"
              borderRadius="3xl"
              _hover={{ bg: "white", color: "black" }}
            >
              Following
            </Button>
          ) : (
            <Button
              onClick={handleFollow}
              colorScheme="gray"
              color="white"
              variant="outline"
              borderRadius="3xl"
              _hover={{ bg: "white", color: "black" }}
            >
              Follow
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SuggestedSidebar;
