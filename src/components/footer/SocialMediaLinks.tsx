import { ButtonGroup, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { DataFooterLinks } from "../../data/DataFooter";

export const SocialMediaLinks = () => {
  const colorValue = useColorModeValue("gray.800", undefined);

  return (
    <ButtonGroup variant="solid" color={colorValue} alignSelf={"center"}>
      <IconButton
        as="a"
        alignSelf={"center"}
        href={DataFooterLinks.perfilLinkedin}
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
        target={"_blank"}
      />
      <IconButton
        as="a"
        href={DataFooterLinks.perfilGithub}
        aria-label="GitHub"
        icon={<FaGithub fontSize="20px" />}
        target={"_blank"}
      />
      <IconButton
        as="a"
        href={`mailto:anacossio7@gmail.com`}
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
        icon={<TiMail fontSize="30px" />}
      />
    </ButtonGroup>
  );
};
