import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { es } from "./es";
const options = {
  // order and from where user language should be detected
  order: ["navigator", "htmlTag", "path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};
const DEFAULT_LANGUAGE = "en";
//se ejecuta antes
if (!Boolean(localStorage.getItem("localI18n"))) {
  localStorage.setItem("localI18n", "en");
}
//se ejecuta antes
if (!Boolean(localStorage.getItem("chakra-ui-color-mode"))) {
  localStorage.setItem("chakra-ui-color-mode", "dark");
}
export const resources = {
  en: en,
  es: es,
} as const;

i18n.use(initReactI18next).init({
  detection: options,
  fallbackLng: "en",
  // disabled in production
  debug: false,
  lng: "en",
  ns: ["home"],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
