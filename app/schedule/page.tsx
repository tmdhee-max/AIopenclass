import Link from "next/link";

export default function SchedulePage() {
  const schedules = [
    {
      time: "09:30 ~ 09:50",
      title: "등록",
      location: "도담터 (후관 1층)",
      icon: "📋",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
    },
    {
      time: "2교시 (09:55 ~ 10:40)",
      title: "2교시 수업 참관",
      location: "각 교실",
      icon: "👩‍🏫",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
    },
    {
      time: "3교시 (10:50 ~ 11:35)",
      title: "3교시 수업 참관",
      location: "각 교실",
      icon: "📝",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400"
    },
    {
      time: "11:45 ~ 12:10",
      title: "참관록 작성 및 제출",
      location: "도담터 (후관 1층)",
      icon: "✉️",
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
    },
    {
      time: "점심시간 (12:10 ~ 12:30)",
      title: "급식 모니터링",
      location: "급식실",
      icon: "🍱",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400"
    }
  ];

  return (
    <div className="flex flex-col items-center pt-12 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      
      <div className="w-full max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
        
        {/* 상단 네비게이션 및 타이틀 */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
            메인으로 돌아가기
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            행사 일정
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            학부모 공개의 날 세부 일정 안내입니다.
          </p>
        </div>

        {/* 타임라인 형식의 일정표 */}
        <div className="relative mt-12 pl-4 sm:pl-0">
          {/* 세로선 */}
          <div className="absolute left-[27px] sm:left-[39px] top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

          <div className="space-y-12">
            {schedules.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                
                {/* 아이콘 */}
                <div className={`relative z-10 flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl border-4 border-white dark:border-black shadow-sm transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                
                {/* 내용 카드 */}
                <div className="flex-1 pt-2 sm:pt-4">
                  <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                    <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300">
                      {item.time}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>장소: {item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
