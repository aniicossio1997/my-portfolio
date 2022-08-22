import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Projects } from "../../data/Projects";
import { IProject } from "../../ts/interfaces/IProject";
import ContainerCenter from "../common/ContainerCenter";
import Card from "./Card";

const ProjectList = () => {
  const { t, ready } = useTranslation(["projects"]);
  //esto es el JSON
  const projects: IProject[] = t("projects", { returnObjects: true });

  return (
    <ContainerCenter>
      {projects.map((data) => (
        <Card project={data} key={data.to} />
      ))}
    </ContainerCenter>
  );
};
export default ProjectList;
