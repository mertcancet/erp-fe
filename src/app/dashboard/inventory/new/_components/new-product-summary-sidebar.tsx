"use client";

import React from "react";

export function NewProductSummarySidebar() {
  return (
    <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-50 bg-slate-50/50">
          <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Ürün Özeti</h3>
        </div>
        <div className="p-6">
          <div className="flex gap-4 mb-8">
            <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-slate-300 text-3xl">image</span>
            </div>
            <div>
              <h4 className="text-sm font-black text-navy-text leading-tight">Endüstriyel Rulman X-200</h4>
              <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-tighter">PRD-0001</p>
              <div className="mt-3 inline-flex px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black rounded uppercase tracking-widest">MAMUL</div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MRP DURUMU</span>
              <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> HAZIR
              </span>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Temel tanımlamalar yapıldı", done: true },
                { label: "Tedarik parametreleri girildi", done: true },
                { label: "Maliyet ataması bekleniyor", done: false }
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`material-symbols-outlined !text-[18px] ${step.done ? "text-primary font-black" : "text-slate-200"}`}>
                    {step.done ? "check_circle" : "radio_button_unchecked"}
                  </span>
                  <span className={`text-[11px] font-bold ${step.done ? "text-navy-text" : "text-slate-400"}`}>{step.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Mevcut</p>
              <p className="text-lg font-black text-navy-text tracking-tight">150 <span className="text-[10px] font-bold text-slate-300 italic">Adet</span></p>
            </div>
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <p className="text-[9px] font-black text-orange-500 uppercase mb-1 tracking-widest">Kritik</p>
              <p className="text-lg font-black text-orange-700 tracking-tight">200 <span className="text-[10px] font-bold text-orange-300 italic">Adet</span></p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-50 text-center">
            <p className="text-[11px] text-slate-400 leading-relaxed italic font-medium px-4">
              Tüm zorunlu alanlar doldurulduğunda "Kaydet" butonu aktifleşecektir.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-navy-text p-6 border border-navy-text rounded-2xl shadow-xl shadow-navy-text/10 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined font-black">help</span>
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-widest">Parametre Desteği</h4>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-bold">
                MRP parametreleri ve maliyet tipleri hakkında detaylı bilgi için dokümantasyona göz atın.
              </p>
              <a className="inline-flex items-center mt-4 text-[10px] font-black text-primary hover:text-primary/80 uppercase tracking-widest underline underline-offset-4" href="#">
                Dokümantasyonu Aç
                <span className="material-symbols-outlined !text-[14px] ml-1">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
        <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-7xl text-white/5 font-black group-hover:scale-110 transition-transform duration-700">menu_book</span>
      </div>
    </div>
  );
}
