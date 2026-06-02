import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김진경 | Real Estate & Space Value Strategist",
  description:
    "건축과 도시의 맥락을 바탕으로 부동산과 공간의 잠재 가치를 분석하고 전략화하는 공간 가치전략가 포트폴리오",
  openGraph: {
    title: "김진경 | Space Value Strategist",
    description: "Real Estate & Space Value Strategist Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-theme="dark"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
