import { Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  to: string;
}
const ImgCard = ({ to }: Props) => {
  return (
    <Image
      src={to}
      alt="super hero"
      minH={"100%"}
      width={"100%"}
      objectFit={{ base: "cover", sm: "fill" }}
      roundedBottomLeft={"lg"}
      roundedTopLeft={"lg"}
      roundedRight={{ base: "lg", md: 0 }}
    />
  );
};

export default ImgCard;
