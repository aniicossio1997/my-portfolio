import { Box, ChakraComponent, Grid } from "@chakra-ui/react";
import React from "react";
type JSXComponent = () => JSX.Element;

interface Props {
  children: typeof Box | typeof Grid;
}
const GridHome = ({ children }: any) => {
  return (
    <Grid
      maxWidth={"100%"}
      mb={{ base: "30px", md: "50px" }}
      h={"100%"}
      maxH={"100%"}
      gridTemplateColumns={{
        base: "150px 250px  ",
        md: "1fr 1fr",
      }}
      gridTemplateAreas={{
        base: `'title title'
                  'description description'
                  'image image'
                  `,
        md: `'title title title '
                 'description image image'
                 `,
      }}
      gap={{ base: 2, md: 4 }}
    >
      {children}
    </Grid>
  );
};

export default GridHome;
