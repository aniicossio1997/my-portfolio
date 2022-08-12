import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const useTranslate = () => {
  const { i18n } = useTranslation();

  const [translate, setTranslate] = useState<"EN" | "ES">("ES");
  const language = useRef(i18n.language);
  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    const dataI18n = localStorage.getItem("localI18n");
    i18next.changeLanguage(value);
    localStorage.setItem("localI18n", value);
  };
  useEffect(() => {
    let data = localStorage.getItem("localI18n") || "";
    i18n.changeLanguage(data);
  }, []);
  return { handleChanged, translate };
};

export default useTranslate;
