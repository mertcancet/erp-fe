export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Top Bar / Header */}
      <header className="min-h-[5rem] py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 gap-4 pl-16 md:pl-8">
        <div className="flex items-center gap-8 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium whitespace-nowrap">
                <span className="material-symbols-outlined text-primary text-lg">
                  location_on
                </span>
                Gebze Fabrikası - Hat A
                <span className="material-symbols-outlined text-slate-400 text-sm">
                  expand_more
                </span>
              </button>
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">
                calendar_today
              </span>
              14 Haz 2024 - 21 Haz 2024
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/10 whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">add</span>
            Yeni Plan Oluştur
          </button>
        </div>
      </header>

      <main className="p-8 space-y-8">
        {/* KPI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm card-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Toplam Talep
              </span>
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">
                  inventory_2
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-black text-navy-text">14,250</h2>
              <span className="text-emerald-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-sm">
                  arrow_upward
                </span>{" "}
                12%
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1 font-medium">
              Önceki döneme göre artış
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm card-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Planlanan Üretim
              </span>
              <div className="p-2 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">
                  precision_manufacturing
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-black text-navy-text">%92.4</h2>
              <span className="text-emerald-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>{" "}
                Hedef: %95
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1 font-medium">
              Kapasite kullanım oranı
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm card-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Ortalama Gecikme
              </span>
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <span className="material-symbols-outlined text-orange-500 text-xl">
                  history_toggle_off
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-black text-orange-500">1.2 Gün</h2>
              <span className="text-orange-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>{" "}
                +0.2
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1 font-medium">
              Sipariş teslimat toleransı
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm card-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Kritik Uyarılar
              </span>
              <div className="p-2 bg-red-500/10 rounded-lg">
                <span className="material-symbols-outlined text-red-500 text-xl">
                  report_problem
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-black text-red-500">5 Aktif</h2>
              <span className="text-red-500 text-xs font-bold mb-1 flex items-center">
                <span className="material-symbols-outlined text-sm">error</span>{" "}
                Acil
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1 font-medium">
              Acil aksiyon gerektiren durumlar
            </p>
          </div>
        </section>

        {/* Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Güncel Üretim Planı Table */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm card-shadow overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-lg text-navy-text">
                Güncel Üretim Planı
              </h3>
              <button className="text-xs text-primary font-bold flex items-center gap-1 hover:underline">
                Tümünü Gör{" "}
                <span className="material-symbols-outlined text-xs">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Ürün Adı</th>
                    <th className="px-6 py-4 text-center">Miktar</th>
                    <th className="px-6 py-4">Bitiş Tarihi</th>
                    <th className="px-6 py-4">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-sm">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-text">
                      Endüstriyel Motor v4
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      450 Adet
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      18 Haz 2024
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold uppercase tracking-tight">
                        Planlandı
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-text">
                      Kontrol Kartı XC-200
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      1,200 Adet
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      16 Haz 2024
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-[10px] font-bold uppercase tracking-tight">
                        Riskli
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-text">
                      Alüminyum Kasa XL
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      800 Adet
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      15 Haz 2024
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-md text-[10px] font-bold uppercase tracking-tight">
                        Kapasite Aşıldı
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-text">
                      Sensör Modülü S3
                    </td>
                    <td className="px-6 py-4 text-center text-slate-600 font-medium">
                      3,000 Adet
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">
                      20 Haz 2024
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md text-[10px] font-bold uppercase tracking-tight">
                        Planlandı
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kapasite Durumu Bar Chart */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm card-shadow p-6">
            <h3 className="font-bold text-lg text-navy-text mb-6">
              Makine Kapasite Durumu
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-600">CNC Tezgah Grubu-A</span>
                  <span className="text-primary">%78</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-600">Montaj Hattı 03</span>
                  <span className="text-orange-500">%92</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full transition-all duration-500"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-600">Boya ve Kaplama</span>
                  <span className="text-red-500">%104</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full transition-all duration-500"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-600">Lojistik / Paketleme</span>
                  <span className="text-emerald-500">%45</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <p className="text-[11px] text-slate-400 italic font-medium">
                  Veriler 15 dakikada bir güncellenmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gantt Preview */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm card-shadow overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg text-navy-text">
                Çizelgeleme Önizlemesi
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Önümüzdeki 72 saatlik iş yükü dağılımı
              </p>
            </div>
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10">
              Detaylı Planlamaya Git{" "}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <div className="min-w-[800px] space-y-4">
              {/* Gantt Header */}
              <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest pl-32 mb-2">
                <div className="flex-1 text-center border-l border-slate-100">
                  14 Haz
                </div>
                <div className="flex-1 text-center border-l border-slate-100">
                  15 Haz
                </div>
                <div className="flex-1 text-center border-l border-slate-100">
                  16 Haz
                </div>
              </div>
              {/* Gantt Rows */}
              <div className="flex items-center group">
                <div className="w-32 pr-4 text-xs font-bold text-slate-500 truncate">
                  Makine A-01
                </div>
                <div className="flex-1 h-10 gantt-grid bg-slate-50/50 relative rounded-lg border border-slate-100 flex items-center">
                  <div
                    className="absolute left-[5%] w-[35%] h-7 bg-primary/10 border border-primary/20 rounded flex items-center px-3 text-[10px] font-black text-primary truncate"
                    title="SİP #9283 - Motor Üretimi"
                  >
                    SİP #9283 - Motor Üretimi
                  </div>
                  <div
                    className="absolute left-[45%] w-[15%] h-7 bg-slate-200 border border-slate-300 rounded flex items-center px-3 text-[10px] font-black text-slate-500 truncate"
                    title="Bakım"
                  >
                    Bakım
                  </div>
                  <div
                    className="absolute left-[62%] w-[30%] h-7 bg-primary/10 border border-primary/20 rounded flex items-center px-3 text-[10px] font-black text-primary truncate"
                    title="SİP #9290 - Yedek Parça"
                  >
                    SİP #9290 - Yedek Parça
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-32 pr-4 text-xs font-bold text-slate-500 truncate">
                  Makine B-05
                </div>
                <div className="flex-1 h-10 gantt-grid bg-slate-50/50 relative rounded-lg border border-slate-100 flex items-center">
                  <div
                    className="absolute left-[0%] w-[55%] h-7 bg-orange-100 border border-orange-200 rounded flex items-center px-3 text-[10px] font-black text-orange-700 truncate"
                    title="SİP #9275 - Gövde Montaj"
                  >
                    SİP #9275 - Gövde Montaj (Gecikme Riski)
                  </div>
                  <div
                    className="absolute left-[58%] w-[40%] h-7 bg-primary/10 border border-primary/20 rounded flex items-center px-3 text-[10px] font-black text-primary truncate"
                    title="SİP #9288 - Standart Montaj"
                  >
                    SİP #9288 - Standart Montaj
                  </div>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-32 pr-4 text-xs font-bold text-slate-500 truncate">
                  CNC Robot-2
                </div>
                <div className="flex-1 h-10 gantt-grid bg-slate-50/50 relative rounded-lg border border-slate-100 flex items-center">
                  <div className="absolute left-[15%] w-[25%] h-7 bg-primary/10 border border-primary/20 rounded flex items-center px-3 text-[10px] font-black text-primary truncate">
                    SİP #9281
                  </div>
                  <div className="absolute left-[42%] w-[20%] h-7 bg-primary/10 border border-primary/20 rounded flex items-center px-3 text-[10px] font-black text-primary truncate">
                    SİP #9282
                  </div>
                  <div
                    className="absolute left-[65%] w-[30%] h-7 bg-red-100 border border-red-200 rounded flex items-center px-3 text-[10px] font-black text-red-700 truncate"
                    title="Kapasite Hatası"
                  >
                    ÇAKALAN İŞ: Kapasite Hatası
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
          {/* Kritik Uyarılar List */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm card-shadow p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-red-500">
                warning
              </span>
              <h3 className="font-bold text-lg text-navy-text">
                Kritik Uyarılar
              </h3>
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl group hover:bg-red-100/50 transition-colors cursor-pointer">
                <div className="mt-1 w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-black text-red-900 leading-none">
                      Hat 3: Kapasite Aşımı
                    </p>
                    <span className="text-[10px] font-bold text-red-700 uppercase">
                      Acil
                    </span>
                  </div>
                  <p className="text-xs text-red-700/80 font-medium">
                    Haftalık planlanan iş yükü mevcut kapasiteyi %14 oranında
                    aşıyor. Yeni vardiya planlanmalı.
                  </p>
                </div>
                <span className="material-symbols-outlined text-red-400 group-hover:text-red-600 transition-colors">
                  chevron_right
                </span>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 border border-orange-100 rounded-xl group hover:bg-orange-100/50 transition-colors cursor-pointer">
                <div className="mt-1 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-black text-orange-900 leading-none">
                      Hammadde Gecikmesi: Çelik Sac
                    </p>
                    <span className="text-[10px] font-bold text-orange-700 uppercase">
                      Risk
                    </span>
                  </div>
                  <p className="text-xs text-orange-700/80 font-medium">
                    Sipariş #104 için beklenen sevkiyat 2 gün gecikecek. Montaj
                    planını güncelleyin.
                  </p>
                </div>
                <span className="material-symbols-outlined text-orange-400 group-hover:text-orange-600 transition-colors">
                  chevron_right
                </span>
              </div>
            </div>
          </div>

          {/* Hızlı Aksiyonlar */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm card-shadow p-6">
            <h3 className="font-bold text-lg text-navy-text mb-6">
              Hızlı Aksiyonlar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center gap-4 p-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all text-left shadow-lg shadow-primary/20 group">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    add_task
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider">
                    Yeni Talep
                  </p>
                  <p className="text-[10px] opacity-80 font-medium">
                    Sisteme manuel giriş
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-navy-text text-white rounded-xl hover:bg-navy-text/90 transition-all text-left shadow-lg shadow-navy-text/20 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">
                    smart_toy
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider">
                    Planlamayı Çalıştır
                  </p>
                  <p className="text-[10px] opacity-80 font-medium">
                    AI Optimizasyonu
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-left group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl text-slate-600">
                    file_download
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-navy-text">
                    Rapor Oluştur
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    PDF/Excel Formatı
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-left group">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl text-slate-600">
                    settings
                  </span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-navy-text">
                    Hat Ayarları
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Kapasite & Kısıtlar
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-auto p-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-bold bg-slate-50/30">
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
    </div>
  );
}
