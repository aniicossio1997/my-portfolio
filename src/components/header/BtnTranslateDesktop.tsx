import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import useTranslate from "../../hook/useTranslate";
import "./style.css";
const BtnTranslateDesktop = () => {
  const { handleChanged } = useTranslate();
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              height={"35px"}
              boxSizing="border-box"
              borderRadius={0}
              textTransform="uppercase"
              textAlign={"center"}
              bgColor={"blackAlpha.200"}
              fontSize={{ base: undefined, md: "1.2em" }}
              rounded={5}
              letterSpacing="1.2px"
            >
              {localStorage.getItem("localI18n") || ""}
            </MenuButton>

            <MenuList className={"btnTransladeDesktop"}>
              <MenuItem onClick={() => handleChanged("en")}>EN</MenuItem>
              <MenuItem onClick={() => handleChanged("es")}>ES</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default BtnTranslateDesktop;
