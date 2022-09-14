import { ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BtnAnimation from "../common/BtnAnimation";

interface IProps {
  rest: any | ButtonProps;
}
const BtnItem = ({ ...rest }: any | ButtonProps) => {
  return (
    <BtnAnimation
      size="md"
      height="40px"
      width="35%"
      as={motion.a}
      whileHover={{ scale: 0.9 }}
      target="_blank"
      fontSize={{ base: "12px", md: "18px" }}
      boxShadow={`dark-lg`}
      p="6"
      {...rest}
    />
  );
};

export default BtnItem;
