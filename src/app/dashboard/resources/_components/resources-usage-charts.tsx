"use client";

import React from "react";

const kaynaklarData = [
  {
    title: "CNC İşleme Merkezi #04",
    subtitle: "Vardiya A & B • Metal Departmanı",
    percent: 112.5,
    hours: "18 / 16 Saat",
    color: "red-500",
    bar: "red-500",
    critical: true,
    criticalText: "Kritik: Kapasite aşımı saptandı",
    icon: "priority_high",
  },
  {
    title: "Robotik Kol #01 (Montaj)",
    subtitle: "Vardiya A • Montaj Hattı",
    percent: 84.0,
    hours: "20.2 / 24 Saat",
    color: "blue-600",
    bar: "blue-600",
    critical: false,
    warning: false,
  },
  {
    title: "Kalite Kontrol İstasyonu #02",
    subtitle: "Sürekli Akış • Test Merkezi",
    percent: 94.5,
    hours: "22.7 / 24 Saat",
    color: "amber-500",
    bar: "amber-500",
    warning: true,
    warningText: "Uyarı: Sınıra yakın",
    icon: "info",
  },
];

export function ResourcesUsageCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
            <h3 className="text-base font-bold text-slate-800">
              Kaynak Bazlı Doluluk Oranları
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider">
                Makineler
              </button>
              <button className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider hover:bg-slate-200 transition-colors">
                İşçilik
              </button>
            </div>
          </div>
          <div className="p-6 space-y-6">
            {kaynaklarData.map((k, i) => (
              <div className="space-y-2" key={i}>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {k.title}
                    </p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">
                      {k.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold text-${k.color}`}>
                      %{k.percent}
                    </span>
                    <p className="text-[10px] text-slate-400">{k.hours}</p>
                  </div>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${k.bar}`}
                    style={{
                      width: `${k.percent > 100 ? 100 : k.percent}%`,
                    }}
                  ></div>
                </div>
                {k.critical && (
                  <div className="flex items-center gap-1 text-red-500 text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[12px]">
                      {k.icon}
                    </span>
                    {k.criticalText}
                  </div>
                )}
                {k.warning && (
                  <div className="flex items-center gap-1 text-amber-500 text-[10px] font-bold">
                    <span className="material-symbols-outlined text-[12px]">
                      {k.icon}
                    </span>
                    {k.warningText}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-base font-bold text-slate-800">
                Kapasite Trendi (Haftalık)
              </h3>
              <p className="text-xs text-slate-400">
                Planlanan Yük vs Kullanılabilir Kapasite
              </p>
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded text-xs font-bold py-1 px-3 focus:ring-primary/20 cursor-pointer text-slate-700">
              <option>Son 7 Gün</option>
              <option>Son 14 Gün</option>
              <option>Aylık</option>
            </select>
          </div>
          <div className="relative h-60 w-full flex flex-col justify-end">
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              <div className="w-full border-t border-red-500/30 border-dashed relative">
                <span className="absolute right-0 -top-4 text-[10px] text-red-500 font-bold uppercase tracking-tight">
                  Limit (100%)
                </span>
              </div>
              <div className="w-full border-t border-slate-100"></div>
              <div className="w-full border-t border-slate-100"></div>
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative h-45 w-full mt-auto">
              {/* Basit bir SVG alan grafiği örneği */}
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 40"
              >
                <path
                  d="M0,35 Q10,32 20,28 T40,22 T60,18 T80,10 T100,12 L100,40 L0,40 Z"
                  fill="url(#chartGradient)"
                ></path>
                <path
                  d="M0,35 Q10,32 20,28 T40,22 T60,18 T80,10 T100,12"
                  fill="none"
                  stroke="#2b6cee"
                  strokeLinecap="round"
                  strokeWidth="0.8"
                ></path>
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2b6cee"
                      stopOpacity="0.3"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#2b6cee"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-[11px] font-bold text-slate-400">
                Pzt
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Sal
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Çar
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Per
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Cum
              </span>
              <span className="text-[11px] font-bold text-primary">
                Cmt
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                Paz
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-red-50 rounded-xl border border-red-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <span className="material-symbols-outlined text-xl">error</span>
            <h4 className="text-sm font-bold uppercase tracking-wide">
              Kritik Aşımlar
            </h4>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-red-600 text-sm">
                  precision_manufacturing
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Torna #3 - Tezgah
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  Kapasite: %124 • +4 Saat Fazla Mesai
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-red-600 text-sm">
                  person
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Mehmet S. - Kaynakçı
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  Kapasite: %108 • +2 İş Emri Beklemede
                </p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2 bg-red-600 text-white text-[10px] font-bold rounded uppercase hover:bg-red-700 transition-colors">
            Yeniden Planla
          </button>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="material-symbols-outlined text-xl">
              tips_and_updates
            </span>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              AI Önerileri
            </h4>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-primary space-y-2">
            <p className="text-xs font-semibold leading-relaxed text-slate-700">
              CNC #04 üzerindeki 4 saatlik yükü Torna #2&apos;ye kaydırarak
              verimliliği %12 artırabilirsiniz.
            </p>
            <button className="text-[10px] text-primary font-bold hover:underline">
              Uygula (Otomatik Planla)
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h4 className="text-sm font-bold mb-4 text-slate-800">
            Günün Özeti
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">
                Bekleyen İş Emirleri
              </span>
              <span className="font-bold text-slate-800">24 Adet</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">
                Planlanan Bakım
              </span>
              <span className="font-bold text-amber-600">2 Makine</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">
                Ortalama Duruş
              </span>
              <span className="font-bold text-slate-800">12 Dakika</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
