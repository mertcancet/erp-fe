import React from "react";
import Link from "next/link";

// Material Symbols için Google Fonts linkini _app veya layout dosyanıza eklemelisiniz.
// Bu örnekte ikonlar için <span className="material-symbols-outlined">icon_name</span> kullanıldı.

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
    color: "primary",
    bar: "primary",
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

export default function KaynaklarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
        <div className="flex items-center gap-6">
          <h2 className="text-lg font-bold text-slate-800">
            Kaynaklar ve Kapasite
          </h2>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-500"
              placeholder="Makine veya personel ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/dashboard/resources/add-workforce">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-xs font-bold">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">
                person_add
              </span>
              Yeni İş Gücü Ekle
            </button>
          </Link>
          <Link href="/dashboard/resources/add-machine">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              Yeni Makine Ekle
            </button>
          </Link>
          <div className="h-6 w-px bg-slate-200 mx-1"></div>
          <button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-[22px]">
              notifications
            </span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
            <span className="material-symbols-outlined text-sm">refresh</span>
            Yenile
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartlar */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-primary transition-colors shadow-sm">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Ortalama Kullanım
              </p>
              <h3 className="text-2xl font-extrabold text-slate-800">%78.4</h3>
              <p className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                +2.1% (Son 24 saat)
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">
                query_stats
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-red-500 transition-colors shadow-sm">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Kapasite Aşımı
              </p>
              <h3 className="text-2xl font-extrabold text-red-500">4 Kaynak</h3>
              <p className="text-xs font-medium text-slate-400 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  warning
                </span>
                Hemen müdahale gerekli
              </p>
            </div>
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">error</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-primary transition-colors shadow-sm">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">
                Aktif Kaynaklar
              </p>
              <h3 className="text-2xl font-extrabold text-slate-800">
                142 Ünite
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  verified
                </span>
                Tam kapasite çalışıyor
              </p>
            </div>
            <div className="w-12 h-12 bg-slate-50 text-slate-500 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">
                precision_manufacturing
              </span>
            </div>
          </div>
        </div>
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

        {/* Yeni Eklenen Kaynak Tablosu Bölümü */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-8">
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
