import {
  Box,
  Stack,
  Flex,
  useDisclosure,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import BtnModeSwitch from "./BtnModeSwitch";
import { basicRoutes } from "../../routes/basicRoutes";
import ItemLink from "./ItemLink";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import BtnTranslateDesktop from "./BtnTranslateDesktop";
import { MenuResponsive } from "./MenuResponsive";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const colorValue = useColorModeValue("gray.80", undefined);
  const { t } = useTranslation(["home", "navbar"]);
  const [isLargerThan] = useMediaQuery('(min-width: 860px)')

  return (
    <>
      {
        isLargerThan ? <>
          <Stack
            as={"header"}
            padding={4}
            width={"100%"}
            zIndex={30}
            paddingX={20}
            paddingBottom={4}
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
              <Flex
                align="center"
                mr={4}
                display="block"
                position="relative"
                top={"-4.5rem"}
                left={0}
              >
                <Logo fontSize={{ base: 26,sm:30, md: 50 }} />
              </Flex>
              <Box display={{ base: "block", md: "none" }} onClick={handleToggle} cursor={"pointer"}>
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
                <Box  marginTop={5}>
                  <BtnTranslateDesktop  height={'35px'}/>
                </Box>
              </Stack>
            </Flex>
          </Stack>

        </> : <>
          <MenuResponsive />
        </>
      }

    </>
  );
};

export default Header;
