import {
  Card,
  CardBody,
  Text,
  Button,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  Link,
} from "@chakra-ui/react";
import avatar from "../assets/image/avatar.jpg";
import React, { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

const FooterSideBar = () => {
  return (
    <>
      <Card mx="3" bg="#262626" my="5">
        <Box display="flex" alignItems="center" px="5" paddingTop="5">
          <Text color="white" fontSize="xl" as="b">
            Developed by Malik Mahdi
          </Text>
          <Text color="gray">
            <TbPointFilled />
          </Text>

          <Box display="flex" gap="1">
            <Link href="https://github.com/malikmahdi" isExternal>
              <Text fontSize="xl" color="gray">
                <IoLogoGithub />
              </Text>
            </Link>
            <Link
              href="https://www.linkedin.com/in/malik-md-273b7a224/"
              isExternal
            >
              <Text fontSize="xl" color="gray">
                <FaLinkedin />
              </Text>
            </Link>
            <Link href="#" isExternal>
              <Text fontSize="xl" color="gray">
                <FaFacebook />
              </Text>
            </Link>
            <Link href="https://www.instagram.com/_mmahdii/" isExternal>
              <Text fontSize="xl" color="gray">
                <RiInstagramFill />
              </Text>
            </Link>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDir="column"
          px="5"
          paddingTop="2"
          paddingBottom="5"
        >
          <Text color="gray" fontSize="sm" as="b">
            Powered by{" "}
            <Text color="red" as="b">
              DW
            </Text>
            Dumbways Indonesia
          </Text>
          <Text color="gray">#1 Coding Bootcamp</Text>
        </Box>
      </Card>
    </>
  );
};

export default FooterSideBar;
