export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
        
        {/* 뱃지 */}
        <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/30 dark:border-indigo-800 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
          AI 중점학교 운영
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2">
          학부모 공개의 날
        </h1>
        
        {/* 서브 설명 */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          미래를 이끄는 AI 인재 양성, 목포항도여자중학교에서 우리 아이들의 혁신적인 학습 현장을 직접 만나보세요.
        </p>

        {/* 액션 버튼 */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-200 dark:shadow-none transition-transform hover:scale-105 active:scale-95">
            참여 신청하기
          </button>
          
          {/* 여기에 새로운 기능(예: 안내장 다운로드 등)을 위한 버튼을 추가하세요 */}
          {/* 
          <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-900 dark:text-gray-100 font-medium transition-transform hover:scale-105 active:scale-95">
            안내장 다운로드
          </button> 
          */}
        </div>
      </section>

      {/* 여기에 추가적인 섹션(예: 행사 일정, 갤러리 등) 컴포넌트를 추가하세요 */}
      {/* <ScheduleSection /> */}
      {/* <GallerySection /> */}
      
    </div>
  );
}
