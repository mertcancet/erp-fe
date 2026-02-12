"use client";

import React from "react";
import { OrderHeader } from "./_components/order-header";
import { OrderKPIs } from "./_components/order-kpis";
import { OrderGanttChart } from "./_components/order-gantt-chart";
import { OrderOperationsTable } from "./_components/order-operations-table";

export default function ProductionOrderDetailPage() {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-950">
      <OrderHeader />

      <main className="p-8 space-y-8 overflow-y-auto">
        <OrderKPIs />
        <OrderGanttChart />
        <OrderOperationsTable />
      </main>
    </div>
  );
}
