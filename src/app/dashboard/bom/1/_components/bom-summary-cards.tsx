"use client";

import React from "react";

export function BOMSummaryCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex gap-6">
        <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-inner">
          <span className="material-symbols-outlined text-slate-300 text-5xl">view_in_ar</span>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ürün Kodu</p>
            <p className="text-sm font-black text-navy-text mt-1">PRD-AL-1001</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Versiyon</p>
            <p className="text-sm font-black text-primary mt-1">v1.0 (Aktif)</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">BOM Tipi</p>
            <p className="text-sm font-black text-navy-text mt-1">Üretim Reçetesi</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Son Güncelleme</p>
            <p className="text-sm font-black text-navy-text mt-1">12.10.2023</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 grid grid-cols-3 gap-6">
        <div className="flex flex-col justify-center border-r border-slate-50 pr-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Std. Miktar</p>
          <p className="text-3xl font-black text-navy-text mt-1">100 <span className="text-sm font-bold text-slate-300 italic">Adet</span></p>
        </div>
        <div className="flex flex-col justify-center border-r border-slate-50 pr-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Toplam Maliyet</p>
          <p className="text-3xl font-black text-primary mt-1">₺14.500</p>
          <p className="text-[10px] text-emerald-500 font-black mt-1 uppercase">-%2.4 vs Geçen Ay</p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">MRP Durumu</p>
          <span className="px-4 py-1.5 text-[10px] font-black bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full uppercase tracking-widest">Hazır</span>
        </div>
      </div>
    </div>
  );
}
