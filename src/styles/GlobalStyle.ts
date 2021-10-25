import { createGlobalStyle } from "styled-components";
import { lightColors } from "./light-colors";
import { createCssVars } from "./createCssVars";
import { color } from "./utils";
import { darkColors } from "./dark-colors";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${color("neutral.background")};
  transition: .12s;
}

a {
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
}

* {
  box-sizing: border-box;
}

.light-mode {
  ${createCssVars(lightColors)}
}
.dark-mode {
  ${createCssVars(darkColors)}
}
`;
