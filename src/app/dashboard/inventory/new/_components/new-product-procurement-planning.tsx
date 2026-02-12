"use client";

import React from "react";

export function NewProductProcurementPlanning() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
        <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
        Tedarik & Planlama (MRP)
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Lead Time (Gün)</label>
            <span className="material-symbols-outlined !text-sm text-slate-300 cursor-help" title="Sipariş verildikten sonra ürünün depoya giriş süresi.">help</span>
          </div>
          <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="7" type="number"/>
        </div>
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Varsayılan Tedarikçi</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>ABC Endüstri A.Ş.</option>
            <option>XYZ Lojistik</option>
          </select>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Yeniden Sipariş Noktası</label>
            <span className="material-symbols-outlined !text-sm text-slate-300 cursor-help" title="Otomatik satın alma talebi noktası.">help</span>
          </div>
          <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="250" type="number"/>
        </div>
        <div>
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">MRP Planlama Türü</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>İhtiyaç Bazlı (PD)</option>
            <option>Stok Bazlı (VB)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
