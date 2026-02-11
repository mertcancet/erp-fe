"use client";

import React from "react";
import Link from "next/link";

export default function AddMachinePage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      {/* Header Section */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/resources"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-primary"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <nav className="flex text-[10px] text-slate-400 mb-1 uppercase font-bold tracking-wider">
                <span>Üretim Planlama</span>
                <span className="mx-2">/</span>
                <span>Kaynak Yönetimi</span>
                <span className="mx-2">/</span>
                <span className="text-primary">Yeni Makine</span>
              </nav>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">
                Yeni Makine Ekle
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/resources"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
            >
              İptal
            </Link>
            <button className="px-6 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:bg-primary/90 shadow-sm transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">save</span>
              Kaydet
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Section 1: Temel Bilgiler */}
          <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">settings_suggest</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Temel Bilgiler</h2>
                <p className="text-xs text-slate-500 font-medium">Makine kimliği ve konumlandırması</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Makine Adı</label>
                  <input
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                    placeholder="Örn: CNC Torna L-450"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Makine Kodu</label>
                  <input
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm uppercase"
                    placeholder="M-CNC-001"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">İş Merkezi</label>
                  <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer">
                    <option value="">Seçiniz...</option>
                    <option value="1">Talaşlı İmalat Merkezi</option>
                    <option value="2">Boyahane</option>
                    <option value="3">Montaj Hattı A</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Kapasite Bilgileri */}
          <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">speed</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Kapasite Bilgileri</h2>
                <p className="text-xs text-slate-500 font-medium">Üretim hızı ve verimlilik katsayıları</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Günlük Çalışma Saati</label>
                  <div className="relative">
                    <input
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                      placeholder="8"
                      step="0.5"
                      type="number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-slate-400 text-xs font-bold uppercase">saat</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Verimlilik (%)</label>
                  <div className="relative">
                    <input
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                      placeholder="85"
                      type="number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-slate-400 text-xs font-bold">%</span>
                    </div>
                  </div>
                </div>
                <div className="relative group space-y-2">
                  <label className="flex items-center text-sm font-bold text-slate-700">
                    Hesaplanan Günlük Kapasite
                    <span className="material-symbols-outlined text-xs text-slate-400 ml-1 cursor-help">info</span>
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block w-48 p-3 bg-slate-800 text-white text-[10px] rounded-lg shadow-lg z-20 font-medium leading-relaxed">
                      Hesaplama: (Günlük Çalışma Saati × Verimlilik %) formülü ile otomatik hesaplanır.
                    </div>
                  </label>
                  <input
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 font-bold text-sm cursor-not-allowed"
                    readOnly
                    type="text"
                    value="6.80 Saat"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Maliyet & Planlama */}
          <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">payments</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">Maliyet & Planlama</h2>
                <p className="text-xs text-slate-500 font-medium">Birim maliyet ve operasyonel limitler</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Saatlik Maliyet</label>
                  <div className="relative">
                    <input
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                      placeholder="125"
                      type="number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-slate-400 text-xs font-bold uppercase">₺/sa</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Aynı Anda İş Sayısı</label>
                  <input
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                    min="1"
                    type="number"
                    defaultValue="1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Kurulum Süresi</label>
                  <div className="relative">
                    <input
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                      placeholder="30"
                      type="number"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-slate-400 text-xs font-bold uppercase">dk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Illustration/Info */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-32 h-32 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-primary/40">
                precision_manufacturing
              </span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Üretim Kapasitesi Notu</h3>
              <p className="text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
                Eklediğiniz her yeni makine, üretim çizelgeleme motoru tarafından otomatik olarak
                taranacak ve uygun iş merkezlerine atanacaktır. Verimlilik değerlerini gerçekçi
                girmeniz, teslimat sürelerinizin doğruluğunu artıracaktır.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest border-t border-slate-200 mt-12 mb-6">
        <p>© 2026 Endüstriyel Kaynak Yönetim Sistemi. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
