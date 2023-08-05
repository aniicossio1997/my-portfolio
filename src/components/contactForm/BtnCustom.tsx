import { Button, ButtonProps, IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends ButtonProps {
  title: string,
}
export const BtnCustom = ({ title, ...rest }: IProps) => {
  return (
    <>
      <Button
        borderWidth={1}
        variant="solid"
        width={{ base: "60px", sm: "70px", md: "80px", lg: "100px" }}
        fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}
        rounded="lg"
        {...rest}
      >
        {title}
      </Button>
    </>
  );
};
interface IPropsIcon extends IconButtonProps {
  }
export const BtnIconCustom = ({...rest}:IPropsIcon) => {
  return (
    <>
      <IconButton
        borderWidth={1}
        variant="solid"
        width={{ base: "60px", sm: "70px", md: "80px", lg: "100px" }}
        fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}
        rounded="lg"
        {...rest}
      />
    </>
  );
};
