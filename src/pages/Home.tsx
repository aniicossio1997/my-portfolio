import { Box, Center, Heading, Image, useMediaQuery } from "@chakra-ui/react";
import home1 from "../assets/img/home1.svg";
import BoxDescription from "../components/home/BoxDescription";
import GridHome from "../components/home/GridHome";

import { useTranslation } from "react-i18next";
import TextAnimation from "../components/common/TextAnimation";
import ContainerCenter from "../components/common/ContainerCenter";
import { GridHomeResponsive } from "components/home/GridHomeResponsive";

export const Home = () => {
  const { t } = useTranslation(["home"]);
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
