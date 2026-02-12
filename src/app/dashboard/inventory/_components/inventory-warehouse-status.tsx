"use client";

import React from "react";

export function InventoryWarehouseStatus() {
  const warehouses = [
    { name: "Merkez Depo (MD01)", ratio: 82 },
    { name: "Hammadde Deposu (HD02)", ratio: 45 }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-[11px] font-black mb-6 uppercase text-slate-400 tracking-widest">Depo Doluluk Oranı</h2>
      <div className="space-y-8">
        {warehouses.map((wh, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-black mb-2 text-navy-text">
              <span>{wh.name}</span>
              <span className="text-primary">{wh.ratio}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-1000" 
                style={{ width: `${wh.ratio}%` }}
              ></div>
            </div>
          </div>
        ))}
        <div className="mt-8 pt-6 border-t border-slate-50">
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-[11px] text-primary/80 leading-relaxed font-bold italic">
              "Merkez Depo kapasitesi kritik seviyeye ulaşıyor. Sevkiyat planlamasını ve stok devir hızını gözden geçirin."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
