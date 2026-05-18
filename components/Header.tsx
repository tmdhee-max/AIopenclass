"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 및 서비스 명 */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              항도
            </div>
            <span className="font-semibold text-lg tracking-tight truncate max-w-[180px] sm:max-w-none">
              목포항도여자중학교
            </span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-indigo-500 transition-colors">홈</Link>
            <Link
              href="https://mokpohangdo.ms.jne.kr/mokpohangdo_ms/main.do?sysId=mokpohangdo_ms"
              className="hover:text-indigo-500 transition-colors"
            >
              학교홈페이지
            </Link>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 패널 */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white dark:bg-zinc-950 border-b border-gray-100 dark:border-zinc-800 shadow-xl">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="https://mokpohangdo.ms.jne.kr/mokpohangdo_ms/main.do?sysId=mokpohangdo_ms"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              학교홈페이지
            </Link>
            <div className="pt-2 pb-1 px-4 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              빠른 메뉴
            </div>
            <Link
              href="/schedule"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              행사일정
            </Link>
            <Link
              href="/observe/2"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              2교시 수업
            </Link>
            <Link
              href="/observe/3"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              3교시 수업
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
