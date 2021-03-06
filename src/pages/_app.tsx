import { Menu } from "components/Menu";
import { NextWebVitalsMetric } from "next/dist/next-server/lib/utils";
import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styles/theme";

export default function MyApp({ Component, pageProps }) {
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
