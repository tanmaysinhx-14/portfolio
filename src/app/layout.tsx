import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    default: "Tanmay - Digital Portfolio",
    template: "%s | Tanmay",
  },
  description:
    "Portfolio of Tanmay, a Computer Science student building AI systems and polished web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
