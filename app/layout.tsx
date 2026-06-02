import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteMetadata } from "@/lib/seo";
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

export const metadata = buildSiteMetadata();

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
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
