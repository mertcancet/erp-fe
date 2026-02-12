"use client";

import React from "react";
import Link from "next/link";

export function OrderHeader() {
  return (
    <header className="min-h-[5rem] py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 sticky top-0 z-10 pl-16 md:pl-8">
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 mb-1">
          <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <Link href="/dashboard/production-orders" className="hover:text-primary transition-colors whitespace-nowrap">Üretim Emirleri</Link>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-200 font-medium whitespace-nowrap">#ORD-2024-001</span>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <h1 className="text-lg md:text-xl font-bold text-navy-text dark:text-white">
            Endüstriyel Motor - V2
          </h1>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50 flex items-center gap-1.5 whitespace-nowrap">
            <span className="size-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Devam Ediyor
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap">
          <span className="material-symbols-outlined text-lg">edit</span>
          Düzenle
        </button>
        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
          <span className="material-symbols-outlined text-lg">play_circle</span>
          Hızlandır
        </button>
      </div>
    </header>
  );
}
