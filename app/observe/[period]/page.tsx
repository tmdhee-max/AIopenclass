import Link from "next/link";
import { notFound } from "next/navigation";
import { scheduleData } from "@/lib/scheduleData";

export default function ObservePeriodPage({ params }: { params: { period: string } }) {
  // 2교시, 3교시만 허용
  if (params.period !== "2" && params.period !== "3") {
    notFound();
  }

  const classes = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "3-3"];
  const currentSchedule = scheduleData[params.period];

  return (
    <div className="flex flex-col items-center pt-12 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
        
        {/* 상단 네비게이션 및 타이틀 */}
        <div className="space-y-4 text-center">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
            메인으로 돌아가기
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {params.period}교시 참관 학급 선택
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            학급을 선택하여 참관록을 작성해주세요.
          </p>
        </div>

        {/* 학급 버튼 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {classes.map((cls) => {
            const info = currentSchedule[cls];
            return (
              <Link 
                key={cls} 
                href={`/observe/${params.period}/${cls}`}
                className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cls}</span>
                
                {/* 과목 및 장소 정보 표시 */}
                <div className="flex flex-col items-center space-y-1 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded">
                    {info.subject}
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {info.location}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
