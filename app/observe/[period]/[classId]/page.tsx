"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ObserveFormPage({ params }: { params: { period: string, classId: string } }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const { error } = await supabase.from('observations').insert([{
        period: params.period,
        class_id: decodeURIComponent(params.classId),
        parent_name: formData.get('parentName'),
        student_name: formData.get('studentName'),
        feedback: formData.get('feedback'),
        created_at: new Date().toISOString()
      }]);

      if (error) {
        console.error('Error saving to Supabase:', error);
        alert('저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      alert('연결 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center pt-24 pb-32 px-4 min-h-screen">
        <div className="w-full max-w-md text-center space-y-6 animate-in zoom-in duration-500">
          <div className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">제출 완료!</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {params.period}교시 {decodeURIComponent(params.classId)}반 참관록이 성공적으로 제출되었습니다.
            <br/>귀중한 의견 감사드립니다.
          </p>
          <div className="pt-8">
            <Link href="/" className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-12 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
        
        {/* 상단 네비게이션 및 타이틀 */}
        <div className="space-y-4">
          <Link href={`/observe/${params.period}`} className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
            학급 선택으로 돌아가기
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {params.period}교시 참관록
            </h1>
            <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full font-bold">
              {decodeURIComponent(params.classId)}반
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            해당 학급의 수업을 참관하신 후 소감을 작성해주세요.
          </p>
        </div>

        {/* 폼 영역 */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm mt-8 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                학부모 성명 <span className="text-red-500">*</span>
              </label>
              <input type="text" id="parentName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="홍길동" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                학생 성명 <span className="text-red-500">*</span>
              </label>
              <input type="text" id="studentName" required className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="김철수" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              참관 소감 <span className="text-red-500">*</span>
            </label>
            <textarea id="feedback" required rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none" placeholder="수업 참관 후 느끼신 점을 자유롭게 작성해주세요."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-md transition-all hover:shadow-lg active:scale-[0.98] flex items-center justify-center ${
              isSubmitting ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                제출 중...
              </>
            ) : "참관록 제출하기"}
          </button>

        </form>
      </div>
    </div>
  );
}
