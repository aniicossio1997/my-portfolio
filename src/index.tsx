import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import themeConfig from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import "./i18n/config";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={themeConfig}>
        <ColorModeScript
          initialColorMode={themeConfig.config.initialColorMode}
        />
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
