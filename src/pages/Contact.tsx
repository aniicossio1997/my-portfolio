import { Box, Center, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import FormContact from "../components/contactForm/FormContact";

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        minWidth={{ base: 300, md: 600 }}
        p={6}
        m="10px auto"
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
