"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BOMDetailPage() {
  const router = useRouter();

  const bomItems = [
    { name: "Alüminyum Profil 6061", code: "HAM-AL-01", type: "Hammadde", qty: "250 kg", stock: "1,200 kg", deficit: "0", cost: "₺6.250", status: "Tamam" },
    { name: "Rulman 6204-2RS", code: "MLZ-RL-04", type: "Bileşen", qty: "200 Adet", stock: "145 Adet", deficit: "55", cost: "₺4.100", status: "Kritik" },
    { name: "Montaj Kiti - Tip B", code: "YRM-MT-02", type: "Yarımamul", qty: "100 Set", stock: "105 Set", deficit: "0", cost: "₺2.150", status: "Tamam" },
    { name: "Statik Toz Boya (Gri)", code: "KMY-BY-09", type: "Sarf", qty: "15 kg", stock: "40 kg", deficit: "0", cost: "₺950", status: "Tamam" },
    { name: "M5x16 Civata", code: "BAG-CV-05", type: "Bileşen", qty: "800 Adet", stock: "820 Adet", deficit: "0", cost: "₺1.050", status: "Sınırda" },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      {/* Header Area */}
      <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-20 flex items-center justify-between px-8 shrink-0">
        <div>
          <nav className="flex text-[10px] font-black text-slate-400 mb-1 space-x-1 items-center uppercase tracking-widest">
            <Link href="/dashboard/inventory" className="hover:text-primary transition-colors">Envanter</Link>
            <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
            <Link href="/dashboard/bom" className="hover:text-primary transition-colors">BOM</Link>
            <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
            <span className="text-navy-text">Alüminyum Gövde A1</span>
          </nav>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-black text-navy-text tracking-tight">Alüminyum Gövde A1</h1>
            <span className="px-2 py-0.5 text-[9px] font-black bg-primary/10 text-primary border border-primary/20 rounded-full uppercase tracking-widest">v1.0</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest">
            Pasife Al
          </button>
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest">
            Kopyala
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-[11px] font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 flex items-center gap-2 uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm font-black">edit</span>
            Düzenle
          </button>
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          
          {/* Summary Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex gap-6">
              <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-slate-300 text-5xl">view_in_ar</span>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ürün Kodu</p>
                  <p className="text-sm font-black text-navy-text mt-1">PRD-AL-1001</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Versiyon</p>
                  <p className="text-sm font-black text-primary mt-1">v1.0 (Aktif)</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">BOM Tipi</p>
                  <p className="text-sm font-black text-navy-text mt-1">Üretim Reçetesi</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Son Güncelleme</p>
                  <p className="text-sm font-black text-navy-text mt-1">12.10.2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 grid grid-cols-3 gap-6">
              <div className="flex flex-col justify-center border-r border-slate-50 pr-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Std. Miktar</p>
                <p className="text-3xl font-black text-navy-text mt-1">100 <span className="text-sm font-bold text-slate-300 italic">Adet</span></p>
              </div>
              <div className="flex flex-col justify-center border-r border-slate-50 pr-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Toplam Maliyet</p>
                <p className="text-3xl font-black text-primary mt-1">₺14.500</p>
                <p className="text-[10px] text-emerald-500 font-black mt-1 uppercase">-%2.4 vs Geçen Ay</p>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">MRP Durumu</p>
                <span className="px-4 py-1.5 text-[10px] font-black bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full uppercase tracking-widest">Hazır</span>
              </div>
            </div>
          </div>

          {/* Main Table & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                  <h3 className="font-black text-navy-text uppercase tracking-widest text-sm">BOM Kalemleri</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-black text-slate-400">8 KALEM</span>
                    <div className="h-4 w-[1px] bg-slate-200"></div>
                    <button className="text-primary text-[11px] font-black hover:underline uppercase tracking-widest">Hepsini Gör</button>
                  </div>
                </div>
                <div className="overflow-x-auto text-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50/50 text-slate-400 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Bileşen</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Kod</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Miktar</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Mevcut Stok</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Eksik</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Maliyet</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-center">Durum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 font-medium">
                      {bomItems.map((item, i) => (
                        <tr key={i} className={`hover:bg-slate-50 transition-colors ${item.status === 'Kritik' ? 'bg-red-50/30' : ''}`}>
                          <td className="px-6 py-4">
                            <p className="font-black text-navy-text">{item.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.type}</p>
                          </td>
                          <td className="px-6 py-4 text-xs font-bold text-slate-400 font-mono">{item.code}</td>
                          <td className="px-6 py-4 text-right font-black text-navy-text">{item.qty}</td>
                          <td className={`px-6 py-4 text-right font-black ${item.status === 'Kritik' ? 'text-red-500' : 'text-slate-600'}`}>{item.stock}</td>
                          <td className={`px-6 py-4 text-right font-black ${item.deficit !== '0' ? 'text-red-500' : 'text-slate-200'}`}>{item.deficit}</td>
                          <td className="px-6 py-4 text-right font-black text-navy-text">{item.cost}</td>
                          <td className="px-6 py-4 text-center">
                            <span className={`px-2 py-1 text-[9px] font-black rounded uppercase tracking-widest ${
                              item.status === 'Tamam' ? 'bg-emerald-50 text-emerald-600' : 
                              item.status === 'Kritik' ? 'bg-red-100 text-red-600' : 
                              'bg-orange-50 text-orange-600'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 relative overflow-hidden group">
                <h3 className="font-black text-navy-text uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">insights</span>
                  MRP & Analiz
                </h3>
                <div className="space-y-6 relative z-10">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-sans">Üretilebilir Maks. Adet</p>
                    <p className="text-3xl font-black text-navy-text tracking-tight">72 <span className="text-xs font-bold text-slate-400 italic">Birim</span></p>
                    <p className="text-[10px] text-red-500 font-black mt-2 uppercase flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">warning</span>
                      Sınırlayıcı: Rulman 6204-2RS
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Kritik Bileşen", val: "Rulman-X" },
                      { label: "En Uzun Lead Time", val: "12 Gün" },
                      { label: "Mevcut Siparişler", val: "3 Aktif" }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg px-2">
                        <span className="font-bold text-slate-400 uppercase tracking-tight">{row.label}</span>
                        <span className="font-black text-navy-text">{row.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    <button className="w-full py-3.5 bg-primary text-white text-[11px] font-black rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[18px] font-black">add_task</span>
                      Üretim Planına Ekle
                    </button>
                    <button className="w-full py-3.5 bg-navy-text text-white text-[11px] font-black rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-[18px] font-black">shopping_cart</span>
                      Satın Alma Oluştur
                    </button>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-7xl text-primary/5 font-black group-hover:scale-110 transition-transform duration-700">analytics</span>
              </div>

              <div className="bg-primary/5 border border-primary/10 p-5 rounded-2xl flex items-start gap-4">
                <span className="material-symbols-outlined text-primary font-black">info</span>
                <div>
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-1 font-sans">Tedarik Uyarısı</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-bold italic">
                    Alüminyum fiyatlarında gelecek ay %5 artış öngörülüyor. Stok artırımı önerilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
            {[
              { icon: "timer", label: "Üretim Süresi", val: "4.5 Saat", sub: "/ 100 Adet", color: "text-slate-400" },
              { icon: "settings_input_component", label: "Aktif Hat", val: "HAT-A", sub: "(Otomasyon)", color: "text-slate-400" },
              { icon: "trending_down", label: "Fire Oranı", val: "%2.50", sub: "Hedef: %1.80", color: "text-red-500" },
              { icon: "history", label: "Versiyon", val: "v1.0", sub: "12.10.2023", color: "text-slate-400" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                  </div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</h4>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className={`text-xl font-black ${stat.color === 'text-red-500' ? 'text-red-500' : 'text-navy-text'}`}>{stat.val}</p>
                  <p className="text-[10px] font-bold text-slate-400 italic">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
