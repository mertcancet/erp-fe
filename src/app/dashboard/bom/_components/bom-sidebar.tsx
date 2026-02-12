"use client";

import React from "react";
import { useRouter } from "next/navigation";

export function BOMSidebar() {
  const router = useRouter();

  return (
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
  );
}
