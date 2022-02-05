import { ViewIcon } from "@chakra-ui/icons";
import { ButtonGroupProps } from "@chakra-ui/react";
import React from "react";
import BtnAnimation from "../common/BtnAnimation";

const BtnItem = ({ ...props }: any) => {
  return (
    <BtnAnimation
      size="md"
      height="40px"
      width="50%"
      as={"a"}
      target="_blank"
      {...props}
    />
  );
};

export default BtnItem;
