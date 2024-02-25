import { Metadata } from "next";
import { BIZ_UDPGothic, Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const biz = BIZ_UDPGothic({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-biz",
});

export const metadata: Metadata = {
  title: {
    default: `${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    template: `%s | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
  },
  description: `${process.env.SITE_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${biz.variable}`}>
      <body>{children}</body>
    </html>
  );
}
