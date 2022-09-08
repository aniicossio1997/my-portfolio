import { extendTheme, theme, Button } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const themeConfig = extendTheme({
  config,
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
        color: mode("gray.600", "white")(props),
        height: "100%",
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
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["24px", "32px", "38px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h3: {
      fontSize: ["15px", "20px", "25px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    p: {
      fontSize: ["12px", "15px", "18px"],
    },
  },
});

export default themeConfig;
