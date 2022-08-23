import { Box, Center, Container, Stack, VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/footer";
const index = ({ children }: any) => {
  return (
    <>
      <Stack h={"100%"} spacing={100}>
        <Box mb={"50px"}>
          <Header />
        </Box>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Container maxWidth={{ base: "100%", md: "95%" }}>
            <VStack
              minH={"100%"}
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center alignSelf={"center"}>{children}</Center>
            </VStack>
          </Container>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default index;
