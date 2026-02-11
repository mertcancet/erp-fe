"use client";

import React from "react";

interface StockDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  stockItem?: any;
}

export default function StockDetailModal({ isOpen, onClose, stockItem }: StockDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative z-10 animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-black text-navy-text dark:text-white tracking-tight">Stok Detayları</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800 uppercase tracking-wider">
                Kritik Seviye
              </span>
            </div>
            <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-tight">
              {stockItem?.name || "Endüstriyel Rulman - 6205-2RS1"} | <span className="text-primary">{stockItem?.code || "SKU-BRG-6205-01"}</span>
            </p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90"
          >
            <span className="material-symbols-outlined font-black">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Metrics & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
                Mevcut Stok Durumu
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 group hover:border-primary/20 transition-all">
                  <span className="text-[10px] font-black text-slate-400 block mb-2 uppercase tracking-wider">Toplam Mevcut</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-navy-text">1,240</span>
                    <span className="text-xs font-bold text-slate-400 italic">Adet</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <span className="text-[10px] font-black text-slate-400 block mb-2 uppercase tracking-wider">Rezerve Edilen</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-orange-500">850</span>
                    <span className="text-xs font-bold text-slate-400 italic">Adet</span>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border-2 border-primary/20 bg-primary/5 col-span-2 relative overflow-hidden group">
                  <span className="text-[10px] font-black text-primary block mb-2 uppercase tracking-widest relative z-10">Kullanılabilir Net</span>
                  <div className="flex items-baseline gap-2 relative z-10">
                    <span className="text-4xl font-black text-primary tracking-tighter">390</span>
                    <span className="text-sm font-black text-primary/60 italic">Adet</span>
                  </div>
                  <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl text-primary/5 group-hover:scale-110 transition-transform duration-500">check_circle</span>
                </div>
              </div>
              
              {/* Alert */}
              <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                  <span className="material-symbols-outlined text-white text-[18px]">warning</span>
                </div>
                <p className="text-xs text-red-800 leading-relaxed font-bold">
                  Mevcut stok miktarı güvenlik seviyesinin <span className="underline decoration-2">110 Adet</span> altındadır. Planlanan üretim emirlerini karşılamak için acil aksiyon gereklidir.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-50">
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">info</span>
                Genel Bilgiler
              </h3>
              <div className="space-y-1">
                {[
                  { label: "Depo Konumu", value: "A-12 / Bölüm 4", icon: "location_on" },
                  { label: "Birim Ağırlık", value: "0.45 kg", icon: "weight" },
                  { label: "Tedarik Süresi", value: "14 İş Günü", icon: "schedule" },
                  { label: "Son Hareket", value: "12.10.2023 - 14:30", icon: "history" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-tight">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-navy-text">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: MRP & Impact */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] font-black text-navy-text uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">precision_manufacturing</span>
                  Planlama Etkisi (Aktif İş Emirleri)
                </h3>
                <span className="text-[10px] font-black text-slate-400 uppercase">Son 30 Gün</span>
              </div>
              <div className="space-y-3">
                {[
                  { id: "WO-88241", date: "18.10.2023", qty: "400", status: "Yetersiz Stok", color: "bg-red-500" },
                  { id: "WO-88255", date: "24.10.2023", qty: "250", status: "Sırada Bekliyor", color: "bg-primary" },
                  { id: "WO-88290", date: "02.11.2023", qty: "200", status: "Taslak", color: "bg-slate-300" }
                ].map((order, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-primary/20 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`w-1.5 h-12 ${order.color} rounded-full`}></div>
                      <div>
                        <p className="text-sm font-black text-navy-text uppercase">{order.id}</p>
                        <p className="text-[10px] text-slate-400 font-bold">Teslim: {order.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-navy-text">{order.qty} Adet</p>
                      <span className={`text-[10px] font-black uppercase tracking-tighter ${order.status === "Yetersiz Stok" ? "text-red-500" : "text-primary opacity-70"}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MRP Suggestion */}
            <div className="p-8 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/10">
                      <span className="material-symbols-outlined font-black">auto_graph</span>
                    </div>
                    <h3 className="text-sm font-black text-navy-text uppercase tracking-widest">MRP Satın Alma Önerisi</h3>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-black uppercase tracking-widest mb-1">Hesaplanan Optimal Miktar</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-primary tracking-tighter">2,500</span>
                      <span className="text-lg font-black text-slate-400 italic">Adet</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 w-full md:w-auto">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase justify-center md:justify-end">
                    <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                    <span>Tahmini Varış: 14 İş Günü</span>
                  </div>
                  <button className="w-full md:w-auto px-6 py-3.5 bg-primary text-white text-xs font-black rounded-xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest">
                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                    Satın Alma Talebi Oluştur
                  </button>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[120px] text-primary/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">analytics</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Gecikme Riski</p>
                  <p className="text-sm font-black text-navy-text">%18 Yüksek</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Birim Maliyet</p>
                  <p className="text-sm font-black text-navy-text">₺42.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-[11px] font-black text-slate-400 hover:text-navy-text transition-colors flex items-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-[18px]">print</span>
              Rapor Al
            </button>
            <button className="text-[11px] font-black text-slate-400 hover:text-navy-text transition-colors flex items-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-[18px]">share</span>
              Paylaş
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="px-6 py-2.5 text-[11px] font-black text-slate-500 hover:text-navy-text transition-all uppercase tracking-widest"
            >
              Vazgeç
            </button>
            <button className="px-8 py-2.5 text-[11px] font-black bg-navy-text text-white rounded-xl shadow-lg hover:bg-primary transition-all active:scale-95 uppercase tracking-widest">
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
