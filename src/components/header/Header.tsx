import {
  Box,
  Stack,
  Flex,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import BtnModeSwitch from "./BtnModeSwitch";
import { basicRoutes } from "../../routes/basicRoutes";
import ItemLink from "./ItemLink";
import BtnTranslateMovil from "./BtnTranslateMovil";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import BtnTranslateDesktop from "./BtnTranslateDesktop";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const colorValue = useColorModeValue("gray.80", undefined);
  const { t } = useTranslation(["home", "navbar"]);

  return (
    <Stack
      as={"header"}
      padding={4}
      pos={"fixed"}
      width={"100%"}
      zIndex={{ base: 20, md: 30 }}
      borderBottomColor={"gray.30"}
      borderBottomWidth={1}
      bg={useColorModeValue("gray.100", "gray.600")}
      paddingX={{ base: undefined, md: 20 }}
      paddingBottom={{ base: undefined, md: 4 }}
    >
      <Stack direction={"row-reverse"}>
        <BtnModeSwitch />
        <Box display={{ base: "flex", md: "none" }}>
          <BtnTranslateMovil />
        </Box>
      </Stack>
      <Flex
        as="nav"
        direction={"row"}
        justifyContent="space-between"
        wrap="wrap"
      >
        <Flex
          align="center"
          mr={4}
          display="block"
          position="relative"
          top={-10}
          left={0}
        >
          <Logo />
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
        </Box>
        <Stack
          bg={colorValue}
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          w={{ base: "100%", md: "auto" }}
          alignItems={{ base: "center", md: "center" }}
          justifyContent={"end"}
          flexGrow={1}
          mt={{ base: 6, md: 0 }}
          spacing={6}
        >
          {basicRoutes.map((route) => (
            <ItemLink
              key={route.to}
              to={route.to}
              name={t(`navbar:routeNames.${route.name}`)}
              handleParentHideMenu={handleToggle}
            />
          ))}
          <Box display={{ base: "none", md: "block" }} marginTop={5}>
            <BtnTranslateDesktop />
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Header;
