import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import ContainerCenter from "../components/common/ContainerCenter";
import ToolsList from "../components/toolsList";
export const Tools = () => {
  return (
    <ContainerCenter>
      <Box>
        <Heading as={"h2"} alignContent={"center"}>
          Tools
        </Heading>
      </Box>
      <ToolsList />
    </ContainerCenter>
  );
};
