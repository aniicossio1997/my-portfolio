import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import FormContact from "../components/contactForm/FormContact";
import { IAnimationDiv } from "../ts/interfaces/IAnimation";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
   <Flex minWidth='full' justifyContent={"center"}  gap='2'>
    <Box
          as={motion.div}
          initial="hidden"
          animate={"visible"}
          variants={IAnimationDiv}
          borderWidth="1px"
          rounded="lg"
          boxShadow="dark-lg"
          padding={6}
          className={`box-contact`}
        
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
    </Flex>

    </>
  );
};
export default Contact;
