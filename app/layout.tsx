import { LanguageProvider } from "@/components/providers/LanguageProvider";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteContent } from "@/lib/content";
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
  title: `${siteContent.meta.name} | ${siteContent.meta.position}`,
  description: siteContent.hero.supportingEn,
  openGraph: {
    title: `${siteContent.meta.name} | ${siteContent.meta.oneLineEn}`,
    description: siteContent.hero.supportingEn,
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
      <body className="antialiased bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
