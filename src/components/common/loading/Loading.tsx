import { Text } from "@chakra-ui/react";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./style.css";

interface IProps {
  title?: string;
  ifShowPoints?: Boolean;
}
const Loading = ({ title = "", ifShowPoints = false }: IProps) => {
  return (
    <>
      <div className="spiner-container">
        <div className="loading-container">
          <RotatingLines width="100" strokeColor="#000" />
          <div className="loader">
            {ifShowPoints && (
              <Text
                textTransform={"uppercase"}
                fontSize={"1em"}
                letterSpacing={"2px"}
                className={` loader-text `}
                fontWeight="bold"
              >
                {title}
              </Text>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
