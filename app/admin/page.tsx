"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { mockObservations, Observation } from "@/lib/mock-data";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState("all");

  // 데이터 필터링 로직
  const filteredData = useMemo(() => {
    return mockObservations.filter((item) => {
      const matchesSearch = 
        item.parentName.includes(searchTerm) || 
        item.studentName.includes(searchTerm) || 
        item.feedback.includes(searchTerm);
      const matchesPeriod = periodFilter === "all" || item.period === periodFilter;
      return matchesSearch && matchesPeriod;
    }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [searchTerm, periodFilter]);

  // 통계 계산
  const stats = {
    total: mockObservations.length,
    period2: mockObservations.filter(i => i.period === "2").length,
    period3: mockObservations.filter(i => i.period === "3").length,
  };

  const downloadCSV = () => {
    const headers = ["ID", "교시", "학급", "학부모", "학생", "소감", "날짜"];
    const csvContent = [
      headers.join(","),
      ...filteredData.map(item => [
        item.id,
        `${item.period}교시`,
        item.classId,
        item.parentName,
        item.studentName,
        `"${item.feedback.replace(/"/g, '""')}"`,
        new Date(item.createdAt).toLocaleString()
      ].join(","))
    ].join("\n");

    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `참관록_결과_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* 헤더 섹션 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
              메인으로
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              참관록 관리자 대시보드
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              학부모님들이 제출한 실시간 참관 피드백을 관리합니다.
            </p>
          </div>
          
          <button 
            onClick={downloadCSV}
            className="flex items-center justify-center px-4 py-2.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            CSV 다운로드
          </button>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">전체 제출</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stats.total}건</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2교시 제출</p>
            <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mt-1">{stats.period2}건</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">3교시 제출</p>
            <h3 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{stats.period3}건</h3>
          </div>
        </div>

        {/* 필터 및 검색 */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              type="text" 
              placeholder="학부모, 학생 성명 또는 내용 검색..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            {["all", "2", "3"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriodFilter(p)}
                className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  periodFilter === p 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                }`}
              >
                {p === "all" ? "전체" : `${p}교시`}
              </button>
            ))}
          </div>
        </div>

        {/* 데이터 테이블 */}
        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-100 dark:border-zinc-800">
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">교시/학급</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">학부모/학생</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">참관 소감</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">제출 일시</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          item.period === "2" ? "bg-pink-100 text-pink-700" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {item.period}P
                        </span>
                        <span className="font-bold text-gray-900 dark:text-white">{item.classId}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{item.parentName}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.studentName}의 보호자</div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 max-w-md">
                        {item.feedback}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.createdAt).toLocaleString('ko-KR', { 
                        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
                      })}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-gray-500 dark:text-gray-400">
                      데이터가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
