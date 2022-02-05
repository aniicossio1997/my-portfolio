import { Stack } from "@chakra-ui/react";
import { Projects } from "../../data/Projects";
import ContainerCenter from "../common/ContainerCenter";
import Card from "./Card";

const index = () => {
  return (
    <ContainerCenter>
      {Projects.map((data, index) => (
        <Card project={data} key={index} />
      ))}
    </ContainerCenter>
  );
};
export default index;
