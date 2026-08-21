import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[BRAND NAME] — 異文化コミュニケーションスタジオ",
  description: "日本のローカルビジネスと中国語圏の人々をつなぐ、異文化コミュニケーションスタジオ。",
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
