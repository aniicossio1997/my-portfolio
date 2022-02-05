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
      objectFit={{ base: "cover", md: "fill" }}
      h={"100%"}
      minH={{ base: "80%", md: "165px" }}
      width={"100%"}
      roundedBottomLeft={"lg"}
      roundedTopLeft={"lg"}
      roundedRight={{ base: "lg", md: 0 }}
    />
  );
};

export default ImgCard;
