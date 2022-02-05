import { Box, Center, Grid, Image, useColorModeValue } from "@chakra-ui/react";

import home1 from "../assets/img/home1.svg";

import BoxDescription from "../components/home/BoxDescription";
import { dataHome } from "../components/home/dataHome";
import GridHome from "../components/home/GridHome";
export const Home = () => {
  return (
    <Center maxWidth={{ base: "100%", md: "70%" }}>
      <GridHome>
        <Box gridArea="title">
          <Box
            textStyle={"h2"}
            fontWeight={"semibold"}
            align={"center"}
            paddingBottom={10}
          >
            {dataHome.title}
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
