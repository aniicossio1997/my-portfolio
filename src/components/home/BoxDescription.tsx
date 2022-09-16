import {
  Box,
  Center,
  Container,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BtnAnimation from "../common/BtnAnimation";
import { ViewIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { IAnimationDiv } from "../../ts/interfaces/IAnimation";
import { useNavigate } from "react-router-dom";

const BoxDescription = () => {
  const { t } = useTranslation(["home"]);
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("projects");
  };
  return (
    <Container maxWidth={"70%"} boxSizing="border-box">
      <Stack spacing={4}>
        <Box
          as={motion.div}
          variants={IAnimationDiv}
          initial="hidden"
          animate={"visible"}
        >
          <Box
            textStyle={"p"}
            color={useColorModeValue("gray.600", "white")}
            boxSizing="border-box"
            textAlign={{ base: "center", md: undefined }}
          >
            {t("description")}
          </Box>
        </Box>

        <Center>
          <BtnAnimation
            onClick={handleClick}
            colorScheme={"pink"}
            size="xl"
            height={{ base: "28px", md: "40px", lg: "60px" }}
            width={{ base: "55%", md: "70%" }}
            variant="solid"
            paddingY="4"
            IconBtn={<Icon as={ViewIcon} boxSize={"25px"} />}
          >
            {t("btnTitle")}
          </BtnAnimation>
        </Center>
      </Stack>
    </Container>
  );
};

export default BoxDescription;
