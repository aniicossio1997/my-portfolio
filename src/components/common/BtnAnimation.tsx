import { Button, Icon, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { createContext, useState } from "react";
import { IBtnAnimationContextProps } from "../../ts/interfaces/IBtn";
type JSXComponent = () => JSX.Element;
type IconButtonProps = React.ComponentProps<typeof Icon>;

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
      {...rest}
    >
      {elementContext ? elementContext : children}
    </Button>
  );
};

export default BtnAnimation;
