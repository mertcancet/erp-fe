"use client";

import React from "react";

export function NewProductStockInventory() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-black text-navy-text flex items-center gap-2 uppercase tracking-widest">
          <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
          Stok & Envanter
        </h2>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-wider">
          <span className="material-symbols-outlined !text-[14px]">warning</span>
          STOK SEVİYESİ KRİTİK
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Mevcut Stok", val: "150", color: "" },
          { label: "Minimum Stok", val: "200", color: "border-orange-200 bg-orange-50/30" },
          { label: "Maksimum Stok", val: "1000", color: "" },
          { label: "Güvenlik Stoğu", val: "50", color: "" }
        ].map((item, i) => (
          <div key={i}>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">{item.label}</label>
            <input className={`w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text ${item.color}`} type="number" defaultValue={item.val}/>
          </div>
        ))}
      </div>
    </section>
  );
}
