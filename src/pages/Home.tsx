import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import GridHome from "../components/home/GridHome";

import { GridHomeResponsive } from "components/home/GridHomeResponsive";

export const Home = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 850px)");
  return (
    <Box marginTop={{ base: 4, md: 10 }} marginBottom={4}>
      <Center>
        {isLargerThan ? (
          <>
            <GridHome/>
          </>
        ) : (
          <>
          <GridHomeResponsive/>
          </>
        )}
      </Center>
    </Box>
  );
};
export default Home;
