import type { Metadata } from "next";
import "./globals.css";
import { siteContent, siteSettings } from "./content";

const defaultSeo = siteContent[siteSettings.defaultLocale].seo;

export const metadata: Metadata = {
  metadataBase: new URL(siteSettings.publicUrl),
  title: defaultSeo.title,
  description: defaultSeo.description,
  alternates: {
    canonical: "/",
    languages: { ja: "/?lang=ja", en: "/?lang=en", "zh-CN": "/?lang=zh" },
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "ja_JP",
    alternateLocale: ["en_US", "zh_CN"],
    title: defaultSeo.title,
    description: defaultSeo.description,
  },
  twitter: {
    card: "summary",
    title: defaultSeo.title,
    description: defaultSeo.description,
  },
  robots: {
    index: siteSettings.allowIndexing,
    follow: siteSettings.allowIndexing,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
