"use client";

import React from "react";

export function InventoryWarnings() {
  const warnings = [
    {
      code: "ST-412-K2",
      name: "Servo Motor 750W (RS485)",
      status: "Eksik Miktar: 6 Adet • Planlanan İhtiyaç: 10 Adet (22.10.2023)",
      actionLabel: "Tedarikçi Gör",
      type: "red"
    },
    {
      code: "ST-001-A1",
      name: "Kontrol Kartı Montajı v2",
      status: "Kritik Seviye Altı: -7 Adet • Son Hareket: 2 saat önce",
      actionLabel: "Üretim Emri Ver",
      type: "orange"
    }
  ];

  return (
    <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shadow-sm border border-red-100">
            <span className="material-symbols-outlined text-3xl">notifications_active</span>
          </div>
          <div>
            <h2 className="text-lg font-black text-navy-text leading-none mb-1">Kritik Stok Uyarıları</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Üretimi tehlikeye atan eksikler</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-50 text-slate-600 text-[11px] font-black rounded-lg border border-slate-200 hover:bg-slate-100 transition-all uppercase tracking-widest">Planlamaya Git</button>
          <button className="px-4 py-2 bg-primary text-white text-[11px] font-black rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 uppercase tracking-widest">Sipariş Önerisi Oluştur</button>
        </div>
      </div>
      <div className="space-y-3">
        {warnings.map((warning, i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:border-primary/20 transition-all">
            <div className="flex items-center gap-6">
              <span className="text-xs font-black text-slate-400 font-mono tracking-tighter">{warning.code}</span>
              <div>
                <p className="text-sm font-black text-navy-text">{warning.name}</p>
                <p className={`text-[11px] ${warning.type === 'red' ? 'text-red-500' : 'text-orange-500'} font-bold uppercase tracking-tight`}>{warning.status}</p>
              </div>
            </div>
            <button className="text-primary text-xs font-black hover:underline underline-offset-4 uppercase tracking-widest">{warning.actionLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
