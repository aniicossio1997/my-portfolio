import { Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  to: string;
}
const ImgCard = ({ to }: Props) => {
  return (
    <Image
      position={"relative"}
      src={to}
      alt="super hero"
      objectFit={{ base: "cover", md: "cover" }}
      minH={"280px"}
      width={"100%"}
      roundedBottomLeft={"lg"}
      roundedTopLeft={"lg"}
      roundedRight={{ base: "lg", md: 0 }}
    />
  );
};

export default ImgCard;
