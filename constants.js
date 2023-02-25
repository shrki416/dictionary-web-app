import localFont from "@next/font/local";

const inconsolata = localFont({
  src: "./public/fonts/inconsolata/inconsolata-variableFont.ttf",
});

const inter = localFont({
  src: "./public/fonts/inter/inter-variableFont.ttf",
});

const lora = localFont({
  src: "./public/fonts/lora/lora-variableFont.ttf",
});

export const COLORS = {
  white: `hsl(0 0% 100%)`,
  gray: {
    100: `hsl(0 0% 98%)`,
    200: `hsl(0 0% 91%)`,
    300: `hsl(0 0% 51%)`,
    400: `hsl(0 0% 23%)`,
    500: `hsl(0 0% 18%)`,
    600: `hsl(0 0% 12%)`,
    700: `hsl(0 0% 2%)`,
  },
  primary: `hsl(274 82% 60%)`,
  secondary: `hsl(0 100% 66%)`,
};

export const WEIGHTS = {
  normal: 400,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  mono: inconsolata.style.fontFamily,
  serif: lora.style.fontFamily,
  sansSerif: inter.style.fontFamily,
};
