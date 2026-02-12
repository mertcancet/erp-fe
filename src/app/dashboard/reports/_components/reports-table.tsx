"use client";

import React from "react";

export function ReportsTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-100 card-shadow overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h3 className="font-bold text-lg text-navy-text">
          Son Oluşturulan Raporlar
        </h3>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            search
          </span>
          <input
            className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs w-64 focus:ring-1 focus:ring-primary focus:bg-white transition-all"
            placeholder="Rapor ara..."
            type="text"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Rapor Tanımı</th>
              <th className="px-6 py-4">Tip</th>
              <th className="px-6 py-4">Tarih</th>
              <th className="px-6 py-4">Durum</th>
              <th className="px-6 py-4">Veri Kaynağı</th>
              <th className="px-6 py-4 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-chart-blue/10 text-chart-blue flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">
                      bar_chart
                    </span>
                  </div>
                  <span className="font-semibold text-navy-text">
                    Haftalık Verimlilik Özeti
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-500">Analitik</td>
              <td className="px-6 py-4 text-slate-500">Bugün, 09:42</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                  Tamamlandı
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500">Sistem-1, MES</td>
              <td className="px-6 py-4 text-right">
                <button className="text-primary hover:underline font-bold text-xs">
                  Görüntüle
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-chart-orange/10 text-chart-orange flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">
                      inventory
                    </span>
                  </div>
                  <span className="font-semibold text-navy-text">
                    Kritik Stok Uyarı Listesi
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-500">Envanter</td>
              <td className="px-6 py-4 text-slate-500">Bugün, 08:15</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                  Tamamlandı
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500">WMS Veritabanı</td>
              <td className="px-6 py-4 text-right">
                <button className="text-primary hover:underline font-bold text-xs">
                  Görüntüle
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">
                      settings_suggest
                    </span>
                  </div>
                  <span className="font-semibold text-navy-text">
                    Makine Arıza Tahminleme
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-500">Tahminleme</td>
              <td className="px-6 py-4 text-slate-500">Dün, 17:30</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="size-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-[10px] font-bold text-primary uppercase">
                    İşleniyor
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-500">IoT Sensör Verileri</td>
              <td className="px-6 py-4 text-right">
                <button
                  className="text-slate-400 cursor-not-allowed font-bold text-xs"
                  disabled
                >
                  Bekleyiniz
                </button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-red-50 text-red-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">
                      report_problem
                    </span>
                  </div>
                  <span className="font-semibold text-navy-text">
                    Vardiya Kayıp Analizi
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-slate-500">Performans</td>
              <td className="px-6 py-4 text-slate-500">Dün, 14:20</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase">
                  Hata Oluştu
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500">Manual Girişler</td>
              <td className="px-6 py-4 text-right">
                <button className="text-primary hover:underline font-bold text-xs">
                  Tekrar Dene
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-slate-50 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          Toplam 24 rapor gösteriliyor
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-bold transition-colors text-slate-600">
            Önceki
          </button>
          <button className="px-3 py-1 rounded border border-slate-200 bg-primary text-white text-xs font-bold transition-colors">
            1
          </button>
          <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-bold transition-colors text-slate-600">
            2
          </button>
          <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 text-xs font-bold transition-colors text-slate-600">
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
}
