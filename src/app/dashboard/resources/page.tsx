import React from "react";
import { ResourcesHeader } from "./_components/resources-header";
import { ResourcesKPIs } from "./_components/resources-kpis";
import { ResourcesUsageCharts } from "./_components/resources-usage-charts";
import { ResourcesTable } from "./_components/resources-table";

export default function KaynaklarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <ResourcesHeader />
      <main className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
        <ResourcesKPIs />
        <ResourcesUsageCharts />
        <ResourcesTable />

        <footer className="text-center pt-8">
          <p className="text-sm text-slate-400">
            Planlama modülünde yapılan değişiklikler üretim çizelgesini gerçek
            zamanlı günceller.
          </p>
        </footer>
      </main>
    </div>
  );
}
