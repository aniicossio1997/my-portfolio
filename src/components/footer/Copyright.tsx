import { Box, Stack, Text, TextProps } from "@chakra-ui/react";
import { DataCopyright } from "../../data/DataFooter";

export const Copyright = (props: TextProps) => (
  <>
    <Stack direction={"column"} spacing={2} justifyContent={"center"}>
      <Box>
        <Text fontSize="sm" {...props} align={"center"}>
          {DataCopyright.by} {DataCopyright.code}
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm" {...props} align={"center"}>
          {DataCopyright.copy}
        </Text>
      </Box>
    </Stack>
  </>
);
