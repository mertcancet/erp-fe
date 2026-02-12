"use client";

import React from "react";
import { ReportsHeader } from "./_components/reports-header";
import { ReportsGrid } from "./_components/reports-grid";
import { ReportsTable } from "./_components/reports-table";
import { ReportsFooter } from "./_components/reports-footer";

export default function ReportsPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      <ReportsHeader />

      <main className="p-8 space-y-8">
        <ReportsGrid />
        <ReportsTable />
      </main>

      <ReportsFooter />
    </div>
  );
}
