import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuResponsive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <div>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          boxSizing="border-box"
          justifyContent={"space-between"}
        >
          <Box>
            <Logo fontSize={{ base: 15, sm: 30, md: 40 }} position={"relative"} />
          </Box>
          <ButtonGroup>
            <IconButton
              aria-label="btn-show"
              ref={btnRef}
              icon={<HamburgerIcon width={30} height={30} />}
              onClick={onOpen}
              cursor="pointer"
              variant='ghost'
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
          >
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo fontSize={{ base: 15, sm: 30 }} />
            </DrawerHeader>

            <DrawerBody paddingTop={10} boxSizing="border-box">
           
            <List display='flex' flexDirection='column' flexGrow={1} gap={1} spacing={3}>
              <ListItem>
                <ListIcon as={HamburgerIcon} color='green.500' />
                Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem>
                <ListIcon as={HamburgerIcon} color='green.500' />
                Assumenda
              </ListItem>
              <ListItem>
                <ListIcon as={HamburgerIcon} color='green.500' />
                Quidem
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={HamburgerIcon} color='green.500' />
                Quidem
              </ListItem>
            </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
