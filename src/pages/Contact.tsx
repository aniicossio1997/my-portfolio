import { Box, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FormContact from "../components/contactForm/FormContact";
import { IAnimationDiv } from "../ts/interfaces/IAnimation";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Box
        as={motion.div}
        initial="hidden"
        animate={"visible"}
        variants={IAnimationDiv}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        minWidth={{ base: 300, md: 600 }}
        paddingY={8}
        paddingX={6}
        marginTop={{ base: 4, md: 100 }}
        marginBottom={4}
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
    </>
  );
};
export default Contact;
