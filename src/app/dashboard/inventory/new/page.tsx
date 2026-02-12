"use client";

import React from "react";
import { NewProductHeader } from "./_components/new-product-header";
import { NewProductBasicInfo } from "./_components/new-product-basic-info";
import { NewProductStockInventory } from "./_components/new-product-stock-inventory";
import { NewProductProcurementPlanning } from "./_components/new-product-procurement-planning";
import { NewProductCostInfo } from "./_components/new-product-cost-info";
import { NewProductProductionInfo } from "./_components/new-product-production-info";
import { NewProductSummarySidebar } from "./_components/new-product-summary-sidebar";

export default function NewProductPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      <NewProductHeader />

      <main className="flex-1 p-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-8 space-y-6 pb-12">
            <NewProductBasicInfo />
            <NewProductStockInventory />
            <NewProductProcurementPlanning />
            <NewProductCostInfo />
            <NewProductProductionInfo />
          </div>

          <NewProductSummarySidebar />
        </div>
      </main>
    </div>
  );
}
