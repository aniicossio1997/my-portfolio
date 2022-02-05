import { ViewIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
type JSXComponent = () => JSX.Element;
type IconButtonProps = React.ComponentProps<typeof Icon>;

// interface Props extends React.AreaHTMLAttributes<""> {
//   title: string;
//   IconBtn: IconType;
// }

const BtnAnimation = ({
  title = "see",
  IconBtn = <ViewIcon boxSize={"25px"} />,
  ...rest
}) => {
  const [elementContext, setElementContext] = useState<
    React.ReactElement | string | JSX.Element
  >(title);
  return (
    <Button
      {...rest}
      onMouseEnter={() => setElementContext(IconBtn)}
      onMouseLeave={() => setElementContext(title)}
    >
      {elementContext}
    </Button>
  );
};

export default BtnAnimation;
