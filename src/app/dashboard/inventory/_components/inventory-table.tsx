"use client";

import React from "react";

export interface StockItem {
  code: string;
  name: string;
  type: string;
  current: string;
  reserved: string;
  available: string;
  minStock: string;
  status: string;
  statusColor: string;
}

interface InventoryTableProps {
  stockData: StockItem[];
  onRowClick: (item: StockItem) => void;
}

export function InventoryTable({ stockData, onRowClick }: InventoryTableProps) {
  return (
    <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Stok Kodu</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Stok Adı</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Tür</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Mevcut</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Rezerve</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Kullanılabilir</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Min. Stok</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Durum</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {stockData.map((item, idx) => (
              <tr 
                key={idx} 
                onClick={() => onRowClick(item)}
                className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
              >
                <td className="px-6 py-4 text-sm font-bold text-navy-text">{item.code}</td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-600">{item.name}</td>
                <td className="px-6 py-4 text-center">
                  <span className="text-[10px] font-black border border-slate-100 px-2 py-0.5 rounded text-slate-400 uppercase">{item.type}</span>
                </td>
                <td className="px-6 py-4 text-sm text-right font-medium text-slate-600">{item.current}</td>
                <td className="px-6 py-4 text-sm text-right text-orange-600 font-bold bg-orange-50/30">{item.reserved}</td>
                <td className="px-6 py-4 text-sm text-right font-bold text-primary bg-primary/5">{item.available}</td>
                <td className="px-6 py-4 text-sm text-right text-slate-400 font-semibold">{item.minStock}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 text-[10px] font-black rounded-full uppercase tracking-tighter ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-300 group-hover:text-slate-600">
                    <span className="material-symbols-outlined text-sm font-black">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-slate-50 bg-slate-50/30">
        <span className="text-[11px] font-bold text-slate-400 italic">Toplam 4,280 kayıttan 1-5 arası gösteriliyor</span>
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-400 opacity-50 cursor-not-allowed">ÖNCEKİ</button>
          <button className="px-3 py-1 text-[11px] font-black bg-primary text-white rounded-lg shadow-sm">1</button>
          <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">2</button>
          <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">3</button>
          <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors uppercase">SONRAKİ</button>
        </div>
      </div>
    </section>
  );
}
