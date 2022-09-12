import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import errorImg from "../assets/img/errorImg.svg";
export const NotFound = () => {
  const { t } = useTranslation("notFound");

  return (
    <>
      <Stack
        spacing="24px"
        height={"400px"}
        paddingX={10}
        minH={"100%"}
        justifyContent={"center"}
        paddingBottom={30}
        marginBottom={{ base: "10px", md: "90px" }}
        marginTop={{ base: 30, md: 50 }}
      >
        <Box
          w={{ base: "100%", md: "50vh" }}
          h={"100%"}
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
        >
          <Heading textAlign={"center"}>{t("description")}</Heading>
        </Box>
        <Box w={{ base: "100%", md: "50vh" }} h={"100%"}>
          <Image src={errorImg} alt="error 404" width={"100%"} />
        </Box>
      </Stack>
    </>
  );
};
export default NotFound;
