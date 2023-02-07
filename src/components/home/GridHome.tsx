import { Grid } from "@chakra-ui/react";

const GridHome = ({ children }: any) => {
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
      marginTop={{ base: '-20px', lg: "-50px" }}
    >
      {children}
    </Grid>
  );
};

export default GridHome;
