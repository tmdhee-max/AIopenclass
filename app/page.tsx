import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">

        {/* 뱃지 */}
        <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/30 dark:border-indigo-800 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
          목포항도여자중학교
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2 leading-tight">
          AI 중점학교 <br /> 학부모 공개의 날
        </h1>

        {/* 서브 설명 */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          미래를 이끄는 AI 인재 양성, <br /> 우리 아이들의 학습 현장을 직접 만나보세요.
        </p>

        {/* 액션 버튼 */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.foreducator.com/registry/sign/74ad4be8-e2ef-4587-bb69-e9dee7e593ae"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-200 dark:shadow-none transition-transform hover:scale-105 active:scale-95 text-center"
          >
            참여 신청하기
          </a>

          {/* 여기에 새로운 기능(예: 안내장 다운로드 등)을 위한 버튼을 추가하세요 */}
          {/* 
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-900 dark:text-gray-100 font-medium transition-transform hover:scale-105 active:scale-95">
            안내장 다운로드
          </button> 
          */}
        </div>
      </section>

      {/* 바로가기 배너 섹션 */}
      <section className="w-full max-w-5xl mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">

        {/* 등록하기 배너 */}
        <a href="https://www.foreducator.com/registry/sign/74ad4be8-e2ef-4587-bb69-e9dee7e593ae" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer block">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">등록하기</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">방문 등록이 필요합니다.</p>
          </div>
        </a>

        {/* 행사일정 배너 */}
        <Link href="/schedule" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">행사일정</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">행사의 세부 일정을 확인하세요.</p>
          </div>
        </Link>

        {/* 2교시 참관 배너 */}
        <Link href="/observe/2" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white dark:from-pink-900/20 dark:to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-pink-100 dark:bg-pink-900/50 rounded-full text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">2교시 수업</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">수업 참관록 작성</p>
          </div>
        </Link>

        {/* 3교시 참관 배너 */}
        <Link href="/observe/3" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
            </div>
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">3교시 수업</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">수업 참관록 작성</p>
          </div>
        </Link>

      </section>

    </div>
  );
}
