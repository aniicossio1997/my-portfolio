import { Stack } from "@chakra-ui/react";
import React from "react";

const ContainerCenter = ({ children }: any) => {
  return (
    <Stack
      justifyContent={"center"}
      minH={"100%"}
      direction={"column"}
      spacing="10"
      alignItems={"center"}
      marginTop={"5px"}
    >
      {children}
    </Stack>
  );
};

export default ContainerCenter;
