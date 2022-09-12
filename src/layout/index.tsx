import { Box, Center, Container, Stack, VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
const index = ({ children }: any) => {
  return (
    <>
      <Stack h={"100%"}>
        <Box mb={"50px"}>
          <Header />
        </Box>
        <Stack alignItems={"center"} justifyContent={"center"} flex={1}>
          <VStack
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={5}
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
