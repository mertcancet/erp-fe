"use client";

import React from "react";
import Link from "next/link";

interface BOMDetailHeaderProps {
  title: string;
}

export function BOMDetailHeader({ title }: BOMDetailHeaderProps) {
  return (
    <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-20 flex items-center justify-between px-8 shrink-0">
      <div>
        <nav className="flex text-[10px] font-black text-slate-400 mb-1 space-x-1 items-center uppercase tracking-widest">
          <Link href="/dashboard/inventory" className="hover:text-primary transition-colors">Envanter</Link>
          <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
          <Link href="/dashboard/bom" className="hover:text-primary transition-colors">BOM</Link>
          <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
          <span className="text-navy-text">{title}</span>
        </nav>
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-black text-navy-text tracking-tight">{title}</h1>
          <span className="px-2 py-0.5 text-[9px] font-black bg-primary/10 text-primary border border-primary/20 rounded-full uppercase tracking-widest">v1.0</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest">
          Pasife Al
        </button>
        <button className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest">
          Kopyala
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-[11px] font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 flex items-center gap-2 uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm font-black">edit</span>
          Düzenle
        </button>
      </div>
    </header>
  );
}
