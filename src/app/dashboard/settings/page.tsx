"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SettingsHeader } from "./_components/SettingsHeader";
import { SettingsTabs } from "./_components/SettingsTabs";
import { GeneralSection } from "./_components/GeneralSection";
import { PlanningSection } from "./_components/PlanningSection";
import { PreferencesSection } from "./_components/PreferencesSection";
import { ProfileSidebar } from "./_components/ProfileSidebar";

export default function SettingsPage() {
  const [tab, setTab] = React.useState("genel");
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 py-3 flex items-center justify-between pl-16 md:pl-6">
        <div className="flex items-center gap-8 overflow-hidden">
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-primary p-1.5 rounded-lg text-white shrink-0">
              <span className="material-symbols-outlined text-xl md:text-2xl">
                settings_input_component
              </span>
            </div>
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white truncate">
              Üretim Planlama Motoru
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Planlama
            </a>
            <a
              className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Üretim
            </a>
            <a
              className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Stok
            </a>
            <a
              className="text-sm font-semibold text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Raporlar
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/50"
              placeholder="Ara..."
              type="text"
            />
          </div>
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center gap-3 cursor-pointer group shrink-0">
            <img
              alt="Profil"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-slate-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuEB2NPQbPe7-6Bpg3RY7iMdvyabtvNN7dfaiSigU_l9ddSMxovr-VQdl9m8N6dylnlXGw8JwMrFHcpWYKJ58ZqOQw2_pYjfwBZpl1xKczb8d70O7n3UwPPjLgGXndaSLCYekn89yOhaeghyWQRi9XSWsCQoTqv70T4NDlZ8_UWb90vWBDfwl7augTKlYcoQoMClafc54voz4lisqcw0In26EnendhxM2hm2pqhURHQV6nB9wPf--QeTuAd3mfiQGFBDM8ResyhJQ"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                Ahmet Yılmaz
              </p>
              <p className="text-xs text-slate-500">Sistem Yöneticisi</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-8">
        {/* Page Title & Actions */}
        <SettingsHeader />
        {/* Tabs */}
        <SettingsTabs value={tab} onValueChange={setTab} />
        {/* Tab Content */}
        {tab === "genel" && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3 space-y-8 order-2 lg:order-1">
              <GeneralSection />
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <ProfileSidebar />
            </div>
          </div>
        )}
        {tab === "planlama" && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3 space-y-8 order-2 lg:order-1">
              <PlanningSection />
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <ProfileSidebar />
            </div>
          </div>
        )}
        {tab === "tercihler" && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3 order-2 lg:order-1">
              <PreferencesSection />
            </div>
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <ProfileSidebar />
            </div>
          </div>
        )}
        {/* Mobile Action Bar */}
        <div className="md:hidden sticky bottom-6 z-40 px-4">
          <Button className="w-full py-4 text-white font-bold shadow-2xl flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">save</span>{" "}
            Değişiklikleri Kaydet
          </Button>
        </div>
      </main>
      {/* Footer */}
      {/* ...existing code... */}
    </div>
  );
}
