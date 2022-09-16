import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
interface Props {
  to: string;
  name: string;
  handleParentHideMenu: () => void;
}
const ItemLink = ({ to, name, handleParentHideMenu }: Props) => {
  const { pathname } = useLocation();
  const color = useColorModeValue("pink.500", "pink.200");
  const handleClick = () => {
    handleParentHideMenu();
  };
  return (
    <Link key={to} to={to}>
      <Stack
        alignItems="center"
        color={pathname === to ? color : "inherit"}
        direction="row"
        spacing={5}
        letterSpacing="1.2px"
        onClick={() => handleClick()}
      >
        <Text fontWeight={"bold"} fontSize={{ base: 16, md: 20 }}>
          {name}
        </Text>
      </Stack>
    </Link>
  );
};

export default ItemLink;
