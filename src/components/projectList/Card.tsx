import { Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RiCodeSSlashFill } from "react-icons/ri";

import { ViewIcon } from "@chakra-ui/icons";
import BtnItem from "./BtnItem";
import ImgCard from "./ImgCard";
import { IProject } from "../../ts/interfaces/IProject";
import { useTranslation } from "react-i18next";
import BtnAnimation from "../common/BtnAnimation";
import { useEffect } from "react";

interface Props {
  project: IProject;
}
const Card = ({ project }: Props) => {
  const { t } = useTranslation(["projects"]);
  const btnTitle = t("btnTitleVisit");
  console.log(btnTitle);

  return (
    <Stack
      h={{ base: "100%", md: "280px" }}
      width={{ base: "320px", md: "600px", lg: "800px" }}
      direction={{ base: "column-reverse", md: "row" }}
      boxShadow="dark-lg"
      borderRadius={10}
      paddingY={{ base: 4, md: 0 }}
    >
      <Stack
        w={{ base: "80%", md: "600px" }}
        alignItems={"center"}
        alignSelf={"center"}
        height={"100%"}
      >
        <ImgCard to={project.img} />
      </Stack>
      <Stack
        paddingY={{ base: 2, sm: 4 }}
        alignSelf={{ base: "center", md: "flex-start" }}
        alignItems={"center"}
        paddingX={{ base: undefined, md: 4 }}
        maxWidth={{ base: "70%", md: "60%" }}
      >
        <Heading textStyle={"h2"} mb={5}>
          {project.title}
        </Heading>
        <Text textStyle={"p"} align={"justify"}>
          {project.description}
        </Text>

        <Stack direction={"row"} w={"100%"} justifyContent={"space-around"}>
          <BtnAnimation
            size="md"
            height="40px"
            width="50%"
            as={"a"}
            target="_blank"
            colorScheme={"pink"}
            href={project.to}
            IconBtn={<ViewIcon height={5} width={5} />}
          >
            <h1>{t("btnTitleVisit")}</h1>
          </BtnAnimation>
          <BtnItem
            IconBtn={<Icon as={RiCodeSSlashFill} boxSize={"25px"} />}
            href={project.repository}
            colorScheme="pink"
            variant={"outline"}
          >
            {t("btnTitleCode")}
          </BtnItem>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
