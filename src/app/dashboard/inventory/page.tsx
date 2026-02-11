"use client";

import React, { useState } from "react";
import Link from "next/link";
import StockDetailModal from "@/components/StockDetailModal";

export default function InventoryPage() {
  const [selectedStock, setSelectedStock] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: any) => {
    setSelectedStock(item);
    setIsModalOpen(true);
  };

  const stockData = [
    {
      code: "ST-882-X9",
      name: "Alüminyum Profil 40x40 (1m)",
      type: "Hammadde",
      current: "1,240",
      reserved: "450",
      available: "790",
      minStock: "200",
      status: "Yeterli",
      statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      code: "ST-412-K2",
      name: "Servo Motor 750W (RS485)",
      type: "Hammadde",
      current: "12",
      reserved: "8",
      available: "4",
      minStock: "10",
      status: "Eksik",
      statusColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    },
    {
      code: "ST-001-A1",
      name: "Kontrol Kartı Montajı v2",
      type: "Yarı Mamul",
      current: "45",
      reserved: "12",
      available: "33",
      minStock: "40",
      status: "Kritik",
      statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      code: "ST-990-Z3",
      name: "Somun M6 Paslanmaz",
      type: "Hammadde",
      current: "5,000",
      reserved: "1,200",
      available: "3,800",
      minStock: "500",
      status: "Yeterli",
      statusColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      code: "ST-551-M2",
      name: "Sensör Kablosu (2m)",
      type: "Hammadde",
      current: "112",
      reserved: "20",
      available: "92",
      minStock: "100",
      status: "Kritik",
      statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      {/* Header Area */}
      <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-20 flex items-center justify-between px-8">
        <div>
          <h1 className="text-xl font-bold text-navy-text">Stok ve Envanter Yönetimi</h1>
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>Üretim ERP</span>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary">Envanter Takibi</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            Dışa Aktar
          </button>
          <Link 
            href="/dashboard/inventory/new"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/10"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Yeni Stok Ekle
          </Link>
        </div>
      </header>

      <main className="p-8 space-y-6">
        {/* Quick KPI Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Toplam Stok</p>
              <h3 className="text-2xl font-black text-navy-text">4.280 <span className="text-xs font-bold text-slate-400">SKU</span></h3>
              <p className="text-[11px] text-emerald-500 flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% geçen ay
              </p>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kritik Stok</p>
              <h3 className="text-2xl font-black text-orange-500">84</h3>
              <p className="text-[11px] text-slate-400 font-medium">Yeniden sipariş noktasına yakın</p>
            </div>
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <span className="material-symbols-outlined text-orange-500 text-xl">priority_high</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Minimum Altında</p>
              <h3 className="text-2xl font-black text-red-500">22</h3>
              <p className="text-[11px] text-red-500 font-bold italic">Acil tedarik gerekli</p>
            </div>
            <div className="p-2 bg-red-500/10 rounded-lg">
              <span className="material-symbols-outlined text-red-500 text-xl">report_problem</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Üretimi Etkileyen</p>
              <h3 className="text-2xl font-black text-navy-text">12</h3>
              <p className="text-[11px] text-slate-400 font-medium">Aktif iş emrine bağlı eksikler</p>
            </div>
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
              <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {/* Search */}
            <div className="flex-1 min-w-[300px] relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium" 
                placeholder="Stok kodu veya adı ile ara..." 
                type="text"
              />
            </div>
            {/* Type Filters */}
            <div className="flex items-center gap-4 border-l border-slate-100 pl-6 shrink-0">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tür:</span>
              {["Hammadde", "Yarı Mamul", "Mamul"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                  <input className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary accent-primary" type="checkbox" defaultChecked={type !== "Mamul"} />
                  <span className="font-bold text-slate-600 group-hover:text-primary transition-colors">{type}</span>
                </label>
              ))}
            </div>
            {/* Warehouse Select */}
            <div className="flex items-center gap-3 border-l border-slate-100 pl-6 shrink-0">
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Depo:</span>
              <select className="bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-3 pr-8 font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option>Tüm Depolar</option>
                <option>Merkez Depo (MD01)</option>
                <option>Hammadde Deposu (HD02)</option>
                <option>Üretim Sahası (US01)</option>
              </select>
            </div>
            {/* More Filters */}
            <button className="ml-auto flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-primary font-bold transition-colors">
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
              Gelişmiş
            </button>
          </div>
        </section>

        {/* Data Table */}
        <section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Stok Kodu</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">Stok Adı</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Tür</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Mevcut</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Rezerve</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Kullanılabilir</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">Min. Stok</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">Durum</th>
                  <th className="px-6 py-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {stockData.map((item, idx) => (
                  <tr 
                    key={idx} 
                    onClick={() => handleOpenModal(item)}
                    className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm font-bold text-navy-text">{item.code}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-600">{item.name}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-[10px] font-black border border-slate-100 px-2 py-0.5 rounded text-slate-400 uppercase">{item.type}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-medium text-slate-600">{item.current}</td>
                    <td className="px-6 py-4 text-sm text-right text-orange-600 font-bold bg-orange-50/30">{item.reserved}</td>
                    <td className="px-6 py-4 text-sm text-right font-bold text-primary bg-primary/5">{item.available}</td>
                    <td className="px-6 py-4 text-sm text-right text-slate-400 font-semibold">{item.minStock}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-1 text-[10px] font-black rounded-full uppercase tracking-tighter ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-300 group-hover:text-slate-600">
                        <span className="material-symbols-outlined text-sm font-black">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-slate-50 bg-slate-50/30">
            <span className="text-[11px] font-bold text-slate-400 italic">Toplam 4,280 kayıttan 1-5 arası gösteriliyor</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-400 opacity-50 cursor-not-allowed">ÖNCEKİ</button>
              <button className="px-3 py-1 text-[11px] font-black bg-primary text-white rounded-lg shadow-sm">1</button>
              <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">2</button>
              <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors">3</button>
              <button className="px-3 py-1 text-[11px] font-black border border-slate-200 rounded-lg text-slate-600 hover:bg-white transition-colors uppercase">SONRAKİ</button>
            </div>
          </div>
        </section>

        {/* Bottom Panel: Critical Warnings & Mini Chart */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shadow-sm border border-red-100">
                  <span className="material-symbols-outlined text-3xl">notifications_active</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-navy-text leading-none mb-1">Kritik Stok Uyarıları</h2>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Üretimi tehlikeye atan eksikler</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-50 text-slate-600 text-[11px] font-black rounded-lg border border-slate-200 hover:bg-slate-100 transition-all uppercase tracking-widest">Planlamaya Git</button>
                <button className="px-4 py-2 bg-primary text-white text-[11px] font-black rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 uppercase tracking-widest">Sipariş Önerisi Oluştur</button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-black text-slate-400 font-mono tracking-tighter">ST-412-K2</span>
                  <div>
                    <p className="text-sm font-black text-navy-text">Servo Motor 750W (RS485)</p>
                    <p className="text-[11px] text-red-500 font-bold uppercase tracking-tight">Eksik Miktar: 6 Adet • Planlanan İhtiyaç: 10 Adet (22.10.2023)</p>
                  </div>
                </div>
                <button className="text-primary text-xs font-black hover:underline underline-offset-4 uppercase tracking-widest">Tedarikçi Gör</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-black text-slate-400 font-mono tracking-tighter">ST-001-A1</span>
                  <div>
                    <p className="text-sm font-black text-navy-text">Kontrol Kartı Montajı v2</p>
                    <p className="text-[11px] text-orange-500 font-bold uppercase tracking-tight">Kritik Seviye Altı: -7 Adet • Son Hareket: 2 saat önce</p>
                  </div>
                </div>
                <button className="text-primary text-xs font-black hover:underline underline-offset-4 uppercase tracking-widest">Üretim Emri Ver</button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-[11px] font-black mb-6 uppercase text-slate-400 tracking-widest">Depo Doluluk Oranı</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-xs font-black mb-2 text-navy-text">
                  <span>Merkez Depo (MD01)</span>
                  <span className="text-primary">82%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: "82%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-black mb-2 text-navy-text">
                  <span>Hammadde Deposu (HD02)</span>
                  <span className="text-primary">45%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(19,91,236,0.3)]" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-[11px] text-primary/80 leading-relaxed font-bold italic">
                    "Merkez Depo kapasitesi kritik seviyeye ulaşıyor. Sevkiyat planlamasını ve stok devir hızını gözden geçirin."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StockDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        stockItem={selectedStock} 
      />
    </div>
  );
}
