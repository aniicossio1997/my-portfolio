import { Box, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ContainerCenter from "../components/common/ContainerCenter";
import ToolsList from "../components/toolsList";
export const Tools = () => {
  const { t } = useTranslation("tools");

  return (
    <ContainerCenter>
      <Box>
        <Heading as={"h2"} alignContent={"center"}>
          {t("title")}
        </Heading>
      </Box>
      <ToolsList />
    </ContainerCenter>
  );
};
export default Tools;
