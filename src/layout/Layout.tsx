import { Box, Center, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
const Layout = ({ children }: any) => {
  const [isHeightLargerThan800] = useMediaQuery("(max-height: 800px)");
  console.log(isHeightLargerThan800);
  return (
    <>
      <Stack minHeight={"100%"} display="flex" flexDirection={"column"}>
        <Box mb={"50px"}>
          <Header />
        </Box>
        <Stack alignItems={"center"} justifyContent={"center"} flex={1}>
          <VStack
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={{
              base: `${isHeightLargerThan800 ? "60px" : -10}`,
              md: `${isHeightLargerThan800 ? 60 : -10}`,
            }}
            minHeight={` ${isHeightLargerThan800 ? "80vh" : undefined}`}
          >
            <Center alignSelf={"center"}>{children}</Center>
          </VStack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default Layout;
