import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nordhaus.ru"),
  title: "NordHaus — Премиальное строительство загородных домов",
  description:
    "Строительство премиальных загородных резиденций под ключ в Ленинградской области и Карелии. Архитектура, достойная вашего участка.",
  openGraph: {
    title: "NordHaus — Премиальное строительство загородных домов",
    description:
      "Строительство премиальных загородных резиденций под ключ в Ленинградской области и Карелии.",
    images: ["/images/project-07.png"],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
