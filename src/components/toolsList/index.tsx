import { SimpleGrid } from "@chakra-ui/react";
import DataTools from "../../data/DataTools";
import ItemTool from "./ItemTool";

const index = () => {
  return (
    <SimpleGrid columns={{ base: 2, sm: 2, md: 3, xl: 3 }} spacing={5}>
      {DataTools.map((itemTool) => (
        <ItemTool
          key={itemTool.name}
          IconValue={itemTool.IconValue}
          name={itemTool.name}
        />
      ))}
    </SimpleGrid>
  );
};

export default index;
