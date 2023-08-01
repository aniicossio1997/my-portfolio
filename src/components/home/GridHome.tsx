import { Box, Grid, Image } from "@chakra-ui/react";
import TextAnimation from "components/common/TextAnimation";
import BoxDescription from "./BoxDescription";
import home1 from "../../assets/img/home1.svg";
import { useTranslation } from "react-i18next";

const GridHome = () => {
  const { t } = useTranslation(["home"]);

  return (
    <Grid
      width={{ base: "80%", md: "960px" }}
      mb={{ base: "30px", md: "50px" }}
      gridTemplateRows={{ base: "40px 1fr", md: "100px 1fr" }}
      gridTemplateColumns={{ base: "290px 1fr 1fr", md: "500px 1fr 1fr" }}
      gridTemplateAreas={{
        base: `'title title'
                  'description description'
                  'image image'
                  `,
        md: `'title title title '
                 'description image image'
                 `,
      }}
      gap={{ base: 1, md: 2 }}
      marginTop={{ base: "-20px", lg: "-50px" }}
    >
      <Box gridArea="title">
        <Box
          textStyle={"h1"}
          fontWeight={"semibold"}
          textAlign={"center"}
          alignSelf={"centers"}
          alignItems={"center"}
          marginBottom={{ base: 0, md: 12 }}
          fontSize={{ base: "2.2rem", md: "2.4rem" }}
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
          w={"100%"}
          h={"300px"}
          objectFit="fill"
        />
      </Box>
    </Grid>
  );
};

export default GridHome;
