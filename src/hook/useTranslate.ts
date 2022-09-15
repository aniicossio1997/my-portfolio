import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const useTranslate = () => {
  const { i18n } = useTranslation();

  const [translate, setTranslate] = useState<"EN" | "ES">("EN");
  const language = useRef(i18n.language);
  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement> | any) => {
    if (!(typeof event === "string" || event instanceof String)) {
      const dataI18n = localStorage.getItem("localI18n");
      const value = event.target.value;
      i18next.changeLanguage(value.toString());
      localStorage.setItem("localI18n", value.toString());
    } else {
      console.log(event.toString());
      const dataI18n = localStorage.getItem("localI18n");
      i18next.changeLanguage(event as string);
      localStorage.setItem("localI18n", event.toString());
    }
  };
  useEffect(() => {
    let data = localStorage.getItem("localI18n") || "";
    i18n.changeLanguage(data);
  }, []);
  return { handleChanged, translate };
};

export default useTranslate;
