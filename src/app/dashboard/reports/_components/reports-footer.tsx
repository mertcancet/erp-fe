"use client";

import React from "react";

export function ReportsFooter() {
  return (
    <footer className="mt-auto p-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-medium bg-slate-50/30">
      <p>© 2024 Üretim Planlama Motoru v4.2.1</p>
      <div className="flex gap-6">
        <a className="hover:text-primary transition-colors" href="#">
          Gizlilik Politikası
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Kullanım Şartları
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Destek
        </a>
      </div>
    </footer>
  );
}
