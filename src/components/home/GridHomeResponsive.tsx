import { Box, Container, Image } from "@chakra-ui/react";
import TextAnimation from "components/common/TextAnimation";
import React from "react";
import { useTranslation } from "react-i18next";
import BoxDescription from "./BoxDescription";
import home1 from "../../assets/img/home1.svg";

export const GridHomeResponsive = () => {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <Container mb={10}>
        <Box
          textStyle={"h1"}
          fontWeight={"semibold"}
          textAlign={"center"}
          alignSelf={"centers"}
          alignItems={"center"}
          fontSize={{ base: "1.5rem", md: "1.8rem" }}
          marginBottom={{ base: 1, md: 12 }}
        >
          <TextAnimation text={t("title")} />
        </Box>
        <BoxDescription />
        <Image
          mt={5}
          src={home1}
          alt="Image portafolio"
          w={"100%"}
          h={{ base: "250px", sm:"280px",md: "300px" }}
          objectFit="fill"
        />
      </Container>
    </>
  );
};
