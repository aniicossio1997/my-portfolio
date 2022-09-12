import { Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";

interface IProps {
  show?: Boolean;
}
export const SpinnerGrid = ({ show = true }: IProps) => {
  return (
    <>
      {show && (
        <Center h="60vh">
          <Grid
            height="100"
            width="100"
            color="#ED64A6"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Center>
      )}
    </>
  );
};
