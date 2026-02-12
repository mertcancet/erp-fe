"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NewProductHeader() {
  const router = useRouter();

  return (
    <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-20 flex items-center justify-between px-8 shrink-0">
      <div>
        <nav className="flex text-[10px] font-black text-slate-400 mb-1 space-x-1 items-center uppercase tracking-widest">
          <span>Envanter</span>
          <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
          <Link href="/dashboard/inventory" className="hover:text-primary transition-colors">Ürünler</Link>
          <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
          <span className="text-navy-text">Yeni Ürün</span>
        </nav>
        <h1 className="text-xl font-black text-navy-text tracking-tight outline-none">Yeni Ürün Ekle</h1>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => router.back()}
          className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest"
        >
          İptal
        </button>
        <button className="px-4 py-2 bg-slate-100 text-navy-text rounded-lg text-[11px] font-black hover:bg-slate-200 transition-all uppercase tracking-widest">
          Kaydet & Devam Et
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-[11px] font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 uppercase tracking-widest">
          Kaydet
        </button>
      </div>
    </header>
  );
}
