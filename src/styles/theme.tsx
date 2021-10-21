import {
  DefaultTheme,
  ThemeProvider as SThemeProvider,
} from "styled-components";

const STheme: DefaultTheme = {
  fonts: {
    h1: {
      size: 52,
      lineHeight: 56,
      weigth: 600,
    },
    h2: {
      size: 36,
      lineHeight: 40,
      weigth: 600,
    },
    h3: {
      size: 28,
      lineHeight: 32,
      weigth: 600,
    },
    h4: {
      size: 20,
      lineHeight: 24,
      weigth: 600,
    },
    body: {
      size: 16,
      lineHeight: 20,
      weigth: 400,
    },
    footnote: {
      size: 12,
      lineHeight: 16,
      weigth: 400,
    },
    perex: {
      size: 18,
      lineHeight: 24,
      weigth: 500,
    },
    label: {
      size: 16,
      lineHeight: 20,
      weigth: 600,
    },
  },
  spacing: (coefficient = 1) => 8 * coefficient,
  mobileBr: 768,
};

export const ThemeProvider = (props: any) => (
  <SThemeProvider theme={STheme} {...props} />
);
