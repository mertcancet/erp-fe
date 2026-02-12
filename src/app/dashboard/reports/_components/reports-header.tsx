"use client";

import React from "react";

export function ReportsHeader() {
  return (
    <header className="min-h-[5rem] py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 pl-16 md:pl-8">
      <div className="w-full md:w-auto">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-navy-text">
          Raporlar ve Analitik Paneli
        </h2>
        <p className="text-xs md:text-sm text-slate-500">
          Üretim verimliliği ve analizlerine genel bakış
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 overflow-x-auto no-scrollbar whitespace-nowrap">
          <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-navy-text">
            Son 7 Gün
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-navy-text transition-colors">
            Son 30 Gün
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-navy-text flex items-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-sm">
              calendar_month
            </span>{" "}
            Özel
          </button>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/10 whitespace-nowrap">
          <span className="material-symbols-outlined text-sm">
            add_chart
          </span>
          Rapor Oluştur
        </button>
      </div>
    </header>
  );
}
