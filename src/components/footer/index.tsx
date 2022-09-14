import { Box, Center, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { Copyright } from "./Copyright";
import { SocialMediaLinks } from "./SocialMediaLinks";

const index = () => {
  return (
    <Stack>
      <Box as="footer" role="contentinfo" paddingBottom={2}>
        <Center>
          <Stack
            direction={"column"}
            spacing="3"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              spacing="3"
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
    </Stack>
  );
};
export default index;
