import { Box, Heading } from "@chakra-ui/react";
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
export default Tools;
