"use client";

import React from "react";

export function OrderGanttChart() {
  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined">timeline</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-text dark:text-white tracking-tight">Üretim Akışı ve Zaman Çizelgesi</h3>
            <p className="text-sm text-slate-500 font-medium">Gantt görünümü ve operasyonel sıralama</p>
          </div>
        </div>
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
          <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">Gülük</button>
          <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 text-primary rounded-md shadow-sm transition-all">Saatlik</button>
          <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">Dakikalık</button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="relative border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 p-4">
          <div className="grid grid-cols-12 gap-1 mb-2">
            {Array.from({length: 12}).map((_, i) => (
              <div key={i} className="text-[10px] text-slate-400 font-bold text-center">0{8+i}:00</div>
            ))}
          </div>
          <div className="space-y-3 relative">
            {/* Current Time Indicator */}
            <div className="absolute top-0 bottom-0 left-[62.5%] w-px bg-red-500 z-10">
               <div className="absolute -top-1 -left-1 size-2 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
            </div>

            <div className="h-10 bg-green-100 dark:bg-green-900/20 border-l-4 border-l-green-500 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-green-200 transition-colors cursor-pointer" style={{ width: '25%' }}>
               <span className="text-[11px] font-bold text-green-700 dark:text-green-400 whitespace-nowrap">Döküm Hazırlık</span>
               <span className="text-[10px] text-green-600 dark:text-green-500 font-medium">Bitti</span>
            </div>

            <div className="h-10 bg-blue-100 dark:bg-blue-900/20 border-l-4 border-l-blue-500 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-blue-200 transition-colors cursor-pointer ml-[25%]" style={{ width: '37.5%' }}>
               <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">CNC İşleme</span>
               <span className="text-[10px] text-blue-600 dark:text-blue-500 font-medium">Devam Ediyor</span>
            </div>

            <div className="h-10 bg-slate-200 dark:bg-slate-800 border-l-4 border-l-slate-400 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-slate-300 transition-colors cursor-pointer ml-[62.5%]" style={{ width: '25%' }}>
               <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">Statik Dengeleme</span>
               <span className="text-[10px] text-slate-500 font-medium">Bekliyor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
