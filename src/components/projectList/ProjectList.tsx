import { Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Projects } from "../../data/Projects";
import { IProject } from "../../ts/interfaces/IProject";
import ContainerCenter from "../common/ContainerCenter";
import Card from "./Card";

const ProjectList = () => {
  const { t, ready } = useTranslation(["projects"]);

  const heros = t("heros", { returnObjects: true });
  const [arrayHeros, setArrayHeros] = useState<IProject[]>([]);
  const obj = typeof heros === "string" ? JSON.parse(heros) : heros;
  const data = [];
  console.log("obj:", obj);

  try {
    const heronObj = JSON.parse(obj) as IProject[];
    setArrayHeros(heronObj as IProject[]);
    console.log("arrayHeros: ", arrayHeros);
  } catch (error) {
    console.log("");
  }
  useEffect(() => {
    try {
      setArrayHeros(JSON.parse(heros) as IProject[]);
      console.log(arrayHeros);
    } catch (error) {
      console.log("");
    }
  }, [arrayHeros, setArrayHeros]);

  return (
    <ContainerCenter>
      {console.log(obj)}

      <h1>{JSON.stringify(arrayHeros)}</h1>
      <h1>---------</h1>
      <h1>{JSON.stringify(Projects)}</h1>
      {Projects.map((data, index) => (
        <Card project={data} key={index} />
      ))}
    </ContainerCenter>
  );
};
export default ProjectList;
