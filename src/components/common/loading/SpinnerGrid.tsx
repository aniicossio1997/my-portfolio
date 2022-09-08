import { Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";

const delay = 5;
export const SpinnerGrid = () => {
  return (
    <>
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
    </>
  );
};
