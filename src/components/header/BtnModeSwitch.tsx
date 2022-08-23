import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const BtnModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
    />
  );
};

export default BtnModeSwitch;
