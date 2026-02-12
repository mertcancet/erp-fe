"use client";

import React from "react";
import { AddMachineHeader } from "./_components/add-machine-header";
import { AddMachineForm } from "./_components/add-machine-form";

export default function AddMachinePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <AddMachineHeader />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <AddMachineForm />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest border-t border-slate-200 mt-12 mb-6">
        <p>© 2026 Endüstriyel Kaynak Yönetim Sistemi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
