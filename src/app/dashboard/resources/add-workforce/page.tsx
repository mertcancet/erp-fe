"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddWorkforcePage() {
  const router = useRouter();

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/resources"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-slate-800">Yeni İş Gücü Ekle</h1>
              <p className="text-sm text-slate-500">
                Üretim planlama için yeni personel kaydı oluşturun.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/resources"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Vazgeç
            </Link>
            <button className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">save</span>
              Personeli Kaydet
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section 1: Temel Bilgiler */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <h2 className="text-lg font-bold text-slate-800">Temel Bilgiler</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">
                  Personel Adı Soyadı
                </label>
                <input
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Örn: Ahmet Yılmaz"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">
                  Personel Kodu
                </label>
                <input
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="P-10042"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 block">Rol</label>
                  <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-slate-700">
                    <option>Operatör</option>
                    <option>Tekniker</option>
                    <option>Ustabaşı</option>
                    <option>Kalite Kontrol</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 block">
                    İş Merkezi
                  </label>
                  <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-slate-700">
                    <option>Montaj Hattı A</option>
                    <option>Paketleme Ünitesi</option>
                    <option>CNC Birimi</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Çalışma & Maliyet */}
          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <h2 className="text-lg font-bold text-slate-800">Çalışma & Maliyet</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">
                  Günlük Çalışma Saati
                </label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="8"
                    type="number"
                  />
                  <span className="absolute right-3 top-2.5 text-sm text-slate-400">Saat</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">Vardiya</label>
                <div className="flex flex-wrap gap-2">
                  <label className="relative flex-1">
                    <input defaultChecked className="peer sr-only" name="shift" type="radio" />
                    <div className="p-3 text-center border rounded-lg border-slate-200 bg-slate-50 peer-checked:border-primary peer-checked:bg-primary/5 cursor-pointer transition-all">
                      <span className="text-xs font-bold block uppercase text-slate-600">
                        Sabah
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">08:00 - 16:00</span>
                    </div>
                  </label>
                  <label className="relative flex-1">
                    <input className="peer sr-only" name="shift" type="radio" />
                    <div className="p-3 text-center border rounded-lg border-slate-200 bg-slate-50 peer-checked:border-primary peer-checked:bg-primary/5 cursor-pointer transition-all">
                      <span className="text-xs font-bold block uppercase text-slate-600">
                        Akşam
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">16:00 - 00:00</span>
                    </div>
                  </label>
                  <label className="relative flex-1">
                    <input className="peer sr-only" name="shift" type="radio" />
                    <div className="p-3 text-center border rounded-lg border-slate-200 bg-slate-50 peer-checked:border-primary peer-checked:bg-primary/5 cursor-pointer transition-all">
                      <span className="text-xs font-bold block uppercase text-slate-600">
                        Gece
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">00:00 - 08:00</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">
                  Saatlik İşçilik Maliyeti
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400">₺</span>
                  <input
                    className="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="250.00"
                    type="text"
                  />
                </div>
                <p className="text-[10px] text-slate-400 font-medium">
                  Brüt maliyet üzerinden hesaplanır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Yetkinlikler (Full Width) */}
          <section className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">settings_suggest</span>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-800">Yetkinlikler & Makineler</h2>
                <p className="text-xs text-slate-500 font-medium">
                  Personelin yetkili olduğu makine ve ekipmanları seçin.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Multi-select Items */}
              {[
                { name: "CNC Torna V1", dept: "Metal İşleme" },
                { name: "Lazer Kesim X2", dept: "Kesim Ünitesi", checked: true },
                { name: "Enjeksiyon Mak.", dept: "Plastik Birimi" },
                { name: "Robotik Kol R-4", dept: "Montaj Hattı", checked: true },
                { name: "Boya Kabini", dept: "Yüzey İşlem" },
                { name: "Paketleme V3", dept: "Lojistik" },
              ].map((item, idx) => (
                <label
                  key={idx}
                  className={`relative flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all hover:border-primary/50 ${
                    item.checked ? "border-primary/30 bg-primary/5" : "border-slate-100"
                  }`}
                >
                  <input
                    defaultChecked={item.checked}
                    className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                    type="checkbox"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-700">{item.name}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                      {item.dept}
                    </span>
                  </div>
                </label>
              ))}
              <button className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-slate-200 rounded-xl hover:border-primary/50 text-slate-400 hover:text-primary transition-all group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  add
                </span>
                <span className="text-sm font-bold">Yeni Makine Tanımla</span>
              </button>
            </div>
          </section>
        </div>

        {/* Additional Note */}
        <div className="mt-8 flex items-start gap-3 bg-slate-100 p-4 rounded-xl border border-slate-200">
          <span className="material-symbols-outlined text-slate-400 text-lg">info</span>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Personel kaydı tamamlandıktan sonra vardiya takvimine otomatik olarak dahil edilecektir.
            Maliyet hesaplamaları aylık planlama ekranında saatlik ücret baz alınarak
            gerçekleştirilecektir.
          </p>
        </div>
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
