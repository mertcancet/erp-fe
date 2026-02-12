"use client";

import React from "react";

export function NewProductBasicInfo() {
  return (
    <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
        <span className="material-symbols-outlined text-primary text-[20px]">info</span>
        Temel Bilgiler
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Adı <span className="text-red-500">*</span></label>
          <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="Örn: Endüstriyel Rulman X-200" type="text"/>
        </div>
        <div>
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Kodu <span className="text-red-500">*</span></label>
          <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="PRD-0001" type="text"/>
        </div>
        <div>
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Türü</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>Ham Madde</option>
            <option>Yarı Mamul</option>
            <option defaultValue="Mamul">Mamul</option>
            <option>Sarf Malzeme</option>
          </select>
        </div>
        <div>
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Kategori</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>Mekanik Parçalar</option>
            <option>Elektronik Komponentler</option>
            <option>Kimyasallar</option>
          </select>
        </div>
        <div>
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Birim</label>
          <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
            <option>Adet (pcs)</option>
            <option>Kilogram (kg)</option>
            <option>Metre (m)</option>
          </select>
        </div>
      </div>
    </section>
  );
}
