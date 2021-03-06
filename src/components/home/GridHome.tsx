import { Box, ChakraComponent, Grid } from "@chakra-ui/react";
import React from "react";
type JSXComponent = () => JSX.Element;

interface Props {
  children: typeof Box | typeof Grid;
}
const GridHome = ({ children }: any) => {
  return (
    <Grid
      rounded={"md"}
      maxWidth={"100%"}
      mb={{ base: "60px", md: "150px" }}
      h={"100%"}
      maxH={"100%"}
      gridTemplateColumns={{
        base: "100px 200px  ",
        md: "1fr 1fr",
      }}
      gridTemplateAreas={{
        base: `'title title'
                  'description description'
                  'image image'
                  `,
        xl: `'title title '
                 'description image'
                 `,
      }}
      gap={5}
    >
      {children}
    </Grid>
  );
};

export default GridHome;
