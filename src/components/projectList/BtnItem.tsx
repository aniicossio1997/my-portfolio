import { ViewIcon } from "@chakra-ui/icons";
import { ButtonGroupProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { createContext } from "vm";
import BtnAnimation from "../common/BtnAnimation";

const BtnItem = ({ ...rest }: any) => {
  return (
    <BtnAnimation
      size="md"
      height="50px"
      width="50%"
      as={motion.a}
      whileHover={{ scale: 0.9 }}
      target="_blank"
      {...rest}
    />
  );
};

export default BtnItem;
