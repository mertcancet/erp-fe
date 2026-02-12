"use client";

import React from "react";

export function BOMMRPSidebar() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 relative overflow-hidden group">
      <h3 className="font-black text-navy-text uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
        MRP & Analiz
      </h3>
      <div className="space-y-6 relative z-10">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-sans">Üretilebilir Maks. Adet</p>
          <p className="text-3xl font-black text-navy-text tracking-tight">72 <span className="text-xs font-bold text-slate-400 italic">Birim</span></p>
          <p className="text-[10px] text-red-500 font-black mt-2 uppercase flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Sınırlayıcı: Rulman 6204-2RS
          </p>
        </div>
        
        <div className="space-y-3">
          {[
            { label: "Kritik Bileşen", val: "Rulman-X" },
            { label: "En Uzun Lead Time", val: "12 Gün" },
            { label: "Mevcut Siparişler", val: "3 Aktif" }
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2">
              <span className="font-bold text-slate-400 uppercase tracking-tight">{row.label}</span>
              <span className="font-black text-navy-text">{row.val}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          <button className="w-full py-3.5 bg-primary text-white text-[11px] font-black rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px] font-black">add_task</span>
            Üretim Planına Ekle
          </button>
          <button className="w-full py-3.5 bg-navy-text text-white text-[11px] font-black rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px] font-black">shopping_cart</span>
            Satın Alma Oluştur
          </button>
        </div>
      </div>
      <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-7xl text-primary/5 font-black group-hover:scale-110 transition-transform duration-700">analytics</span>
    </div>
  );
}
