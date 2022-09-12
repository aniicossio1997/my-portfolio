import { extendTheme, theme, Button } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./../index.css";
// 2. Add your color mode config
const config = {
  initialColorMode: localStorage.getItem("chakra-ui-color-mode") || "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const themeConfig = extendTheme({
  config,
  fonts: {
    heading: `'Ubuntu Mono', monospace`,
    body: `'Raleway', sans-serif`,
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
        height: "100%",
        fontFamily: `'Ubuntu Mono', monospace`,
      },
      "*::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
    },
    Heading: {
      //fontFamily: `'EB Garamond', "serif"`,
      fontFamily: `'Ubuntu Mono', monospace`,
    },
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-0.8%",
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
      fontSize: ["15px", "18px", "20px"],
      letterSpacing: "1%",
    },
  },
});

export default themeConfig;
