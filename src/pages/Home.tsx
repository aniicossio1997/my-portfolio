import { Box, Center, Image } from "@chakra-ui/react";
import home1 from "../assets/img/home1.svg";
import BoxDescription from "../components/home/BoxDescription";
import GridHome from "../components/home/GridHome";

import { useTranslation } from "react-i18next";
import TextAnimation from "../components/common/TextAnimation";

export const Home = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Center
      maxWidth={{ base: "100%", md: "70%" }}
      marginTop={{ base: 4, md: 20 }}
      marginBottom={4}
    >
      <GridHome>
        <Box gridArea="title">
          <Box
            textStyle={"h2"}
            fontWeight={"semibold"}
            textAlign={"center"}
            alignSelf={"centers"}
            alignItems={"center"}
            marginBottom={{ base: 2, md: 12 }}
          >
            <TextAnimation text={t("title")} />
          </Box>
        </Box>
        <Box gridArea="description">
          <BoxDescription />
        </Box>
        <Box gridArea="image" mt={{ base: 20, md: 5, xl: 10 }}>
          <Image
            mt={-20}
            src={home1}
            alt="Dan Abramov"
            w={"90%"}
            h={"280px"}
            objectFit="fill"
          />
        </Box>
      </GridHome>
    </Center>
  );
};
export default Home;
