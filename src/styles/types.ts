import { DefaultTheme } from "styled-components";

export type Colors = {
  primary: {
    text: string;
    textHover: string;
  };
  neutral: {
    background: string;
    backgroundSlightlyTransparent: string;
    backgroundVerySlightlyTransparent: string;
    textSubtle: string;
    text: string;
  };
};

export interface ComponentProps {
  theme: DefaultTheme;
}
