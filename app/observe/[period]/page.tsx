import Link from "next/link";
import { notFound } from "next/navigation";

export default function ObservePeriodPage({ params }: { params: { period: string } }) {
  // 2교시, 3교시만 허용
  if (params.period !== "2" && params.period !== "3") {
    notFound();
  }

  const classes = ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2", "3-3"];

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
            참관하실 학급을 선택해주세요.
          </p>
        </div>

        {/* 학급 버튼 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {classes.map((cls) => (
            <Link 
              key={cls} 
              href={`/observe/${params.period}/${cls}`}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">{cls}반</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
