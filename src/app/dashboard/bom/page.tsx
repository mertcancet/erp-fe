"use client";

import React from "react";
import { BOMHeader } from "./_components/bom-header";
import { BOMFilters } from "./_components/bom-filters";
import { BOMTable, Product } from "./_components/bom-table";
import { BOMSidebar } from "./_components/bom-sidebar";

export default function BOMPage() {
  const products: Product[] = [
    { id: "1", code: "PRD-001", name: "Endüstriyel Motor - V2", leadTime: "12 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "2", code: "PRD-002", name: "Kontrol Paneli (Standard)", leadTime: "5 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "3", code: "PRD-003", name: "Hidrolik Pompa Sistemi", leadTime: "8 Gün", status: "TASLAK", statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
    { id: "4", code: "PRD-004", name: "Sensör Grubu A-12", leadTime: "3 Gün", status: "AKTİF", statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { id: "5", code: "PRD-005", name: "Bağlantı Şasisi (Paslanmaz)", leadTime: "15 Gün", status: "PASİF", statusColor: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" },
  ];

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden">
      <BOMHeader />

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          <BOMFilters />
          <BOMTable products={products} />
        </div>
        <BOMSidebar />
      </div>
    </div>
  );
}
