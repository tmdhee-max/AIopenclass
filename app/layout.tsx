import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI 중점학교 학부모 공개의 날",
  description: "학부모 공개의 날 웹 서비스",
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />

        {/* 메인 콘텐츠 영역 */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 하단 푸터 */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 py-8 transition-colors">
          <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} 목포항도여자중학교. All rights reserved.</p>
            {/* 여기에 푸터 링크나 추가 정보를 추가하세요 */}
          </div>
        </footer>
      </body>
    </html>
  );
}
