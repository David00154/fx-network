import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  mono: `'Menlo', monospace`,
  monsterrat: `'Monsterrat', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config = {
  colors: {
    black: "#16161D",
    primary: {
      100: "#E5FCF1",
      200: "#27EF96",
      300: "#10DE82",
      400: "#0EBE6F",
      500: "#0CA25F",
      600: "#0A864F",
      700: "#086F42",
      800: "#075C37",
      900: "#064C2E",
    },
  },
  fonts,
  breakpoints,
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ ...config });

export default theme;
