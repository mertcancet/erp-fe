"use client";

import React from "react";
import Link from "next/link";

export function InventoryHeader() {
  return (
    <header className="min-h-[5rem] py-4 border-b border-slate-200 bg-white sticky top-0 z-20 flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 gap-4 pl-16 md:pl-8">
      <div className="w-full sm:w-auto">
        <h1 className="text-xl font-bold text-navy-text">Stok ve Envanter Yönetimi</h1>
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <span>Üretim ERP</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary">Envanter Takibi</span>
        </nav>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px]">file_download</span>
          Dışa Aktar
        </button>
        <Link 
          href="/dashboard/inventory/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Yeni Stok Ekle
        </Link>
      </div>
    </header>
  );
}
