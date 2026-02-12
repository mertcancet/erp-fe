"use client";

import React from "react";

export function BOMStatsGrid() {
  const stats = [
    { icon: "timer", label: "Üretim Süresi", val: "4.5 Saat", sub: "/ 100 Adet", color: "text-slate-400" },
    { icon: "settings_input_component", label: "Aktif Hat", val: "HAT-A", sub: "(Otomasyon)", color: "text-slate-400" },
    { icon: "trending_down", label: "Fire Oranı", val: "%2.50", sub: "Hedef: %1.80", color: "text-red-500" },
    { icon: "history", label: "Versiyon", val: "v1.0", sub: "12.10.2023", color: "text-slate-400" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-primary/20 transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
            </div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</h4>
          </div>
          <div className="flex items-baseline gap-2">
            <p className={`text-xl font-black ${stat.color === 'text-red-500' ? 'text-red-500' : 'text-navy-text'}`}>{stat.val}</p>
            <p className="text-[10px] font-bold text-slate-400 italic">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
