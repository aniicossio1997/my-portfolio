import React, { useEffect } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const BtnModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (
      localStorage.getItem("chakra-ui-color-mode") === "light" &&
      colorMode === "dark"
    ) {
      setTimeout(() => toggleColorMode(), 1500);
    } else if (
      localStorage.getItem("chakra-ui-color-mode") === "dark" &&
      colorMode === "light"
    ) {
      setTimeout(() => toggleColorMode(), 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      marginBottom={{ base: undefined, md: "10px" }}
    />
  );
};

export default BtnModeSwitch;
