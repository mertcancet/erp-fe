"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductionOrderDetailPage() {
  const [activeTab, setActiveTab] = useState("operations");

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-950">
      {/* Top Header */}
      <header className="min-h-[5rem] py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 sticky top-0 z-10 pl-16 md:pl-8">
        <div className="flex flex-col w-full md:w-auto">
          <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 mb-1">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <Link href="/dashboard/production-orders" className="hover:text-primary transition-colors whitespace-nowrap">Üretim Emirleri</Link>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium whitespace-nowrap">#ORD-2024-001</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <h1 className="text-lg md:text-xl font-bold text-navy-text dark:text-white">
              Endüstriyel Motor - V2
            </h1>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50 flex items-center gap-1.5 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Devam Ediyor
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap">
            <span className="material-symbols-outlined text-lg">edit</span>
            Düzenle
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
            <span className="material-symbols-outlined text-lg">play_circle</span>
            Hızlandır
          </button>
        </div>
      </header>

      <main className="p-8 space-y-8 overflow-y-auto">
        {/* KPI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">+12%</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Tamamlanma Oranı</p>
            <div className="flex items-end gap-2 text-2xl font-black text-navy-text dark:text-white">
              68.5%
              <span className="text-sm font-bold text-slate-400 mb-1">/ 100%</span>
            </div>
            <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 rounded-full" style={{ width: '68.5%' }}></div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Hedef: 48s</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Tahmini Bitiş</p>
            <div className="text-2xl font-black text-navy-text dark:text-white">
              7s 24dk
            </div>
            <p className="mt-2 text-[10px] text-slate-400 font-medium">Kalan süre standart sapma içinde</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">electric_bolt</span>
              </div>
              <span className="text-xs font-bold text-green-500 px-2 py-0.5 rounded-full">Yüksek</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Verimlilik</p>
            <div className="text-2xl font-black text-navy-text dark:text-white">
              94.2%
            </div>
            <p className="mt-2 text-[10px] text-slate-400 font-medium tracking-wide">Önceki partiye göre %3 artış</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">Kritik</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Kaynak Doluluğu</p>
            <div className="text-2xl font-black text-navy-text dark:text-white">
              88.0%
            </div>
            <p className="mt-2 text-[10px] text-slate-400 font-medium tracking-wide">CNC-04 üzerinde yoğunluk var</p>
          </div>
        </section>

        {/* Middle Section: Gantt Preview */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">timeline</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-text dark:text-white tracking-tight">Üretim Akışı ve Zaman Çizelgesi</h3>
                <p className="text-sm text-slate-500 font-medium">Gantt görünümü ve operasyonel sıralama</p>
              </div>
            </div>
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">Gülük</button>
              <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 text-primary rounded-md shadow-sm transition-all">Saatlik</button>
              <button className="px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all">Dakikalık</button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="relative border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/50 p-4">
              <div className="grid grid-cols-12 gap-1 mb-2">
                {Array.from({length: 12}).map((_, i) => (
                  <div key={i} className="text-[10px] text-slate-400 font-bold text-center">0{8+i}:00</div>
                ))}
              </div>
              <div className="space-y-3 relative">
                {/* Current Time Indicator */}
                <div className="absolute top-0 bottom-0 left-[62.5%] w-px bg-red-500 z-10">
                   <div className="absolute -top-1 -left-1 size-2 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></div>
                </div>

                <div className="h-10 bg-green-100 dark:bg-green-900/20 border-l-4 border-l-green-500 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-green-200 transition-colors cursor-pointer" style={{ width: '25%' }}>
                   <span className="text-[11px] font-bold text-green-700 dark:text-green-400 whitespace-nowrap">Döküm Hazırlık</span>
                   <span className="text-[10px] text-green-600 dark:text-green-500 font-medium">Bitti</span>
                </div>

                <div className="h-10 bg-blue-100 dark:bg-blue-900/20 border-l-4 border-l-blue-500 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-blue-200 transition-colors cursor-pointer ml-[25%]" style={{ width: '37.5%' }}>
                   <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">CNC İşleme</span>
                   <span className="text-[10px] text-blue-600 dark:text-blue-500 font-medium">Devam Ediyor</span>
                </div>

                <div className="h-10 bg-slate-200 dark:bg-slate-800 border-l-4 border-l-slate-400 rounded-r-lg flex items-center px-4 gap-3 group hover:bg-slate-300 transition-colors cursor-pointer ml-[62.5%]" style={{ width: '25%' }}>
                   <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">Statik Dengeleme</span>
                   <span className="text-[10px] text-slate-500 font-medium">Bekliyor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section: Operations table */}
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
      </main>
    </div>
  );
}
