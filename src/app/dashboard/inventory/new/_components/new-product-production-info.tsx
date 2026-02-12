"use client";

import React from "react";
import Link from "next/link";

export function NewProductProductionInfo() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-black text-navy-text flex items-center gap-2 uppercase tracking-widest">
          <span className="material-symbols-outlined text-primary text-[20px]">precision_manufacturing</span>
          Üretim Bilgileri
        </h2>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Reçetesi Var mı?</span>
            <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary" role="switch">
              <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>
          </div>
          <Link href="/dashboard/bom" className="flex items-center gap-2 text-[10px] font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest">
            <span className="material-symbols-outlined !text-[16px]">account_tree</span>
            Reçeteye Git
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Standart Üretim Süresi</label>
          <div className="flex gap-3">
            <input className="flex-1 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="0" type="number"/>
            <select className="w-32 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
              <option>Dakika</option>
              <option>Saat</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Üretim Hattı / İstasyonu</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option value="">Seçiniz...</option>
            <option>Ana Montaj Hattı - A1</option>
            <option>CNC Torna İstasyonu</option>
            <option>Boya & Kaplama Hattı</option>
          </select>
          <p className="text-[10px] text-slate-400 mt-2 italic font-medium">Ürün türüne göre varsayılan hat önerilir.</p>
        </div>
        <div className="col-span-2">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <input defaultChecked className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary accent-primary" type="checkbox"/>
            <span className="text-xs font-black text-navy-text group-hover:text-primary transition-colors uppercase tracking-tight">Üretilebilir mi?</span>
          </label>
        </div>
      </div>
    </section>
  );
}
