import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";

const mPlusRounded = DotGothic16({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: "アバターカスタマイズアプリ",
  description: "かわいいアバターを自由にカスタマイズしよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${mPlusRounded.variable} h-full`}>
      <body className="min-h-full font-[family-name:var(--font-rounded)] antialiased">
        {children}
      </body>
    </html>
  );
}
