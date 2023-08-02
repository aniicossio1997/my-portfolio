import {
  Box,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { basicRoutes } from "routes/basicRoutes";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BtnModeSwitch from "./BtnModeSwitch";
import BtnTranslate from "./BtnTranslateMovil";
import BtnTranslateDesktop from "./BtnTranslateDesktop";

const styles: { [key: string]: React.CSSProperties } = {
  btnList: {
    backgroundColor: "var(--bg-link)",
    color:'var(--text-link)'
  },
  sidebarStyle:{
    backgroundSize: "100% 100%",
    backgroundPosition: "0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
  },

};

export const MenuResponsive = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { t } = useTranslation(["home", "navbar"]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLargerThan] = useMediaQuery('(min-width: 550px)')
  const redirectLink = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <>
      
        <Flex
          maxWidth={"full"}
          minWidth="90%"
          alignItems="center"
          gap="2"
          boxSizing="border-box"
          justifyContent={"space-between"}
          padding={"5px"}
        >
          <Box>
            <Logo
              fontSize={{ base: "1.9rem", md: "2.1rem" }}
              position={"relative"}
            />
          </Box>
          <ButtonGroup>
          <BtnModeSwitch />
            {
              isLargerThan ? <BtnTranslateDesktop height={'40px'} /> :<BtnTranslate />
            }
            
            <IconButton
              aria-label="btn-show"
              ref={btnRef}
              icon={<HamburgerIcon width={30} height={30} />}
              onClick={onOpen}
              cursor="pointer"
              variant="ghost"
            />
          </ButtonGroup>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent
            padding="10px"
            maxWidth="300px"
            overflowY="auto"
            maxHeight={"100vh"}
            className={"sidebarCustom"}
          >
            <DrawerCloseButton />
            <DrawerHeader paddingBottom={6}>
              <Logo
                fontSize={{ base: "1.8rem", md: "1.9rem" }}
                onClick={() => redirectLink("")}
              />
            </DrawerHeader>

            <DrawerBody paddingTop={"4rem"} boxSizing="border-box" paddingX={0}>
              <List
                display="flex"
                flexDirection="column"
                flexGrow={1}
                gap={1}
                spacing={3}
              >
                {basicRoutes.map((itemRouter) => (
                  <ListItem
                    key={itemRouter.path}
                    fontSize="1.3rem"
                    textTransform={"uppercase"}
                    borderRadius={"10px"}
                    padding="10px"
                    paddingLeft={"15px"}
                    style={pathname == itemRouter.to ? styles.btnList : {}}

                    onClick={() => redirectLink(itemRouter.to)}
                    cursor={"pointer"}
                  >
                    <ListIcon as={itemRouter.icon} />
                    {t(`navbar:routeNames.${itemRouter.name}`)}
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  );
};
