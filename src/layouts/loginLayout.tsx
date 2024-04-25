import React from "react";
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
import { LoginApi } from "../libs/call/user";
import { useDispatch } from "react-redux";
import { getProfile } from "../libs/call/profile";
import { SET_LOGIN } from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/rootReducer";
import { LoginAsync, getProfileAsync } from "../store/async/auth";
// import useLogin from "../hooks/useLogin";

// interface ILoginFormProps {
//   callback: () => void;
// }

const LoginLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.auth);

  const [formLogin, setFormLogin] = React.useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = (await dispatch(LoginAsync(formLogin))).payload;
      console.log("token form", token);
      await dispatch(getProfileAsync(token));
      // const res = await LoginApi(formLogin);
      // const token = res.data.data;
      // const resProfile = await getProfile(token);

      // localStorage.setItem("token", token);

      // dispatch(SET_LOGIN({ user: resProfile.data.data, token }));
      // callback();
      navigate("/");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <>
      <Stack>
        <Box width="27%" mx="auto" my="auto" mt="7%">
          <Box display="flex" flexDir="column" mb="5">
            <Text fontSize="5xl" color="green" as="b">
              Circle
            </Text>
            <Text fontSize="4xl" as="b" color="white">
              Login to Circle
            </Text>
          </Box>

          <form onSubmit={handleLogin} encType="multipart/form-data">
            <FormControl>
              <InputGroup display="flex" flexDir="column" gap="4">
                <Input
                  borderColor="gray"
                  borderRadius="xl"
                  color="white"
                  py={6}
                  type="text"
                  name={"username"}
                  placeholder="Email/Username*"
                  value={formLogin.username}
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, username: e.target.value })
                  }
                />
                <Input
                  borderColor="gray"
                  borderRadius="xl"
                  color="white"
                  py={6}
                  type="password"
                  name={"password"}
                  placeholder="Password*"
                  value={formLogin.password}
                  onChange={(e) =>
                    setFormLogin({ ...formLogin, password: e.target.value })
                  }
                />
              </InputGroup>

              <FormHelperText color="white" display="flex" justifyContent="end">
                <Link to="/forgot-password" color="whatsapp">
                  Forgot Password?
                </Link>
              </FormHelperText>

              <Button
                mt={5}
                py={6}
                colorScheme="whatsapp"
                borderRadius="3xl"
                type="submit"
                w="100%"
                fontSize="lg"
                // onClick={handleSubmit}
              >
                Sign in
              </Button>
              <FormHelperText color="white" display="flex">
                Don't have an account yet?
                <Link to="/register" color="whatsapp">
                  <Text color="green.500" as="b">
                    Create account
                  </Text>
                </Link>
              </FormHelperText>
            </FormControl>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default LoginLayout;
