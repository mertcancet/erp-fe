"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BOMPage() {
  const router = useRouter();

  const products = [
    { id: "1", code: "PRD-001", name: "Endüstriyel Motor - V2", leadTime: "12 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "2", code: "PRD-002", name: "Kontrol Paneli (Standard)", leadTime: "5 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "3", code: "PRD-003", name: "Hidrolik Pompa Sistemi", leadTime: "8 Gün", status: "TASLAK", statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    { id: "4", code: "PRD-004", name: "Sensör Grubu A-12", leadTime: "3 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "5", code: "PRD-005", name: "Bağlantı Şasisi (Paslanmaz)", leadTime: "15 Gün", status: "PASİF", statusColor: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" },
  ];

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Top Header */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-lg font-bold tracking-tight text-navy-text dark:text-slate-100">
            Ürünler ve Reçeteler (BOM)
          </h2>
          <div className="relative max-w-sm w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all text-navy-text dark:text-slate-200"
              placeholder="Ürün kodu veya isim ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
          <button 
            onClick={() => router.push("/dashboard/inventory/new")}
            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Yeni Ürün Ekle
          </button>
        </div>
      </header>

      {/* Dynamic Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Table Section */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          {/* Filters Row */}
          <div className="flex items-center gap-3 mb-6">
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
              Durum: Hepsi <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
              Tedarik Süresi <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
            <div className="flex-1"></div>
            <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 text-navy-text dark:text-slate-200">
              <span className="material-symbols-outlined text-lg">download</span>
              Dışa Aktar
            </button>
          </div>

          {/* Products Table */}
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
        </div>

        {/* Info Sidebar (Optional/Existing) */}
        <aside className="w-[400px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Seçili Ürün Analizi</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary">view_in_ar</span>
              </div>
              <div>
                <h4 className="text-base font-black text-navy-text dark:text-slate-100">Endüstriyel Motor - V2</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase">PRD-001</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Bileşen Sayısı</p>
                <p className="text-lg font-black text-navy-text dark:text-slate-100">18 <span className="text-xs font-normal text-slate-400 uppercase">Parça</span></p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Birim Maliyet</p>
                <p className="text-lg font-black text-primary">$1,240.50</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
             <div className="space-y-6">
               <div className="flex items-center justify-between">
                 <h4 className="text-xs font-black text-navy-text dark:text-slate-200 uppercase tracking-widest flex items-center gap-2">
                   <span className="material-symbols-outlined text-[16px]">account_tree</span>
                   Reçete Özeti
                 </h4>
                 <button onClick={() => router.push("/dashboard/bom/1")} className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Detaya Git</button>
               </div>
               <div className="space-y-4">
                 {[
                   { label: "Ana Motor Bloğu", qty: "1 Adet", cost: "$850" },
                   { label: "Rulman Takımı", qty: "2 Adet", cost: "$120" },
                   { label: "Bakır Sargı", qty: "4.5 kg", cost: "$180" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg transition-colors">
                     <div>
                       <p className="text-xs font-bold text-navy-text dark:text-slate-200">{item.label}</p>
                       <p className="text-[10px] text-slate-400 font-medium">{item.qty}</p>
                     </div>
                     <p className="text-xs font-black text-slate-600 dark:text-slate-400">{item.cost}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex gap-3">
             <button className="flex-1 bg-primary text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
               Üretim Planla
             </button>
             <button className="p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-white dark:hover:bg-slate-900 transition-all">
               <span className="material-symbols-outlined text-[20px] text-slate-400">print</span>
             </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
