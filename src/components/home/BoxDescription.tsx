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
import { motion, Variants } from "framer-motion";
import { IAnimationDiv } from "../../ts/interfaces/IAnimation";

const delay = 0;
const duration = 0.1;
const BoxDescription = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Container maxWidth={"70%"} boxSizing="border-box">
      <Stack spacing={5}>
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
          >
            {t("description")}
          </Box>
        </Box>

        <Center>
          <BtnAnimation
            to="/projects"
            colorScheme={"pink"}
            size="xl"
            height={{ base: "28px", md: "50px" }}
            width="50%"
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
