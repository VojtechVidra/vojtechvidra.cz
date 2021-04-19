import {
  css,
  DefaultTheme,
  ThemeProvider as SThemeProvider,
} from "styled-components";

const STheme: DefaultTheme = {
  palette: {
    primary: {
      primary: "#166448",
    },
    neutrals: {
      black: "#222222",
      grey: "#767676",
      white: "#ffffff",
    },
  },
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

interface ComponentProps {
  theme: DefaultTheme;
}

export const spacing = (coefficient = 1, offset = 0) => ({
  theme,
}: ComponentProps) => theme.spacing(coefficient) + offset;

export const color = <
  T extends keyof DefaultTheme["palette"],
  C extends keyof DefaultTheme["palette"][T]
>(
  type: T,
  color: C
) => ({ theme }: ComponentProps) => theme.palette[type][color];

export const mobile = (styles: ReturnType<typeof css>) => ({
  theme,
}: ComponentProps) => css`
  @media (max-width: ${theme.mobileBr}px) {
    ${styles}
  }
`;

export const font = (size: keyof DefaultTheme["fonts"]) => ({
  theme,
}: ComponentProps) => {
  const fontDefinition = theme.fonts[size];
  return css`
    font-size: ${fontDefinition.size}px;
    line-height: ${fontDefinition.lineHeight}px;
    font-weight: ${fontDefinition.weigth};
    margin: 0;

    ${mobile(css`
      font-size: ${fontDefinition.mobileSize
        ? `${fontDefinition.mobileSize}px`
        : undefined};
      line-height: ${fontDefinition.mobileLineHeight
        ? `${fontDefinition.mobileLineHeight}px`
        : undefined};
    `)}
  `;
};
