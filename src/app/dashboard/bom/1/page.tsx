"use client";

import React from "react";
import { BOMDetailHeader } from "./_components/bom-detail-header";
import { BOMSummaryCards } from "./_components/bom-summary-cards";
import { BOMItemsTable, BOMItem } from "./_components/bom-items-table";
import { BOMMRPSidebar } from "./_components/bom-mrp-sidebar";
import { BOMStatsGrid } from "./_components/bom-stats-grid";

export default function BOMDetailPage() {
  const bomItems: BOMItem[] = [
    { name: "Alüminyum Profil 6061", code: "HAM-AL-01", type: "Hammadde", qty: "250 kg", stock: "1,200 kg", deficit: "0", cost: "₺6.250", status: "Tamam" },
    { name: "Rulman 6204-2RS", code: "MLZ-RL-04", type: "Bileşen", qty: "200 Adet", stock: "145 Adet", deficit: "55", cost: "₺4.100", status: "Kritik" },
    { name: "Montaj Kiti - Tip B", code: "YRM-MT-02", type: "Yarımamul", qty: "100 Set", stock: "105 Set", deficit: "0", cost: "₺2.150", status: "Tamam" },
    { name: "Statik Toz Boya (Gri)", code: "KMY-BY-09", type: "Sarf", qty: "15 kg", stock: "40 kg", deficit: "0", cost: "₺950", status: "Tamam" },
    { name: "M5x16 Civata", code: "BAG-CV-05", type: "Bileşen", qty: "800 Adet", stock: "820 Adet", deficit: "0", cost: "₺1.050", status: "Sınırda" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      <BOMDetailHeader title="Alüminyum Gövde A1" />

      <main className="flex-1 p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <BOMSummaryCards />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BOMItemsTable items={bomItems} />
            </div>

            <div className="space-y-6">
              <BOMMRPSidebar />
              
              <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-outlined text-primary font-black">info</span>
                <div>
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-1 font-sans">Tedarik Uyarısı</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-bold italic">
                    Alüminyum fiyatlarında gelecek ay %5 artış öngörülüyor. Stok artırımı önerilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <BOMStatsGrid />
        </div>
      </main>
    </div>
  );
}
