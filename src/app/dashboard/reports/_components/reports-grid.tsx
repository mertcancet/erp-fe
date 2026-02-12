"use client";

import React from "react";

export function ReportsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Üretim Planı Raporu */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 card-shadow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-navy-text">Üretim Planı Raporu</h3>
            <p className="text-xs text-slate-500">
              Planlanan vs Gerçekleşen
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
              title="PDF Dışa Aktar"
            >
              <span className="material-symbols-outlined text-xl">
                picture_as_pdf
              </span>
            </button>
            <button
              className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
              title="Excel Dışa Aktar"
            >
              <span className="material-symbols-outlined text-xl">
                description
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-[220px] flex items-end justify-between gap-2 px-2 mt-4">
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-40">
              <div
                className="bg-chart-blue/20 w-1/2 h-full rounded-t-sm"
                title="Plan: 100"
              ></div>
              <div
                className="bg-chart-blue w-1/2 h-[85%] rounded-t-sm"
                title="Gerçek: 85"
              ></div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Pzt
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-40">
              <div className="bg-chart-blue/20 w-1/2 h-[90%] rounded-t-sm"></div>
              <div className="bg-chart-blue w-1/2 h-[95%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Sal
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-40">
              <div className="bg-chart-blue/20 w-1/2 h-full rounded-t-sm"></div>
              <div className="bg-chart-blue w-1/2 h-[92%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Çar
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-40">
              <div className="bg-chart-blue/20 w-1/2 h-full rounded-t-sm"></div>
              <div className="bg-chart-blue w-1/2 h-[70%] rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Per
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-40">
              <div className="bg-chart-blue/20 w-1/2 h-full rounded-t-sm"></div>
              <div className="bg-chart-blue w-1/2 h-full rounded-t-sm"></div>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase">
              Cum
            </span>
          </div>
        </div>
        <div className="mt-4 flex gap-4 border-t border-slate-50 pt-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-chart-blue/20"></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase">
              PLANLANAN
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-chart-blue"></span>
            <span className="text-[10px] font-bold text-slate-500 uppercase">
              GERÇEKLEŞEN
            </span>
          </div>
        </div>
      </div>

      {/* Kapasite Kullanım Raporu */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 card-shadow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-navy-text">
              Kapasite Kullanım Raporu
            </h3>
            <p className="text-xs text-slate-500">
              Makine Grupları Isı Haritası
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
              <span className="material-symbols-outlined text-xl">
                picture_as_pdf
              </span>
            </button>
            <button className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
              <span className="material-symbols-outlined text-xl">
                description
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-2 mt-4 overflow-hidden rounded-lg">
          <div className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold" title="12%">M1</div>
          <div className="heatmap-cell bg-chart-orange/90 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="92%">M2</div>
          <div className="heatmap-cell bg-chart-blue/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="75%">M3</div>
          <div className="heatmap-cell bg-slate-50 rounded h-10 flex items-center justify-center text-[10px] font-bold" title="5%">M4</div>
          <div className="heatmap-cell bg-chart-orange/70 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="88%">M5</div>
          <div className="heatmap-cell bg-chart-blue/40 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="55%">M6</div>
          <div className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold" title="15%">M7</div>
          <div className="heatmap-cell bg-chart-orange/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="78%">M8</div>
          <div className="heatmap-cell bg-chart-blue/20 rounded h-10 flex items-center justify-center text-[10px] font-bold text-navy-text" title="35%">M9</div>
          <div className="heatmap-cell bg-chart-orange/95 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="98%">M10</div>
          <div className="heatmap-cell bg-chart-blue/50 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="65%">M11</div>
          <div className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold" title="22%">M12</div>
          <div className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold" title="8%">M13</div>
          <div className="heatmap-cell bg-chart-blue/30 rounded h-10 flex items-center justify-center text-[10px] font-bold text-navy-text" title="52%">M14</div>
          <div className="heatmap-cell bg-chart-orange/80 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="91%">M15</div>
          <div className="heatmap-cell bg-chart-blue/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white" title="74%">M16</div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-slate-500 uppercase">
          <span>Düşük</span>
          <div className="h-1.5 flex-1 mx-4 bg-gradient-to-r from-slate-100 via-chart-blue to-chart-orange rounded-full"></div>
          <span>Yüksek</span>
        </div>
      </div>

      {/* Malzeme İhtiyaç Raporu */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 card-shadow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-navy-text">
              Malzeme İhtiyaç Raporu
            </h3>
            <p className="text-xs text-slate-500">
              Stok Durumu ve Eksik Analizi
            </p>
          </div>
          <div className="flex gap-2">
            <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
              <span className="material-symbols-outlined text-xl">
                picture_as_pdf
              </span>
            </button>
            <button className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors">
              <span className="material-symbols-outlined text-xl">
                description
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-4">
          <div className="relative size-44">
            <svg
              className="size-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                className="text-slate-50"
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="currentColor"
                strokeWidth="12"
              ></circle>
              <circle
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="#2563eb"
                strokeDasharray="251.2"
                strokeDashoffset="75.36"
                strokeLinecap="round"
                strokeWidth="12"
              ></circle>
              <circle
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="#f97316"
                strokeDasharray="251.2"
                strokeDashoffset="200.96"
                strokeLinecap="round"
                strokeWidth="12"
              ></circle>
              <circle
                cx="50"
                cy="50"
                fill="transparent"
                r="40"
                stroke="#ef4444"
                strokeDasharray="251.2"
                strokeDashoffset="238.64"
                strokeLinecap="round"
                strokeWidth="12"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-navy-text">1.2k</span>
              <span className="text-[10px] text-slate-500 font-bold uppercase">
                Toplam Kalem
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-50 pt-4">
          <div className="text-center">
            <div className="text-xs font-bold text-chart-blue">70%</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              Stokta
            </div>
          </div>
          <div className="text-center border-x border-slate-100">
            <div className="text-xs font-bold text-chart-orange">20%</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              Kritik
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-red-500">10%</div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              Eksik
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
