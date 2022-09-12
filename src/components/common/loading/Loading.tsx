import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./style.css";

interface IProps {
  title?: string;
}
const Loading = ({ title = "" }: IProps) => {
  return (
    <>
      <div className="spiner-container">
        <div className="loading-container">
          <RotatingLines width="100" strokeColor="#000" />
          <div className="loader">
            <div className="loader-text">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
