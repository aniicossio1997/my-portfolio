import { Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { ITool } from "../../ts/interfaces/ITool";
const variantDiv: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const ItemTool = ({ IconValue, name }: ITool) => {
  const colorValue = useColorModeValue("gray.800", undefined);
  return (
    <Stack
      as={motion.div}
      initial="hidden"
      animate={"visible"}
      variants={variantDiv}
      bg={"gray.200"}
      rounded={10}
      padding={5}
      alignItems={"center"}
      justifyContent={"center"}
      h={150}
      direction={"column"}
      boxShadow="2xl"
    >
      <Icon
        as={IconValue}
        w={{ base: 12, md: 10 }}
        h={{ base: 12, md: 10 }}
        alignSelf={"center"}
        color={"gray.600"}
      />
      <Text color={"gray.600"}>{name}</Text>
    </Stack>
  );
};

export default ItemTool;
