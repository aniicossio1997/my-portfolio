import { Stack } from "@chakra-ui/react";
import React from "react";

const ContainerCenter = ({ children }: any) => {
  return (
    <Stack
      justifyContent={"center"}
      minH={"100%"}
      paddingX={{ base: undefined, lg: 20 }}
      direction={"column"}
      spacing="10"
      alignItems={"center"}
      mb={{ base: 10, md: 5 }}
    >
      {children}
    </Stack>
  );
};

export default ContainerCenter;
