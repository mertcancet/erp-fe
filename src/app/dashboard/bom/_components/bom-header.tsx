"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface BOMHeaderProps {
  onAddProduct?: () => void;
}

export function BOMHeader({ onAddProduct }: BOMHeaderProps) {
  const router = useRouter();

  const handleAdd = onAddProduct || (() => router.push("/dashboard/inventory/new"));

  return (
    <header className="min-h-[4rem] py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4 pl-16 md:pl-6 shrink-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 w-full md:w-auto">
        <h2 className="text-lg font-bold tracking-tight text-navy-text dark:text-slate-100 whitespace-nowrap">
          Ürünler ve Reçeteler (BOM)
        </h2>
        <div className="relative w-full max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all text-navy-text dark:text-slate-200"
            placeholder="Ürün kodu veya isim ara..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1 hidden md:block"></div>
        </div>
        <button 
          onClick={handleAdd}
          className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm shadow-primary/20 whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Yeni Ürün Ekle
        </button>
      </div>
    </header>
  );
}
