import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600", "700"], display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sample-coffeeshop.vercel.app"),
  title: { default: "SAMPLE CAFÉ — Slow Mornings. Bold Coffee.", template: "%s | SAMPLE CAFÉ" },
  description: "A fictional premium specialty coffee shop in Quezon City, created as a portfolio demonstration by NinjaTech Guys.",
  openGraph: { title: "SAMPLE CAFÉ", description: "Slow Mornings. Bold Coffee.", type: "website", locale: "en_PH", siteName: "SAMPLE CAFÉ" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('sample-cafe-theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        <ThemeProvider><Header />{children}<Footer /><BackToTop /></ThemeProvider>
      </body>
    </html>
  );
}
