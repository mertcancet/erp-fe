"use client";

import React from "react";

export function OrderKPIs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">trending_up</span>
          </div>
          <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">+12%</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Tamamlanma Oranı</p>
        <div className="flex items-end gap-2 text-2xl font-black text-navy-text dark:text-white">
          68.5%
          <span className="text-sm font-bold text-slate-400 mb-1">/ 100%</span>
        </div>
        <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
           <div className="h-full bg-blue-500 rounded-full" style={{ width: '68.5%' }}></div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <span className="text-xs font-bold text-slate-400">Hedef: 48s</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Tahmini Bitiş</p>
        <div className="text-2xl font-black text-navy-text dark:text-white">
          7s 24dk
        </div>
        <p className="mt-2 text-[10px] text-slate-400 font-medium">Kalan süre standart sapma içinde</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">electric_bolt</span>
          </div>
          <span className="text-xs font-bold text-green-500 px-2 py-0.5 rounded-full">Yüksek</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Verimlilik</p>
        <div className="text-2xl font-black text-navy-text dark:text-white">
          94.2%
        </div>
        <p className="mt-2 text-[10px] text-slate-400 font-medium tracking-wide">Önceki partiye göre %3 artış</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">precision_manufacturing</span>
          </div>
          <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">Kritik</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Kaynak Doluluğu</p>
        <div className="text-2xl font-black text-navy-text dark:text-white">
          88.0%
        </div>
        <p className="mt-2 text-[10px] text-slate-400 font-medium tracking-wide">CNC-04 üzerinde yoğunluk var</p>
      </div>
    </section>
  );
}
