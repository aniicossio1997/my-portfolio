import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import errorImg from "../assets/img/errorImg.svg";
export const NotFound = () => {
  return (
    <>
      <Stack
        spacing="24px"
        height={"400px"}
        paddingX={10}
        minH={"100%"}
        justifyContent={"center"}
        paddingBottom={20}
        marginBottom={{ base: "20px", md: "100px" }}
      >
        <Box
          w={{ base: "100%", md: "50vh" }}
          h={"100%"}
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
        >
          <Heading>Lo sentimos pagina no encontrada</Heading>
        </Box>
        <Box w={{ base: "100%", md: "50vh" }} h={"100%"}>
          <Image src={errorImg} alt="error 404" width={"100%"} />
        </Box>
      </Stack>
    </>
  );
};
export default NotFound;
