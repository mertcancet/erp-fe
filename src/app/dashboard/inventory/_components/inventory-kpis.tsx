"use client";

import React from "react";

export function InventoryKPIs() {
  const kpis = [
    {
      label: "Toplam Stok",
      value: "4.280",
      unit: "SKU",
      trend: "+12% geçen ay",
      trendColor: "text-emerald-500",
      icon: "inventory_2",
      iconColor: "text-primary",
      iconBg: "bg-primary/10"
    },
    {
      label: "Kritik Stok",
      value: "84",
      unit: "",
      trend: "Yeniden sipariş noktasına yakın",
      trendColor: "text-slate-400",
      icon: "priority_high",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10"
    },
    {
      label: "Minimum Altında",
      value: "22",
      unit: "",
      trend: "Acil tedarik gerekli",
      trendColor: "text-red-500",
      icon: "report_problem",
      iconColor: "text-red-500",
      iconBg: "bg-red-500/10",
      valueColor: "text-red-500"
    },
    {
      label: "Üretimi Etkileyen",
      value: "12",
      unit: "",
      trend: "Aktif iş emrine bağlı eksikler",
      trendColor: "text-slate-400",
      icon: "precision_manufacturing",
      iconColor: "text-slate-600",
      iconBg: "bg-slate-100"
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, i) => (
        <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{kpi.label}</p>
            <h3 className={`text-2xl font-black ${kpi.valueColor || 'text-navy-text'}`}>{kpi.value} {kpi.unit && <span className="text-xs font-bold text-slate-400">{kpi.unit}</span>}</h3>
            <p className={`text-[11px] ${kpi.trendColor} flex items-center gap-1 font-bold`}>
              {kpi.label === "Toplam Stok" && <span className="material-symbols-outlined text-xs">trending_up</span>}
              {kpi.trend}
            </p>
          </div>
          <div className={`p-2 ${kpi.iconBg} rounded-lg`}>
            <span className={`material-symbols-outlined ${kpi.iconColor} text-xl`}>{kpi.icon}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
