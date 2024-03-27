import { Metadata } from "next";
import config from "next/config";
import { BIZ_UDPGothic, Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./styles/globals.scss";

const inter = Inter({
  weight: ["400", "600"],
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

const futura = localFont({
  src: [
    {
      path: "../../public/font/futura/Bold/Futura-Bol.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/futura/Medium/Futura-Med.woff",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: {
    default: `${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    template: `%s | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
  },
  description: `${process.env.SITE_DESCRIPTION}`,
  openGraph: {
    images: "/images/mobile/common/OGP.jpg",
    title: `${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    description: `${process.env.SITE_DESCRIPTION}`,
    url: "https://submontane.jp",
    siteName: `${process.env.SITE_TITLE}`,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    description: `${process.env.SITE_DESCRIPTION}`,
    images: "/images/mobile/common/OGP.jpg",
  },
  verification: {},
  alternates: {
    canonical: "https://submontane.jp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${biz.variable} ${futura.variable}`}
    >
      <head>
        <Script src="/scripts/typekit.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
