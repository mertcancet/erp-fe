"use client";

import React from "react";
import { useRouter } from "next/navigation";

export interface Product {
  id: string;
  code: string;
  name: string;
  leadTime: string;
  status: string;
  statusColor: string;
}

interface BOMTableProps {
  products: Product[];
}

export function BOMTable({ products }: BOMTableProps) {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ürün Kodu</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Ürün Adı</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tedarik Süresi</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Durum</th>
            <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">İşlemler</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {products.map((p) => (
            <tr 
              key={p.id}
              onClick={() => router.push(`/dashboard/bom/${p.id}`)}
              className="hover:bg-primary/5 cursor-pointer transition-colors group"
            >
              <td className="px-6 py-4 font-bold text-navy-text dark:text-slate-200 group-hover:text-primary">{p.code}</td>
              <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200 group-hover:underline underline-offset-4 decoration-primary">{p.name}</td>
              <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">{p.leadTime}</td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${p.statusColor}`}>
                  {p.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">Görüntüle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
