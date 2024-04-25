import {
  Box,
  Button,
  Stack,
  FormControl,
  Input,
  Text,
  FormHelperText,
  InputGroup,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const ResetPasswordLayout: React.FC = () => {
  return (
    <>
      <Stack>
        <Box width="27%" mx="auto" my="auto" mt="8%">
          <Box display="flex" flexDir="column" mb="5">
            <Text fontSize="5xl" color="green" as="b">
              Circle
            </Text>
            <Text fontSize="4xl" as="b" color="white">
              Reset Password
            </Text>
          </Box>

          <FormControl>
            <InputGroup display="flex" flexDir="column" gap="4">
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                placeholder="New Password"
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                placeholder="Confirm New Password"
              />
            </InputGroup>

            <Button
              mt={4}
              py={6}
              colorScheme="whatsapp"
              borderRadius="3xl"
              type="submit"
              w="100%"
              fontSize="lg"
            >
              Create New Password
            </Button>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
};

export default ResetPasswordLayout;
