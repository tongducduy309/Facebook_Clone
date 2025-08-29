import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import { Chat } from "@/libs/fb_clone/components/Chat/component";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: "Facebook Clone",
};
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning style={{position:'relative'}}>
        <NextIntlClientProvider>{children} <Chat></Chat></NextIntlClientProvider>
        
      </body>
    </html>
  );
}