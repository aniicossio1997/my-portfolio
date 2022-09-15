import { Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
interface Props {
  to: string;
  name: string;
}
const ItemLink = ({ to, name }: Props) => {
  const { pathname } = useLocation();
  const color = useColorModeValue("pink.500", "pink.200");
  return (
    <Link key={to} to={to}>
      <Stack
        alignItems="center"
        color={pathname === to ? color : "inherit"}
        direction="row"
        spacing={5}
        letterSpacing="1.2px"
      >
        <Text fontWeight={"bold"} fontSize={{ base: 16, md: 20 }}>
          {name}
        </Text>
      </Stack>
    </Link>
  );
};

export default ItemLink;
