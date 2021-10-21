import "styled-components";

interface FontItem {
  size: number;
  lineHeight: number;
  weigth: string | number;
  mobileSize?: number;
  mobileLineHeight?: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      h1: FontItem;
      h2: FontItem;
      h3: FontItem;
      h4: FontItem;
      body: FontItem;
      footnote: FontItem;
      perex: FontItem;
      label: FontItem;
    };

    spacing: (coefficient?: number) => number;
    mobileBr: number;
  }
}
