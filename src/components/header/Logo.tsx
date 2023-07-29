import { Heading } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

interface Props {
  title?: string;
}
export default function Logo({ title = "" }: Props) {
  const navigate = useNavigate();

  const redirectHome=()=>{
    navigate('');

  }
  return (
    <Heading
      as="h1"
      size="lg"
      letterSpacing={"tighter"}
      position="absolute"
      fontSize={{ base: 26, md: 50 }}
      fontFamily={"initial"}
      cursor={"pointer"}
      onClick={redirectHome}
    >
      ❰AC❱
    </Heading>
  );
}
