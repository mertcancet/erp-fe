"use client";

import React from "react";

export interface BOMItem {
  name: string;
  code: string;
  type: string;
  qty: string;
  stock: string;
  deficit: string;
  cost: string;
  status: string;
}

interface BOMItemsTableProps {
  items: BOMItem[];
}

export function BOMItemsTable({ items }: BOMItemsTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
        <h3 className="font-black text-navy-text uppercase tracking-widest text-sm">BOM Kalemleri</h3>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-black text-slate-400">{items.length} KALEM</span>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <button className="text-primary text-[11px] font-black hover:underline uppercase tracking-widest">Hepsini Gör</button>
        </div>
      </div>
      <div className="overflow-x-auto text-sm">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 text-slate-400 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Bileşen</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Kod</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Miktar</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Mevcut Stok</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Eksik</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Maliyet</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-center">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-medium">
            {items.map((item, i) => (
              <tr key={i} className={`hover:bg-slate-50 transition-colors ${item.status === 'Kritik' ? 'bg-red-50/30' : ''}`}>
                <td className="px-6 py-4">
                  <p className="font-black text-navy-text">{item.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.type}</p>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-slate-400 font-mono">{item.code}</td>
                <td className="px-6 py-4 text-right font-black text-navy-text">{item.qty}</td>
                <td className={`px-6 py-4 text-right font-black ${item.status === 'Kritik' ? 'text-red-500' : 'text-slate-600'}`}>{item.stock}</td>
                <td className={`px-6 py-4 text-right font-black ${item.deficit !== '0' ? 'text-red-500' : 'text-slate-200'}`}>{item.deficit}</td>
                <td className="px-6 py-4 text-right font-black text-navy-text">{item.cost}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 text-[9px] font-black rounded uppercase tracking-widest ${
                    item.status === 'Tamam' ? 'bg-emerald-50 text-emerald-600' : 
                    item.status === 'Kritik' ? 'bg-red-100 text-red-600' : 
                    'bg-orange-50 text-orange-600'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
