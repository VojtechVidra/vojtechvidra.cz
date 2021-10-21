import { Menu } from "components/Menu";
import type { NextWebVitalsMetric } from "next/app";
import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styles/theme";
import useDarkMode from "use-dark-mode";

export default function MyApp({ Component, pageProps }) {
  useDarkMode();

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

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  if (process.env.NODE_ENV !== "production") return;

  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}
