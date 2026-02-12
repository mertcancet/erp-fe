"use client";

import React from "react";
import { AddWorkforceHeader } from "./_components/add-workforce-header";
import { AddWorkforceForm } from "./_components/add-workforce-form";

export default function AddWorkforcePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <AddWorkforceHeader />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <AddWorkforceForm />
      </main>

      {/* Success Feedback (Hidden by default) */}
      <div className="fixed bottom-6 right-6 hidden">
        <div className="bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700">
          <div className="bg-primary p-1 rounded-full text-white">
            <span className="material-symbols-outlined text-xs">check</span>
          </div>
          <span className="text-sm font-bold">Personel başarıyla eklendi!</span>
        </div>
      </div>
    </div>
  );
}
