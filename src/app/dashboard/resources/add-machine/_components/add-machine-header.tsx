"use client";

import React from "react";
import Link from "next/link";

export function AddMachineHeader() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/resources"
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-primary"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div>
            <nav className="flex text-[10px] text-slate-400 mb-1 uppercase font-bold tracking-wider">
              <span>Üretim Planlama</span>
              <span className="mx-2">/</span>
              <span>Kaynak Yönetimi</span>
              <span className="mx-2">/</span>
              <span className="text-primary">Yeni Makine</span>
            </nav>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">
              Yeni Makine Ekle
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/resources"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
          >
            İptal
          </Link>
          <button className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-sm transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">save</span>
            Kaydet
          </button>
        </div>
      </div>
    </header>
  );
}
