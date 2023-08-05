import i18next from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const useTranslate = () => {
  const { i18n } = useTranslation();

  const [translate, setTranslate] = useState<"EN" | "ES">("EN");
  const handleChanged = (event: React.ChangeEvent<HTMLSelectElement> | any) => {
    if (!(typeof event === "string" || event instanceof String)) {
      localStorage.getItem("localI18n");
      const value = event.target.value;
      i18next.changeLanguage(value.toString());
      localStorage.setItem("localI18n", value.toString());
    } else {
      localStorage.getItem("localI18n");
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
