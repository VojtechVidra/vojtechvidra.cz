import { percentToHex } from "lib";
import { neutral } from "./colors";
import { Colors } from "./types";

const green = {
  400: "#00976b",
  500: "#007a56",
  700: "#005238",
};

export const lightColors: Colors = {
  primary: {
    text: green[500],
    textHover: green[400],
  },
  neutral: {
    background: neutral[0],
    backgroundSubtle: neutral[250],
    backgroundSlightlyTransparent: neutral[0] + percentToHex(0.7),
    backgroundVerySlightlyTransparent: neutral[0] + percentToHex(0.98),
    text: neutral[900],
    textSubtle: neutral[575],
  },
};
