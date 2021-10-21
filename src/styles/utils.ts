import { Colors, ComponentProps } from "./types";
import { RecursiveKeyOf } from "types";
import { css, DefaultTheme } from "styled-components";

export const spacing =
  (coefficient = 1, offset = 0) =>
  ({ theme }: ComponentProps): string =>
    theme.spacing(coefficient) + theme.spacing(offset) + "px";

export const color = (colorKey: RecursiveKeyOf<Colors>) => {
  const cssVar = colorKey.split(".").reduce((acc, key) => acc + "-" + key, "-");
  return `var(${cssVar})`;
};

export const mobile =
  (styles: ReturnType<typeof css>) =>
  ({ theme }: ComponentProps) =>
    css`
      @media (max-width: ${theme.mobileBr}px) {
        ${styles}
      }
    `;

export const font =
  (size: keyof DefaultTheme["fonts"]) =>
  ({ theme }: ComponentProps) => {
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
