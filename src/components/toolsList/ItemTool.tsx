import { Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ITool } from "../../ts/interfaces/ITool";

const ItemTool = ({ IconValue, name }: ITool) => {
  return (
    <Stack
      bg={"gray.200"}
      rounded={10}
      padding={5}
      alignItems={"center"}
      justifyContent={"center"}
      h={150}
      direction={"column"}
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
