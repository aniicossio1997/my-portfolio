import { Box, Button, useStyleConfig } from "@chakra-ui/react";

export default function ButtonForm(props: any) {
  const { variant, children, ...rest } = props;

  // Pass the computed styles into the `__css` prop
  return <Button>{children}</Button>;
}
