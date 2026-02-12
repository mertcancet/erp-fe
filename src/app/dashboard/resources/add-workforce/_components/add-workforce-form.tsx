"use client";

import React from "react";

export function AddWorkforceForm() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {/* Section 1: Personel Kimlik Bilgileri */}
      <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">badge</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Personel Kimlik Bilgileri</h2>
            <p className="text-xs text-slate-500 font-medium">Temel personel kayıt detayları</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Ad Soyad</label>
              <input
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                placeholder="Örn: Ahmet Yılmaz"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Personel No</label>
              <input
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm uppercase"
                placeholder="P-2024-001"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Departman / Hat</label>
              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer">
                <option value="">Seçiniz...</option>
                <option value="1">Metal İşleme Hattı</option>
                <option value="2">Kalite Kontrol Birimi</option>
                <option value="3">Paketleme & Sevkiyat</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Çalışma Düzeni & Beceriler */}
      <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">psychology</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Çalışma Düzeni & Beceriler</h2>
            <p className="text-xs text-slate-500 font-medium">Vardiya ve uzmanlık alanları</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Vardiya Tipi</label>
              <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer">
                <option value="A">Vardiya A (08:00 - 16:00)</option>
                <option value="B">Vardiya B (16:00 - 00:00)</option>
                <option value="C">Vardiya C (00:00 - 08:00)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Uzmanlık Alanı</label>
              <input
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                placeholder="Örn: CNC Operatörü, Kaynakçı"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Becerik Seviyesi (Scale 1-5)</label>
              <input
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                max="5"
                min="1"
                type="number"
                defaultValue="3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Maliyet & Kapasite */}
      <section className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">payments</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Maliyet & Kapasite</h2>
            <p className="text-xs text-slate-500 font-medium">Birim işçilik maliyeti ve sınırlamalar</p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Saatlik İşçilik Maliyeti</label>
                <div className="relative">
                  <input
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                    placeholder="75"
                    type="number"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-slate-400 text-xs font-bold uppercase">₺/sa</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100 italic">
                <span className="material-symbols-outlined text-amber-600 text-sm">info</span>
                <p className="text-[11px] text-amber-700 font-medium leading-tight">
                  Bu değer, iş merkezi bazlı birim üretim maliyeti hesaplamalarında kullanılır.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Fazla Mesai İzni</h4>
                  <p className="text-xs text-slate-400 font-medium">Otomatik planlamada dikkate alınır</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                    id="toggle"
                    name="toggle"
                    type="checkbox"
                  />
                  <label
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"
                    htmlFor="toggle"
                  ></label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Çoklu İstasyon Yetkinliği</h4>
                  <p className="text-xs text-slate-400 font-medium">Aynı anda birden fazla makine yönetebilir</p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer outline-none"
                    id="toggle2"
                    name="toggle2"
                    type="checkbox"
                  />
                  <label
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"
                    htmlFor="toggle2"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Setup Progress Card */}
      <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col md:flex-row items-center gap-8 shadow-xl text-white">
        <div className="w-24 h-24 flex-shrink-0 bg-primary/20 rounded-full border border-primary/40 flex items-center justify-center relative">
          <span className="material-symbols-outlined text-4xl text-primary">
            person_add
          </span>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-slate-800">
            <span className="material-symbols-outlined text-xs">check</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">Personel Profili Hazırlanıyor</h3>
          <p className="text-sm text-slate-400 font-medium max-w-2xl leading-relaxed mb-4">
            Personel kaydı tamamlandığında, planlayıcı algoritma bu personeli uygun olduğu
            makine yetkinliklerine göre sıralayacak ve iş emirlerine atama önerilerinde bulunacaktır.
          </p>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
