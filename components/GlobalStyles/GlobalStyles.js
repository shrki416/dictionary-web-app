import { COLORS, FAMILIES, WEIGHTS } from "../../constants";

import { IBM_PLEX_SANS } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const ibmSans = IBM_PLEX_SANS({
  weight: "700",
  subsets: ["latin"],
});

const GlobalStyles = createGlobalStyle`
:root {
  --white: ${COLORS.white};
  --gray-100: ${COLORS.gray[100]};
  --gray-200: ${COLORS.gray[200]};
  --gray-300: ${COLORS.gray[300]};
  --gray-400: ${COLORS.gray[400]};
  --gray-500: ${COLORS.gray[500]};
  --gray-600: ${COLORS.gray[600]};
  --gray-700: ${COLORS.gray[700]};
  
  --primary: ${COLORS.primary};
  --secondary: ${COLORS.secondary};

  --ff-mono: ${FAMILIES.mono};
  --ff-serif: ${FAMILIES.serif};
  --ff-sans-serif: ${FAMILIES.sansSerif};
  --ff-ibm-sans: ${ibmSans};

  -fw-normal: ${WEIGHTS.normal};
  -fw-bold: ${WEIGHTS.bold};
  
  --reach-dialog: 1;
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: var(--ff-ibm-sans);
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
