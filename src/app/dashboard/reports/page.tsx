export default function ReportsPage() {
  return (
    <div className="flex-1 flex flex-col min-h-screen">
      {/* Header */}
      <header className="min-h-[5rem] py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 gap-4 pl-16 md:pl-8">
        <div className="w-full md:w-auto">
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-navy-text">
            Raporlar ve Analitik Paneli
          </h2>
          <p className="text-xs md:text-sm text-slate-500">
            Üretim verimliliği ve analizlerine genel bakış
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button className="px-3 py-1.5 text-xs font-bold rounded-md bg-white shadow-sm text-navy-text">
              Son 7 Gün
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-navy-text transition-colors">
              Son 30 Gün
            </button>
            <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-navy-text flex items-center gap-1 transition-colors">
              <span className="material-symbols-outlined text-sm">
                calendar_month
              </span>{" "}
              Özel
            </button>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/10 whitespace-nowrap">
            <span className="material-symbols-outlined text-sm">
              add_chart
            </span>
            Rapor Oluştur
          </button>
        </div>
      </header>

      <div className="p-8 space-y-8">
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
            <div
              className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold"
              title="12%"
            >
              M1
            </div>
            <div
              className="heatmap-cell bg-chart-orange/90 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="92%"
            >
              M2
            </div>
            <div
              className="heatmap-cell bg-chart-blue/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="75%"
            >
              M3
            </div>
            <div
              className="heatmap-cell bg-slate-50 rounded h-10 flex items-center justify-center text-[10px] font-bold"
              title="5%"
            >
              M4
            </div>
            <div
              className="heatmap-cell bg-chart-orange/70 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="88%"
            >
              M5
            </div>
            <div
              className="heatmap-cell bg-chart-blue/40 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="55%"
            >
              M6
            </div>
            <div
              className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold"
              title="15%"
            >
              M7
            </div>
            <div
              className="heatmap-cell bg-chart-orange/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="78%"
            >
              M8
            </div>
            <div
              className="heatmap-cell bg-chart-blue/20 rounded h-10 flex items-center justify-center text-[10px] font-bold text-navy-text"
              title="35%"
            >
              M9
            </div>
            <div
              className="heatmap-cell bg-chart-orange/95 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="98%"
            >
              M10
            </div>
            <div
              className="heatmap-cell bg-chart-blue/50 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="65%"
            >
              M11
            </div>
            <div
              className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold"
              title="22%"
            >
              M12
            </div>
            <div
              className="heatmap-cell bg-slate-100 rounded h-10 flex items-center justify-center text-[10px] font-bold"
              title="8%"
            >
              M13
            </div>
            <div
              className="heatmap-cell bg-chart-blue/30 rounded h-10 flex items-center justify-center text-[10px] font-bold text-navy-text"
              title="52%"
            >
              M14
            </div>
            <div
              className="heatmap-cell bg-chart-orange/80 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="91%"
            >
              M15
            </div>
            <div
              className="heatmap-cell bg-chart-blue/60 rounded h-10 flex items-center justify-center text-[10px] font-bold text-white"
              title="74%"
            >
              M16
            </div>
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

      {/* Raporlar Tablosu */}
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
      <footer className="mt-auto p-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-medium bg-slate-50/30">
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
    </div>
  );
}
