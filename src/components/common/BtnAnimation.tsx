import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import { IBtnAnimationContextProps } from "../../ts/interfaces/IBtn";

export const BtnAnimationContext = createContext(
  {} as IBtnAnimationContextProps
);

interface IBtnAnimate extends ButtonProps {
  title?: string;
  children?: any;
  IconBtn?: JSX.Element | string;
  [x: string]: any;
}
const BtnAnimation = ({
  title,
  children,
  IconBtn = "see",
  btnAnimation,
  ...rest
}: IBtnAnimate) => {
  const [elementContext, setElementContext] = useState<any>(title);
  return (
    <Button
      as={motion.a}
      whileHover={{ scale: 0.8 }}
      onMouseEnter={() => setElementContext(IconBtn)}
      onMouseLeave={() => setElementContext(title)}
      roundedRight={9999}
      roundedLeft={9999}
      {...rest}
    >
      {elementContext ? elementContext : children}
    </Button>
  );
};

export default BtnAnimation;
