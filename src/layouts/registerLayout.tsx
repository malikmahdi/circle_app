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

import { Link, useNavigate } from "react-router-dom";
import { IUserRegister } from "../types/Auth";
import { useState } from "react";
import { RegisterApi } from "../libs/call/user";
// import useRegister from "../hooks/useRegister";

const RegisterLayout = (): React.JSX.Element => {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState<IUserRegister>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const handleCreateRegister = async (e: React.MouseEvent): Promise<void> => {
    try {
      e.preventDefault();

      await RegisterApi(formRegister);
      navigate("/login");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  console.log(formRegister);

  return (
    <>
      <Stack>
        <Box width="27%" mx="auto" my="auto" mt="7%">
          <Box display="flex" flexDir="column" mb="5">
            <Text fontSize="5xl" color="green" as="b">
              Circle
            </Text>
            <Text fontSize="4xl" as="b" color="white">
              Create account Cirlce
            </Text>
          </Box>

          {/* <form action=""></form> */}
          <FormControl>
            <InputGroup display="flex" flexDir="column" gap="4">
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type="text"
                name={"fullname"}
                placeholder="Name*"
                onChange={handleChange}
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type="text"
                name={"username"}
                onChange={handleChange}
                placeholder="Username*"
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type="email"
                name={"email"}
                placeholder="Email*"
                onChange={handleChange}
              />
              <Input
                borderColor="gray"
                borderRadius="xl"
                color="white"
                py={6}
                type="password"
                name={"password"}
                placeholder="Password*"
                onChange={handleChange}
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
              onClick={handleCreateRegister}
            >
              Create
            </Button>
            <FormHelperText color="white" display="flex">
              Already have account?{" "}
              <Link to="/login" color="whatsapp">
                <Text color="green.500" as="b">
                  Login
                </Text>
              </Link>
            </FormHelperText>
          </FormControl>
        </Box>
      </Stack>
    </>
  );
};
export default RegisterLayout;
