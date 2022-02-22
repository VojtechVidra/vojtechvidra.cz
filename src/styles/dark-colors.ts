import { neutral } from "./colors";
import { percentToHex } from "lib";
import { Colors } from "./types";

const green = {
  400: "#00976b",
  500: "#007a56",
  700: "#005238",
};

export const darkColors: Colors = {
  primary: {
    text: green[400],
    textHover: green[500],
  },
  neutral: {
    background: neutral[900],
    backgroundSubtle: neutral[675],
    backgroundSlightlyTransparent: neutral[900] + percentToHex(0.4),
    backgroundVerySlightlyTransparent: neutral[900] + percentToHex(0.9),
    text: neutral[0],
    textSubtle: neutral[250],
  },
};
