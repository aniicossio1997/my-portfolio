import { Heading } from "@chakra-ui/react";
interface Props {
  title?: string;
}
export default function Logo({ title = "" }: Props) {
  return (
    <Heading
      as="h1"
      size="lg"
      letterSpacing={"tighter"}
      position="absolute"
      fontSize={{ base: 26, md: 50 }}
      fontFamily={"initial"}
    >
      ❰AC❱
    </Heading>
  );
}
