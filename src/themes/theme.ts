import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./../index.css";
// 2. Add your color mode config
const config = {
  initialColorMode: localStorage.getItem("chakra-ui-color-mode") || "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const themeConfig = extendTheme({
  config,
  fonts: {
  },
  colors: {
    primary: theme.colors.messenger,
  },
  sizes: {
    container: {
      xl: "1700px",
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body, #root": {
        color: mode("blackAlpha.700", "white")(props),
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  components: {
    Textarea: {
      baseStyle: {
        resize: "none",
      },
    },
    Button: {
      baseStyle: {
        fontSize: ["12px", "18px", undefined],
      },
    },
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["40px", "60px", "72px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "1%",
      fontFamily: `'Ubuntu Mono', monospace`,
    },
    h2: {
      fontSize: ["24px", "32px", "38px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-0.8%",
    },
    h3: {
      fontSize: ["15px", "20px", "25px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    p: {
      fontSize: ["11.5px", "15px", "18px"],
      letterSpacing: "0.8%",
    },
  },

});

export default themeConfig;
