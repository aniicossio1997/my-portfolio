import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import useTranslate from "../../hook/useTranslate";
import "./style.css";

interface IProps extends MenuButtonProps{

}

const BtnTranslateDesktop = ({...rest}:IProps) => {
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
              
              boxSizing="border-box"
              borderRadius={0}
              textTransform="uppercase"
              textAlign={"center"}
              bgColor={"blackAlpha.200"}
              fontSize={{ base: undefined, md: "1.2em" }}
              rounded={5}
              letterSpacing="1.2px"
              {...rest}
            >
              {localStorage.getItem("localI18n") || ""}
            </MenuButton>

            <MenuList
              className={"btnTransladeDesktop"}
              paddingTop={0}
              paddingBottom={0}
            >
              <MenuItem
                onClick={() => handleChanged("en")}
                className={isActive("en") ? `isActive` : ""}
                padding={2}
              >
                EN
              </MenuItem>
              <MenuItem
                padding={2}
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
