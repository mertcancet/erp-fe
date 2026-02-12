"use client";

import React from "react";

export function InventoryFilters() {
  return (
    <section className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex flex-wrap items-center gap-6 text-sm">
        {/* Search */}
        <div className="flex-1 min-w-[300px] relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" 
            placeholder="Stok kodu veya adı ile ara..." 
            type="text"
          />
        </div>
        {/* Type Filters */}
        <div className="flex items-center gap-4 border-l border-slate-100 pl-6 shrink-0">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tür:</span>
          {["Hammadde", "Yarı Mamul", "Mamul"].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary accent-primary" type="checkbox" defaultChecked={type !== "Mamul"} />
              <span className="font-bold text-slate-600 group-hover:text-primary transition-colors">{type}</span>
            </label>
          ))}
        </div>
        {/* Warehouse Select */}
        <div className="flex items-center gap-3 border-l border-slate-100 pl-6 shrink-0">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Depo:</span>
          <select className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-3 pr-8 font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Tüm Depolar</option>
            <option>Merkez Depo (MD01)</option>
            <option>Hammadde Deposu (HD02)</option>
            <option>Üretim Sahası (US01)</option>
          </select>
        </div>
        {/* More Filters */}
        <button className="ml-auto flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-primary font-bold transition-colors">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Gelişmiş
        </button>
      </div>
    </section>
  );
}
