"use client";

import React from "react";

export function BOMFilters() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
        Durum: Hepsi <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
        Tedarik Süresi <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <div className="flex-1"></div>
      <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 text-navy-text dark:text-slate-200">
        <span className="material-symbols-outlined text-lg">download</span>
        Dışa Aktar
      </button>
    </div>
  );
}
