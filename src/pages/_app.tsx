import { Menu } from "components/Menu";
import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Menu />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
