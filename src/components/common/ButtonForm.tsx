import { Button } from "@chakra-ui/react";

export default function ButtonForm(props: any) {
  const { children } = props;

  // Pass the computed styles into the `__css` prop
  return <Button>{children}</Button>;
}
