"use client";

import React from "react";
import Link from "next/link";

export function ResourcesHeader() {
  return (
    <header className="min-h-[4rem] py-3 bg-white border-b border-slate-200 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 pl-16 md:pl-8 shrink-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <h2 className="text-lg font-bold text-slate-800 whitespace-nowrap">
          Kaynaklar ve Kapasite
        </h2>
        <div className="relative w-full max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-500"
            placeholder="Makine veya personel ara..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0 justify-between md:justify-end">
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/dashboard/resources/add-workforce">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-xs font-bold whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">
                person_add
              </span>
              Yeni İş Gücü
            </button>
          </Link>
          <Link href="/dashboard/resources/add-machine">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm whitespace-nowrap">
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              Yeni Makine
            </button>
          </Link>
        </div>
        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              notifications
            </span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">refresh</span>
            Yenile
          </button>
        </div>
      </div>
    </header>
  );
}
