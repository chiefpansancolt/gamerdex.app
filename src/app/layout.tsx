import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Chakra_Petch, Geist_Mono } from "next/font/google";
import { ThemeInit } from "@/.flowbite-react/init";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gamerdex.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GamerDex — Track Your Game Progress",
    template: "%s | GamerDex",
  },
  description:
    "GamerDex is a collection of game tracker companions that help you catalog, track, and complete your favorite games.",
  keywords: [
    "game tracker",
    "game progress",
    "gaming companion",
    "game catalog",
    "GamerDex",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GamerDex — Track Your Game Progress",
    description:
      "GamerDex is a collection of game tracker companions that help you catalog, track, and complete your favorite games.",
    url: siteUrl,
    siteName: "GamerDex",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GamerDex — Track Your Game Progress",
    description:
      "GamerDex is a collection of game tracker companions that help you catalog, track, and complete your favorite games.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${chakraPetch.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
