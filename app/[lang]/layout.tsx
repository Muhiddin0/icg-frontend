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

export const metadata: Metadata = defaultSEOConfig;

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html data-theme="light" lang={locale}>
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
