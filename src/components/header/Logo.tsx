import { Text, TextProps } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

interface Props extends TextProps {
  title?: string;
}
export default function Logo({ title = "",...rest }: Props) {
  const navigate = useNavigate();

  const redirectHome=()=>{
    navigate('');
  }
  
  return (
    <Text
      as="h1"
      letterSpacing={"tighter"}
      position="absolute"
      fontFamily={"initial"}
      cursor={"pointer"}
      onClick={redirectHome}
      className="txt-title"
      {...rest}
    >
      AC
    </Text>
  );
}
