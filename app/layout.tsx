import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/components/providers/Providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteMetadata } from "@/lib/seo";
import { Inter, Oswald, Playfair_Display } from "next/font/google";import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = buildSiteMetadata();

const themeInitScript = `(function(){try{var t=sessionStorage.getItem("snu-port-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}else{document.documentElement.dataset.theme="light"}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="preload" href="/images/hero-city.jpg" as="image" fetchPriority="high" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased bg-background text-foreground">
        <JsonLd />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
