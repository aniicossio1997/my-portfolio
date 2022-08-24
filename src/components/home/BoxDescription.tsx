import {
  Box,
  Center,
  Container,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BtnAnimation from "../common/BtnAnimation";
import { dataHome } from "./dataHome";
import { ViewIcon } from "@chakra-ui/icons";
import { motion, Variants } from "framer-motion";
import TextAnimation from "../common/TextAnimation";

const delay = 0;
const duration = 0.1;
const BoxDescription = () => {
  const { t } = useTranslation(["home"]);
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };
  return (
    <Container maxWidth={"70%"} boxSizing="border-box">
      <Stack spacing={5}>
        <Box
          as={motion.div}
          variants={container}
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

        <Link to={dataHome.btnPath}>
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
        </Link>
      </Stack>
    </Container>
  );
};

export default BoxDescription;
