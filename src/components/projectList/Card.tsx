import {
  Box,
  Heading,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";
import BtnItem from "./BtnItem";
import ImgCard from "./ImgCard";
import { IProject } from "../../ts/interfaces/IProject";
import { useTranslation } from "react-i18next";
import { GoMarkGithub } from "react-icons/go";
import { motion, Variants } from "framer-motion";
import "./style.css";
interface Props {
  project: IProject;
}

const child2: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({ project }: Props) => {
  const { t } = useTranslation(["projects"]);
  const [isMinThan820] = useMediaQuery("(max-width: 820px)");
  //const btnTitle = t("btnTitleVisit");
  return (
    <Box as={motion.div} variants={child2} initial="hidden" animate={"visible"}>
      <Stack
        h={{ base: "100%", md: "315px" }}
        width={{ base: "280px",sm:'310px', md: "600px", lg: "810px" }}
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
          <Heading textStyle={"h1"} mb={4} fontSize={{base:"1.2rem", md:"1.5rem", lg:"1.8rem"}}>
            {project.title}
          </Heading>
          <Text textStyle={"p"} align={"justify"} className="text-responsive">
            {project.description}
          </Text>

          <Stack direction={"row"} w={"100%"} justifyContent={"space-around"}>
            <BtnItem
              colorScheme={"pink"}
              href={project.to}
              IconBtn={
                <ViewIcon
                  height={6}
                  width={6}
                  className={`${project.to === "#" ? "not-active" : " "}`}
                />
              }
            >
              {isMinThan820 ? (
                <Icon as={ViewIcon} boxSize={"20px"} />
              ) : (
                t("btnTitleVisit")
              )}
            </BtnItem>
            <BtnItem
              IconBtn={<Icon as={GoMarkGithub} boxSize={"20px"} />}
              href={project.repository}
              colorScheme="pink"
              variant={"outline"}
            >
              {isMinThan820 ? (
                <Icon as={GoMarkGithub} boxSize={"20px"} />
              ) : (
                t("btnTitleCode")
              )}
            </BtnItem>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
