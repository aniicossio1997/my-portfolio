import { Box, Center, Stack, Text, TextProps } from "@chakra-ui/react";
import * as React from "react";
import { dataFooter } from "./dataFooter";

export const Copyright = (props: TextProps) => (
  <>
    <Stack direction={"column"} spacing={3} justifyContent={"center"}>
      <Box>
        <Text fontSize="sm" {...props} align={"center"}>
          {dataFooter.by} {dataFooter.code}
        </Text>
      </Box>
      <Box>
        <Text as="h3" fontSize="sm" {...props} align={"center"}>
          {dataFooter.copy}
        </Text>
      </Box>
    </Stack>
  </>
);
