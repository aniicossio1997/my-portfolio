import { Box, Center, Container, Stack, VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
const index = ({ children }: any) => {
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
            marginTop={{ base: 70, md: 6 }}
          >
            <Center alignSelf={"center"}>{children}</Center>
          </VStack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default index;
