"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50/50">
      {/* Header Area */}
      <header className="h-20 border-b border-slate-200 bg-white sticky top-0 z-20 flex items-center justify-between px-8 shrink-0">
        <div>
          <nav className="flex text-[10px] font-black text-slate-400 mb-1 space-x-1 items-center uppercase tracking-widest">
            <span>Envanter</span>
            <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
            <Link href="/dashboard/inventory" className="hover:text-primary transition-colors">Ürünler</Link>
            <span className="material-symbols-outlined !text-[14px]">chevron_right</span>
            <span className="text-navy-text">Yeni Ürün</span>
          </nav>
          <h1 className="text-xl font-black text-navy-text tracking-tight outline-none">Yeni Ürün Ekle</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()}
            className="px-4 py-2 border border-slate-200 rounded-lg text-[11px] font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest"
          >
            İptal
          </button>
          <button className="px-4 py-2 bg-slate-100 text-navy-text rounded-lg text-[11px] font-black hover:bg-slate-200 transition-all uppercase tracking-widest">
            Kaydet & Devam Et
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-[11px] font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 uppercase tracking-widest">
            Kaydet
          </button>
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 items-start">
          {/* Main Form Sections */}
          <div className="col-span-12 lg:col-span-8 space-y-6 pb-12">
            
            {/* Temel Bilgiler */}
            <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                Temel Bilgiler
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Adı <span className="text-red-500">*</span></label>
                  <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="Örn: Endüstriyel Rulman X-200" type="text"/>
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Kodu <span className="text-red-500">*</span></label>
                  <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="PRD-0001" type="text"/>
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Ürün Türü</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>Ham Madde</option>
                    <option>Yarı Mamul</option>
                    <option defaultValue="Mamul">Mamul</option>
                    <option>Sarf Malzeme</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Kategori</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>Mekanik Parçalar</option>
                    <option>Elektronik Komponentler</option>
                    <option>Kimyasallar</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2 block">Birim</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>Adet (pcs)</option>
                    <option>Kilogram (kg)</option>
                    <option>Metre (m)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Stok & Envanter */}
            <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-black text-navy-text flex items-center gap-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-primary text-[20px]">inventory_2</span>
                  Stok & Envanter
                </h2>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-wider">
                  <span className="material-symbols-outlined !text-[14px]">warning</span>
                  STOK SEVİYESİ KRİTİK
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Mevcut Stok", val: "150", color: "" },
                  { label: "Minimum Stok", val: "200", color: "border-orange-200 bg-orange-50/30" },
                  { label: "Maksimum Stok", val: "1000", color: "" },
                  { label: "Güvenlik Stoğu", val: "50", color: "" }
                ].map((item, i) => (
                  <div key={i}>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">{item.label}</label>
                    <input className={`w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text ${item.color}`} type="number" defaultValue={item.val}/>
                  </div>
                ))}
              </div>
            </section>

            {/* Tedarik & Planlama */}
            <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                Tedarik & Planlama (MRP)
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Lead Time (Gün)</label>
                    <span className="material-symbols-outlined !text-sm text-slate-300 cursor-help" title="Sipariş verildikten sonra ürünün depoya giriş süresi.">help</span>
                  </div>
                  <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="7" type="number"/>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Varsayılan Tedarikçi</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>ABC Endüstri A.Ş.</option>
                    <option>XYZ Lojistik</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">Yeniden Sipariş Noktası</label>
                    <span className="material-symbols-outlined !text-sm text-slate-300 cursor-help" title="Otomatik satın alma talebi noktası.">help</span>
                  </div>
                  <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="250" type="number"/>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">MRP Planlama Türü</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>İhtiyaç Bazlı (PD)</option>
                    <option>Stok Bazlı (VB)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Maliyet Bilgileri */}
            <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h2 className="text-sm font-black text-navy-text mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                Maliyet Bilgileri
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Birim Maliyet</label>
                    <input className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="0.00" type="number"/>
                  </div>
                  <div className="w-28">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Döviz</label>
                    <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                      <option>TRY</option>
                      <option>USD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Maliyet Tipi</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option>Standart Maliyet</option>
                    <option>FIFO</option>
                    <option>LIFO</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Üretim Bilgileri */}
            <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-sm font-black text-navy-text flex items-center gap-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-primary text-[20px]">precision_manufacturing</span>
                  Üretim Bilgileri
                </h2>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider">Reçetesi Var mı?</span>
                    <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-primary" role="switch">
                      <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                    </button>
                  </div>
                  <Link href="/dashboard/bom" className="flex items-center gap-2 text-[10px] font-black text-primary hover:underline underline-offset-4 uppercase tracking-widest">
                    <span className="material-symbols-outlined !text-[16px]">account_tree</span>
                    Reçeteye Git
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Standart Üretim Süresi</label>
                  <div className="flex gap-3">
                    <input className="flex-1 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text" placeholder="0" type="number"/>
                    <select className="w-32 h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                      <option>Dakika</option>
                      <option>Saat</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block">Üretim Hattı / İstasyonu</label>
                  <select className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-navy-text appearance-none">
                    <option value="">Seçiniz...</option>
                    <option>Ana Montaj Hattı - A1</option>
                    <option>CNC Torna İstasyonu</option>
                    <option>Boya & Kaplama Hattı</option>
                  </select>
                  <p className="text-[10px] text-slate-400 mt-2 italic font-medium">Ürün türüne göre varsayılan hat önerilir.</p>
                </div>
                <div className="col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer group w-fit">
                    <input defaultChecked className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary accent-primary" type="checkbox"/>
                    <span className="text-xs font-black text-navy-text group-hover:text-primary transition-colors uppercase tracking-tight">Üretilebilir mi?</span>
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* Right Summary Column */}
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-50 bg-slate-50/50">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Ürün Özeti</h3>
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-8">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-slate-300 text-3xl">image</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-navy-text leading-tight">Endüstriyel Rulman X-200</h4>
                    <p className="text-[10px] font-black text-slate-400 mt-1 uppercase tracking-tighter">PRD-0001</p>
                    <div className="mt-3 inline-flex px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black rounded uppercase tracking-widest">MAMUL</div>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">MRP DURUMU</span>
                    <span className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> HAZIR
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: "Temel tanımlamalar yapıldı", done: true },
                      { label: "Tedarik parametreleri girildi", done: true },
                      { label: "Maliyet ataması bekleniyor", done: false }
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`material-symbols-outlined !text-[18px] ${step.done ? "text-primary font-black" : "text-slate-200"}`}>
                          {step.done ? "check_circle" : "radio_button_unchecked"}
                        </span>
                        <span className={`text-[11px] font-bold ${step.done ? "text-navy-text" : "text-slate-400"}`}>{step.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-1 tracking-widest">Mevcut</p>
                    <p className="text-lg font-black text-navy-text tracking-tight">150 <span className="text-[10px] font-bold text-slate-300 italic">Adet</span></p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <p className="text-[9px] font-black text-orange-500 uppercase mb-1 tracking-widest">Kritik</p>
                    <p className="text-lg font-black text-orange-700 tracking-tight">200 <span className="text-[10px] font-bold text-orange-300 italic">Adet</span></p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50 text-center">
                  <p className="text-[11px] text-slate-400 leading-relaxed italic font-medium px-4">
                    Tüm zorunlu alanlar doldurulduğunda "Kaydet" butonu aktifleşecektir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-text p-6 border border-navy-text rounded-2xl shadow-xl shadow-navy-text/10 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined font-black">help</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">Parametre Desteği</h4>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-bold">
                      MRP parametreleri ve maliyet tipleri hakkında detaylı bilgi için dokümantasyona göz atın.
                    </p>
                    <a className="inline-flex items-center mt-4 text-[10px] font-black text-primary hover:text-primary/80 uppercase tracking-widest underline underline-offset-4" href="#">
                      Dokümantasyonu Aç
                      <span className="material-symbols-outlined !text-[14px] ml-1">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-7xl text-white/5 font-black group-hover:scale-110 transition-transform duration-700">menu_book</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
