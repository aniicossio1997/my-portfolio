import { Box, Center, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./SocialMediaLinks";

const index = () => {
  return (
    <Box as="footer" role="contentinfo" paddingY={2}>
      <Center>
        <Stack
          direction={"column"}
          spacing="4"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction="row"
            alignItems={"center"}
            spacing="4"
            align="center"
            alignSelf={"center"}
            justifyItems={"center"}
            paddingLeft={3}
          >
            <SocialMediaLinks />
          </Stack>

          <Copyright />
        </Stack>
      </Center>
    </Box>
  );
};
export default index;
