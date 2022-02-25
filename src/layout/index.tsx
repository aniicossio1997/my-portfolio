import { Box, Center, Container, Stack } from "@chakra-ui/react";
import Header from "../components/Header/Header";
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
            <Stack
              minH={"100%"}
              display={"flex"}
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Center alignSelf={"center"}>{children}</Center>
            </Stack>
            <Footer />
          </Container>
        </Stack>
      </Stack>
    </>
  );
};

export default index;
