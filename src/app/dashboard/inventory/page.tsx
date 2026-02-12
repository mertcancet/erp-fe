"use client";

import React, { useState } from "react";
import StockDetailModal from "@/components/StockDetailModal";
import { InventoryHeader } from "./_components/inventory-header";
import { InventoryKPIs } from "./_components/inventory-kpis";
import { InventoryFilters } from "./_components/inventory-filters";
import { InventoryTable, StockItem } from "./_components/inventory-table";
import { InventoryWarnings } from "./_components/inventory-warnings";
import { InventoryWarehouseStatus } from "./_components/inventory-warehouse-status";

export default function InventoryPage() {
  const [selectedStock, setSelectedStock] = useState<StockItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: StockItem) => {
    setSelectedStock(item);
    setIsModalOpen(true);
  };

  const stockData: StockItem[] = [
    {
      code: "ST-882-X9",
      name: "Alüminyum Profil 40x40 (1m)",
      type: "Hammadde",
      current: "1,240",
      reserved: "450",
      available: "790",
      minStock: "200",
      status: "Yeterli",
      statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      code: "ST-412-K2",
      name: "Servo Motor 750W (RS485)",
      type: "Hammadde",
      current: "12",
      reserved: "8",
      available: "4",
      minStock: "10",
      status: "Eksik",
      statusColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    {
      code: "ST-001-A1",
      name: "Kontrol Kartı Montajı v2",
      type: "Yarı Mamul",
      current: "45",
      reserved: "12",
      available: "33",
      minStock: "40",
      status: "Kritik",
      statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      code: "ST-990-Z3",
      name: "Somun M6 Paslanmaz",
      type: "Hammadde",
      current: "5,000",
      reserved: "1,200",
      available: "3,800",
      minStock: "500",
      status: "Yeterli",
      statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      code: "ST-551-M2",
      name: "Sensör Kablosu (2m)",
      type: "Hammadde",
      current: "112",
      reserved: "20",
      available: "92",
      minStock: "100",
      status: "Kritik",
      statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      <InventoryHeader />

      <main className="p-8 space-y-6">
        <InventoryKPIs />
        <InventoryFilters />
        <InventoryTable stockData={stockData} onRowClick={handleOpenModal} />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <InventoryWarnings />
          <InventoryWarehouseStatus />
        </section>
      </main>

      <StockDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        stockItem={selectedStock} 
      />
    </div>
  );
}
