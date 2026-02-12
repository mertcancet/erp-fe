"use client";

import React from "react";

export function NewProductCostInfo() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
        <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
        Maliyet Bilgileri
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Birim Maliyet</label>
            <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="0.00" type="number"/>
          </div>
          <div className="w-28">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Döviz</label>
            <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
              <option>TRY</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Maliyet Tipi</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>Standart Maliyet</option>
            <option>FIFO</option>
            <option>LIFO</option>
          </select>
        </div>
      </div>
    </section>
  );
}
