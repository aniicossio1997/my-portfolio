import { Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import BtnAnimation from "../common/BtnAnimation";
import { DiAndroid, DiCode } from "react-icons/di";
import {
  RiCodeBoxLine,
  RiCodeFill,
  RiCodeSSlashFill,
  RiMagicLine,
} from "react-icons/ri";
import { ViewIcon } from "@chakra-ui/icons";
import BtnItem from "./BtnItem";
import ImgCard from "./ImgCard";
import { IProject } from "../../ts/interfaces/IProject";

interface Props {
  project: IProject;
}
const Card = ({ project }: Props) => {
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
          <BtnItem
            title="Visit Page"
            colorScheme={"pink"}
            href={project.to}
            IconBtn={<ViewIcon height={5} width={5} />}
          />
          <BtnItem
            title="Code"
            IconBtn={<Icon as={RiCodeSSlashFill} boxSize={"25px"} />}
            href={project.repository}
            colorScheme="pink"
            variant={"outline"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
