import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI 중점학교 학부모 공개의 날",
  description: "학부모 공개의 날 웹 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 상단 헤더 */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* 로고 영역 */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                항도
              </div>
              <span className="font-semibold text-lg tracking-tight">목포항도여자중학교</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {/* 여기에 새로운 네비게이션 링크를 추가하세요 */}
              <a href="#" className="hover:text-indigo-500 transition-colors">홈</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">학교소개</a>
              <a href="#" className="hover:text-indigo-500 transition-colors">게시판</a>
            </nav>

            <button className="md:hidden p-2">
              {/* 모바일 햄버거 메뉴 아이콘 (추후 구현) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
          </div>
        </header>

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
