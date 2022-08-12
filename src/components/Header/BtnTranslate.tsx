import { Select } from "@chakra-ui/react";
import React from "react";
import useTranslate from "../../hook/useTranslate";

const BtnTranslate = () => {
  const { handleChanged } = useTranslate();

  return (
    <>
      <Select
        maxWidth={100}
        value={localStorage.getItem("localI18n") || ""}
        onChange={handleChanged}
        bgColor="whiteAlpha.600"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </Select>
    </>
  );
};

export default BtnTranslate;
