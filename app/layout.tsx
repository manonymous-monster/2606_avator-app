import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["400", "700", "800"],
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
