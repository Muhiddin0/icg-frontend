import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import AOSProvider from "./AOSProvider";
import CursorTrailCanvas from "./ui/cursor-trail-canvas";
import ReactQueryProvider from "./ReactQueryProvider";
import { defaultSEOConfig } from "@/seo.config";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Lang } from "@/types/types";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  return defaultSEOConfig[lang];
}

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const messages = await getMessages();

  return (
    <html data-theme="light" lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100`}
      >
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <AOSProvider>
              <Header />
              <CursorTrailCanvas className="top-0 left-0 pointer-events-none fixed inset-0 z-50 h-full w-full" />
              {children}
              <Footer />
            </AOSProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
