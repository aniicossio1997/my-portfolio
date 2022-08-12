import "react-i18next";
import { resources } from "../../src/i18n/config";
// import all namespaces (for the default language, only)
import home from "../../src/i18n/en/home.json";

// react-i18next versions lower than 11.11.0
declare module "react-i18next" {
  // and extend them!
  type DefaultResources = typeof resources["en"];
  interface Resources {
    home: typeof home;
  }
}
