import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FormContact from "../components/contactForm/FormContact";
import { IAnimationDiv } from "../ts/interfaces/IAnimation";
import ContainerCenter from "../components/common/ContainerCenter";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
    <Container>
    <Box
        as={motion.div}
        initial="hidden"
        animate={"visible"}
        variants={IAnimationDiv}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={{base:"90%",md:"500"}}
        padding={4}
      >
        <Heading
          as="h2"
          textAlign={"center"}
          alignSelf={"centers"}
          alignItems={"center"}
          marginBottom={5}
        >
          {t("title")}
        </Heading>
        <FormContact />
      </Box>
    </Container>

    </>
  );
};
export default Contact;
