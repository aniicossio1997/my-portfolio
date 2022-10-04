import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import useTranslate from "../../hook/useTranslate";
import "./style.css";
const BtnTranslateDesktop = () => {
  const { handleChanged } = useTranslate();
  const isActive = (title: string) => {
    return Boolean(localStorage.getItem("localI18n") === title);
  };
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
              <MenuItem
                onClick={() => handleChanged("en")}
                className={isActive("en") ? `isActive` : ""}
              >
                EN
              </MenuItem>
              <MenuItem
                onClick={() => handleChanged("es")}
                className={isActive("es") ? `isActive` : ""}
              >
                ES
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
};

export default BtnTranslateDesktop;
