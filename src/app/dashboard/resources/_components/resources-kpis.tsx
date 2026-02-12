"use client";

import React from "react";

export function ResourcesKPIs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-primary transition-colors shadow-sm">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">
            Ortalama Kullanım
          </p>
          <h3 className="text-2xl font-extrabold text-slate-800">%78.4</h3>
          <p className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">
              trending_up
            </span>
            +2.1% (Son 24 saat)
          </p>
        </div>
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">
            query_stats
          </span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-red-500 transition-colors shadow-sm">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">
            Kapasite Aşımı
          </p>
          <h3 className="text-2xl font-extrabold text-red-500">4 Kaynak</h3>
          <p className="text-xs font-medium text-slate-400 mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">
              warning
            </span>
            Hemen müdahale gerekli
          </p>
        </div>
        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">error</span>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-primary transition-colors shadow-sm">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">
            Aktif Kaynaklar
          </p>
          <h3 className="text-2xl font-extrabold text-slate-800">
            142 Ünite
          </h3>
          <p className="text-xs font-medium text-slate-400 mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">
              verified
            </span>
            Tam kapasite çalışıyor
          </p>
        </div>
        <div className="w-12 h-12 bg-slate-50 text-slate-500 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">
            precision_manufacturing
          </span>
        </div>
      </div>
    </div>
  );
}
