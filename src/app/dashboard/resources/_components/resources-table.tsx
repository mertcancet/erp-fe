"use client";

import React from "react";

export function ResourcesTable() {
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Kaynak ara (Makine, Personel...)"
            type="text"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:ring-primary/20">
            <option>Tüm Türler</option>
            <option>Makine</option>
            <option>İş Gücü</option>
          </select>
          <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 focus:ring-primary/20">
            <option>Durum: Tümü</option>
            <option>Aktif</option>
            <option>Pasif</option>
          </select>
          <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-200">
            <span className="material-symbols-outlined text-slate-500 text-lg">
              filter_list
            </span>
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Kaynak Adı
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Kaynak Türü
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                İş Merkezi
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Kapasite
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Maliyet/Saat
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Durum
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      precision_manufacturing
                    </span>
                  </div>
                  <span className="font-medium text-sm">
                    CNC Freze - DMG Mori 50
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  Makine
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                Metal İşleme - A1
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>18/24 Saat</span>
                    <span>75%</span>
                  </div>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium">₺450,00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Aktif
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-lg">
                      person
                    </span>
                  </div>
                  <span className="font-medium text-sm">
                    Operatör - Mehmet Can
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                  İş Gücü
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                Montaj Hattı - B2
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>8/8 Saat</span>
                    <span>100%</span>
                  </div>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium">₺120,00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Aktif
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-lg">
                      precision_manufacturing
                    </span>
                  </div>
                  <span className="font-medium text-sm">
                    Enjeksiyon Makinesi - KM-200
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  Makine
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                Plastik Kalıp
              </td>
              <td className="px-6 py-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0/24 Saat</span>
                    <span>0%</span>
                  </div>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-slate-300"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium">₺380,00</td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  Pasif
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          Toplam 124 kayıttan 1-10 arası gösteriliyor
        </p>
        <div className="flex items-center gap-2">
          <button
            className="p-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50"
            disabled
          >
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button className="w-8 h-8 rounded bg-primary text-white text-xs font-bold shadow-sm">
            1
          </button>
          <button className="w-8 h-8 rounded hover:bg-slate-200 text-xs font-medium">
            2
          </button>
          <button className="w-8 h-8 rounded hover:bg-slate-200 text-xs font-medium">
            3
          </button>
          <span className="text-xs text-slate-400">...</span>
          <button className="w-8 h-8 rounded hover:bg-slate-200 text-xs font-medium">
            13
          </button>
          <button className="p-1 border border-slate-200 rounded hover:bg-white">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
