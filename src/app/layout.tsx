import { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://vojtechvidra.cz"),
  alternates: {
    canonical: "./",
  },
  title: "Vojtech Vidra",
  description: "Front-end developer, building SaaS for designers on the side",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
