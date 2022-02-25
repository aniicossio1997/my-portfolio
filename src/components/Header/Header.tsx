import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useMediaQuery, useColorMode } from "@chakra-ui/react";
import BtnModeSwitch from "./BtnModeSwitch";
import { basicRoutes } from "../../routes/basicRoutes";
import ItemLink from "./ItemLink";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const [isSmall] = useMediaQuery("(max-width: 780px)");
  const colorValue = useColorModeValue("gray.80", undefined);
  return (
    <Stack
      as={"header"}
      padding={4}
      pos={"fixed"}
      width={"100%"}
      zIndex={{ base: 20, md: undefined }}
      mb={"300px"}
      borderBottomColor={"gray.30"}
      borderBottomWidth={1}
      bg={useColorModeValue("gray.100", "gray.600")}
    >
      <Stack direction={"row-reverse"}>
        <BtnModeSwitch />
      </Stack>
      <Flex
        as="nav"
        direction={"row"}
        justifyContent="space-between"
        wrap="wrap"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            ❰AC❱
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
        </Box>
        <Stack
          bg={colorValue}
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          w={{ base: "100%", md: "auto" }}
          alignItems={{ base: "center", md: "flex-end" }}
          justifyContent={"end"}
          flexGrow={1}
          mt={{ base: 6, md: 0 }}
          spacing={6}
        >
          {basicRoutes.map((route) => (
            <ItemLink key={route.to} to={route.to} name={route.name} />
          ))}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Header;
