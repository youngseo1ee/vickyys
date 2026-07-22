import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivoExpanded = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo-expanded-raw",
});

export const metadata: Metadata = {
  title: "YOUNGSEO | 이영서 포트폴리오",
  description: "제품 디자이너 이영서의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`antialiased snap-y snap-proximity ${archivoExpanded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
