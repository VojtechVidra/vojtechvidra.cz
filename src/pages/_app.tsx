import { Menu } from "components/Menu";
import { useDarkMode } from "hooks";
import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
  useDarkMode();

  return (
    <ThemeProvider>
      <Menu />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
