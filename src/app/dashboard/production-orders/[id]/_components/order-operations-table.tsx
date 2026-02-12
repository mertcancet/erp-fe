"use client";

import React, { useState } from "react";

export function OrderOperationsTable() {
  const [activeTab, setActiveTab] = useState("operations");

  return (
    <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
         <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
           <button 
             onClick={() => setActiveTab("operations")}
             className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "operations" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-navy-text dark:hover:text-white"}`}
           >
             Operasyonlar
           </button>
           <button 
             onClick={() => setActiveTab("materials")}
             className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "materials" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-navy-text dark:hover:text-white"}`}
           >
             Malzeme Listesi
           </button>
           <button 
             onClick={() => setActiveTab("quality")}
             className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "quality" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-navy-text dark:hover:text-white"}`}
           >
             Kalite Kontrol
           </button>
         </div>
         <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
           <span className="material-symbols-outlined text-lg">download</span>
           Tümünü İndir (PDF)
         </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-900/50">
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Sıra</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Operasyon</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Kaynak/Makine</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Operatör</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">Durum</th>
              <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 text-right">Verimlilik</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group">
              <td className="px-6 py-4 text-xs font-bold text-slate-400">01</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-navy-text dark:text-white group-hover:text-primary transition-colors">Döküm Hazırlık</span>
                  <span className="text-[10px] text-slate-500 font-medium">BOM-CAST-001</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                   <div className="size-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                     <span className="material-symbols-outlined text-sm">settings_input_composite</span>
                   </div>
                   <span className="text-sm font-medium dark:text-slate-300">FURNACE-A1</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-black">MC</div>
                  <span className="text-sm font-medium dark:text-slate-300">Murat C.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800/50">TAMAMLANDI</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-black text-navy-text dark:text-white">98%</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer bg-blue-50/20 dark:bg-blue-900/10 border-l-2 border-l-primary group">
              <td className="px-6 py-4 text-xs font-bold text-primary">02</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-navy-text dark:text-white">CNC İşleme</span>
                  <span className="text-[10px] text-slate-500 font-medium">CNC-MILLING-04</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                   <div className="size-6 rounded bg-blue-100 dark:bg-blue-900/40 text-primary flex items-center justify-center">
                     <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                   </div>
                   <span className="text-sm font-medium dark:text-slate-300">CNC-X4-MILL</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center text-[10px] font-black">ST</div>
                  <span className="text-sm font-medium dark:text-slate-300">Selim T.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-400 border border-primary/20">İŞLEMDE</span>
                  <span className="text-[10px] text-blue-500 font-bold animate-pulse">04:12:45</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-black text-navy-text dark:text-white">92%</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group opacity-60">
              <td className="px-6 py-4 text-xs font-bold text-slate-400">03</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-navy-text dark:text-white group-hover:text-primary transition-colors">Statik Dengeleme</span>
                  <span className="text-[10px] text-slate-500 font-medium">QUAL-BAL-02</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                   <div className="size-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                     <span className="material-symbols-outlined text-sm">balance</span>
                   </div>
                   <span className="text-sm font-medium dark:text-slate-300">BAL-M3-AUTO</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="text-xs text-slate-400 italic">Atanmadı</span>
              </td>
              <td className="px-6 py-4">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">SIRADA</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-sm font-black text-slate-300">-</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
