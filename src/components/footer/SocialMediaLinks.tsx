import {
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiMail } from "react-icons/ti";

export const SocialMediaLinks = () => {
  const colorValue = useColorModeValue("gray.800", undefined);

  return (
    <ButtonGroup variant="solid" color={colorValue} alignSelf={"center"}>
      <IconButton
        as="a"
        alignSelf={"center"}
        href="#"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="#"
        aria-label="GitHub"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="mailto:no-reply@example.com"
        aria-label="Email"
        icon={<TiMail fontSize="30px" />}
      />
    </ButtonGroup>
  );
};
