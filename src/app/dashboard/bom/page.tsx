export default function BOMPage() {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Top Header */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4 flex-1">
          <h2 className="text-lg font-bold tracking-tight text-navy-text dark:text-slate-100">
            Ürünler ve Reçeteler (BOM)
          </h2>
          <div className="relative max-w-sm w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 transition-all text-navy-text dark:text-slate-200"
              placeholder="Ürün kodu veya isim ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1"></div>
          <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-sm shadow-primary/20">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Yeni Ürün Ekle
          </button>
        </div>
      </header>

      {/* Dynamic Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Table Section */}
        <div className="flex-1 flex flex-col p-6 overflow-y-auto">
          {/* Filters Row */}
          <div className="flex items-center gap-3 mb-6">
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
              Durum: Hepsi{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium flex items-center gap-2 text-navy-text dark:text-slate-200">
              Tedarik Süresi{" "}
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
            <div className="flex-1"></div>
            <button className="px-4 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 text-navy-text dark:text-slate-200">
              <span className="material-symbols-outlined text-lg">download</span>
              Dışa Aktar
            </button>
          </div>

          {/* Products Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Ürün Kodu
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Ürün Adı
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Tedarik Süresi
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-primary/5 cursor-pointer bg-primary/5 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">PRD-001</td>
                  <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200">
                    Endüstriyel Motor - V2
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    12 Gün
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      AKTİF
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">
                      Düzenle
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-bold text-navy-text dark:text-slate-200">
                    PRD-002
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200">
                    Kontrol Paneli (Standard)
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    5 Gün
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      AKTİF
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">
                      Düzenle
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-bold text-navy-text dark:text-slate-200">
                    PRD-003
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200">
                    Hidrolik Pompa Sistemi
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    8 Gün
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      TASLAK
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">
                      Düzenle
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-bold text-navy-text dark:text-slate-200">
                    PRD-004
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200">
                    Sensör Grubu A-12
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    3 Gün
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      AKTİF
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">
                      Düzenle
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="px-6 py-4 font-bold text-navy-text dark:text-slate-200">
                    PRD-005
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-navy-text dark:text-slate-200">
                    Bağlantı Şasisi (Paslanmaz)
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    15 Gün
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      PASİF
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary font-bold text-xs hover:underline">
                      Düzenle
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BOM Detail Sidebar */}
        <aside className="w-[450px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-extrabold rounded uppercase">
                Ürün Reçetesi (BOM)
              </span>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
            <h3 className="text-xl font-black text-navy-text dark:text-slate-100 mb-1">
              Endüstriyel Motor - V2
            </h3>
            <p className="text-xs text-slate-500 font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                calendar_today
              </span>{" "}
              Son Güncelleme: 12.05.2024
            </p>
          </div>

          {/* BOM Tree */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
            <div className="space-y-4">
              {/* Parent Node */}
              <div className="flex items-start gap-3">
                <div className="mt-1 size-5 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-lg">
                    expand_more
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        precision_manufacturing
                      </span>
                      <span className="text-sm font-bold text-navy-text dark:text-slate-200">
                        Ana Motor Bloğu
                      </span>
                    </div>
                    <span className="text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-navy-text dark:text-slate-300 rounded">
                      1 Adet
                    </span>
                  </div>
                  {/* Children Node */}
                  <div className="mt-3 ml-6 border-l-2 border-slate-100 dark:border-slate-800 pl-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Rulman Takımı (SKF)
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        2 Adet
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Bakır Sargı Ünitesi
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        4.5 kg
                      </span>
                    </div>
                    {/* Nested Sub-component */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">
                          expand_more
                        </span>
                        <span className="text-sm font-bold text-navy-text dark:text-slate-200">
                          Soğutma Fanı Grubu
                        </span>
                        <span className="ml-auto text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-navy-text dark:text-slate-300 rounded">
                          1 Adet
                        </span>
                      </div>
                      <div className="ml-6 border-l-2 border-slate-100 dark:border-slate-800 pl-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="size-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                              Plastik Kanat Seti
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 italic font-medium">
                            5 Parça
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="size-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                              Sabitleme Civataları
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 italic font-medium">
                            10 Adet
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Level Component */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">
                    chevron_right
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      settings_input_component
                    </span>
                    <span className="text-sm font-bold text-navy-text dark:text-slate-200">
                      Dış Muhafaza Kabini
                    </span>
                  </div>
                </div>
                <span className="text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-navy-text dark:text-slate-300 rounded">
                  1 Adet
                </span>
              </div>
              {/* Top Level Component */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">
                    chevron_right
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      electric_bolt
                    </span>
                    <span className="text-sm font-bold text-navy-text dark:text-slate-200">
                      Kablo Terminali
                    </span>
                  </div>
                </div>
                <span className="text-xs font-black px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-navy-text dark:text-slate-300 rounded">
                  1 Set
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 space-y-4 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Tahmini Birim Maliyet
                </p>
                <p className="text-xl font-black text-navy-text dark:text-slate-100">
                  $1,240.50
                </p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Parça Sayısı
                </p>
                <p className="text-xl font-black text-navy-text dark:text-slate-100">
                  18
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 py-2.5 rounded-xl text-sm font-black transition-all text-navy-text dark:text-slate-100 shadow-sm">
                Reçeteyi Düzenle
              </button>
              <button className="bg-primary hover:bg-blue-700 text-white p-2.5 rounded-xl transition-all shadow-sm shadow-primary/20">
                <span className="material-symbols-outlined">print</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
