import { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Vojtech Vidra",
  description: "Front-end developer, building SaaS for designers on the side",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light-mode">
      <body className="bg-neutral-background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
