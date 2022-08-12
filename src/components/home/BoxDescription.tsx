import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BtnAnimation from "../common/BtnAnimation";
import { dataHome } from "./dataHome";
const BoxDescription = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Container maxWidth={"80%"}>
      <Stack spacing={5}>
        <Box
          textStyle={"p"}
          fontWeight={"thin"}
          color={useColorModeValue("gray.600", "white")}
        >
          {t("description")}
        </Box>
        <Link to={dataHome.btnPath}>
          <BtnAnimation
            to="/projects"
            colorScheme={"pink"}
            size="xl"
            height={{ base: "28px", md: "48px" }}
            width="100%"
            variant="solid"
          >
            {t("btnTitle")}
          </BtnAnimation>
        </Link>
      </Stack>
    </Container>
  );
};

export default BoxDescription;
