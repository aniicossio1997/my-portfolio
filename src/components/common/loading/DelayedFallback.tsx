//DelayedFallback.js
import React, { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
  delay?: number;
}
export const DelayedFallback = ({ children, delay = 500 }: IProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <>{show && children}</>;
};
