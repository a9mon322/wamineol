import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "와미널 - 와우정보터미널 | 한밤 확장팩 한국어 공략",
  description: "월드 오브 워크래프트 한밤(Midnight) 확장팩 한국어 정보 사이트. 직업별 쐐기·레이드·BIS·마법부여·도핑 정보와 자유 게시판.",
  keywords: ["와우", "WoW", "한밤", "Midnight", "공략", "쐐기", "레이드", "BIS", "와우헤드", "한국어"],
  openGraph: {
    title: "와미널 - 와우정보터미널",
    description: "한밤 확장팩 한국어 공략·정보 사이트",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script id="wowhead-tooltips" strategy="afterInteractive">
          {`window.whTooltips = { colorLinks: true, iconizeLinks: false, renameLinks: false };`}
        </Script>
        <Script
          src="https://wow.zamimg.com/js/tooltips.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
