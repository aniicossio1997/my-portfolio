import { ViewIcon } from "@chakra-ui/icons";
import { ButtonGroupProps } from "@chakra-ui/react";
import React from "react";
import { createContext } from "vm";
import BtnAnimation from "../common/BtnAnimation";

const BtnItem = ({ ...rest }: any) => {
  return (
    <BtnAnimation
      size="md"
      height="40px"
      width="50%"
      as={"a"}
      target="_blank"
      {...rest}
    />
  );
};

export default BtnItem;
