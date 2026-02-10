"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [tab, setTab] = React.useState("genel");
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">
                settings_input_component
              </span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
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
        <div className="flex items-center gap-4">
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
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              alt="Profil"
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Sistem Ayarları ve Konfigürasyon
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
              Endüstriyel üretim planlama parametrelerini ve kullanıcı bazlı
              arayüz tercihlerini buradan yönetin.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">İptal</Button>
            <Button className="px-6 py-2 font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">save</span>
              Değişiklikleri Kaydet
            </Button>
          </div>
        </div>
        {/* Tabs */}
        <Tabs
          value={tab}
          onValueChange={setTab}
          tabs={[
            {
              value: "genel",
              label: "Genel Sistem Ayarları",
              icon: (
                <span className="material-symbols-outlined text-lg">
                  business
                </span>
              ),
            },
            {
              value: "planlama",
              label: "Planlama Varsayılanları",
              icon: (
                <span className="material-symbols-outlined text-lg">
                  settings_suggest
                </span>
              ),
            },
            {
              value: "tercihler",
              label: "Kullanıcı Tercihleri",
              icon: (
                <span className="material-symbols-outlined text-lg">
                  settings
                </span>
              ),
            },
          ]}
        />
        {/* Tab Content */}
        {tab === "genel" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Section: Kurumsal Bilgiler */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800">
                  <CardTitle className="text-lg font-bold">
                    Kurumsal Bilgiler
                  </CardTitle>
                  <span className="material-symbols-outlined text-slate-400">
                    info
                  </span>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="company">Şirket Adı</Label>
                    <Input id="company" value="Industrial Solutions Ltd." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Select
                      label="Sistem Dili"
                      id="lang"
                      defaultValue="Türkçe (TR)"
                    >
                      <option>Türkçe (TR)</option>
                      <option>English (EN)</option>
                      <option>Deutsch (DE)</option>
                    </Select>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <Label>Şirket Logosu</Label>
                    <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
                        upload_file
                      </span>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        Dosyayı buraya sürükleyin veya seçin
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        PNG, JPG (Max 5MB)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              {/* Profil ve Tercihler */}
              <Card className="text-center">
                <CardContent>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      alt="Büyük Profil"
                      className="w-24 h-24 rounded-full border-4 border-slate-50 dark:border-slate-800 shadow-lg"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-AzmsLpj_RhXyHbZTrMnkbgNYtJoGA7eML1OicLe8ZhiXp1DRMadbUyEtqeYhl9zwWLedKmAFfFdNODPdqEN8YRBM5y93KPBAeoL0JxRwpNgK1D02c7na9sL7Kmij24Zp3XEJggobKUrxhFvvzbpI17QTcfky0N1-VEEbNOvqv3I9aEihMdrd92qhU8GLDD1RwmcyG9Ge4cJqKO_m7OWHixlqtctqCeQq1qpp2Xs24JZUkLiudWBuO1lRucxYM0ATq1UhDHCooY"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full border-2 border-white dark:border-slate-900"
                    >
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </Button>
                  </div>
                  <h4 className="font-bold text-lg">Ahmet Yılmaz</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    ahmet.yilmaz@company.com
                  </p>
                  <div className="text-left space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Rol
                      </span>
                      <span className="text-sm font-medium py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        Baş Planlama Koordinatörü
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Son Oturum Açma
                      </span>
                      <span className="text-sm font-medium py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        Bugün, 09:42
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-bold mb-6">
                    Görünüm Tercihleri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        contrast
                      </span>
                      <span className="text-sm font-semibold">
                        Koyu Tema (Dark Mode)
                      </span>
                    </div>
                    <Checkbox
                      onCheckedChange={() =>
                        document.documentElement.classList.toggle("dark")
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        notifications_active
                      </span>
                      <span className="text-sm font-semibold">
                        Anlık Bildirimler
                      </span>
                    </div>
                    <Checkbox checked />
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-500 mb-4 uppercase font-bold tracking-widest">
                      Arayüz Yoğunluğu
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="xs">
                        Geniş
                      </Button>
                      <Button variant="default" size="xs">
                        Orta
                      </Button>
                      <Button variant="outline" size="xs">
                        Sıkışık
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20 flex items-start gap-4 p-6">
                <span className="material-symbols-outlined text-primary">
                  help_outline
                </span>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-1">
                    Yardım Lazım mı?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Parametrelerin planlama algoritmasını nasıl etkilediğini
                    öğrenmek için{" "}
                    <a className="underline font-bold" href="#">
                      dokümantasyonumuzu
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
        {tab === "planlama" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Section: Planlama Varsayılanları */}
              <Card>
                <CardHeader className="border-b border-slate-100 dark:border-slate-800">
                  <CardTitle className="text-lg font-bold">
                    Planlama Varsayılanları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-10 py-6">
                  {/* Buffer Time Slider */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Varsayılan Tampon Süre (Buffer Time)</Label>
                        <p className="text-xs text-slate-500">
                          Operasyonlar arası eklenen emniyet payı.
                        </p>
                      </div>
                      <span className="text-primary font-extrabold bg-primary/10 px-3 py-1 rounded-full text-sm">
                        45 Dakika
                      </span>
                    </div>
                    <Slider min={0} max={180} value={[45]} />
                    <div className="flex justify-between text-xs text-slate-400 px-1">
                      <span>0 dk</span>
                      <span>60 dk</span>
                      <span>120 dk</span>
                      <span>180 dk</span>
                    </div>
                  </div>
                  {/* Scheduling Rules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label>Öncelik Kuralı (Scheduling Rules)</Label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-primary bg-primary/5 cursor-pointer">
                          <input
                            checked
                            className="text-primary focus:ring-primary w-4 h-4"
                            name="rule"
                            type="radio"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              FIFO (İlk Giren İlk Çıkar)
                            </span>
                            <span className="block text-xs text-slate-500">
                              Sıraya önce giren işlere öncelik verilir.
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                          <input
                            className="text-primary focus:ring-primary w-4 h-4"
                            name="rule"
                            type="radio"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              SPT (En Kısa İşlem Süresi)
                            </span>
                            <span className="block text-xs text-slate-500">
                              İşlem süresi en az olan işler öne alınır.
                            </span>
                          </div>
                        </label>
                        <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                          <input
                            className="text-primary focus:ring-primary w-4 h-4"
                            name="rule"
                            type="radio"
                          />
                          <div className="flex-1">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              EDD (En Erken Teslim Tarihi)
                            </span>
                            <span className="block text-xs text-slate-500">
                              Teslimatı en yakın işlere öncelik verilir.
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <Label>Lead Time Parametreleri</Label>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              Dinamik Hesaplama
                            </span>
                            <span className="text-xs text-slate-500 italic">
                              Geçmiş verilere göre optimize et
                            </span>
                          </div>
                          <Checkbox checked />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold">
                              Haftalık Shift Entegrasyonu
                            </span>
                            <span className="text-xs text-slate-500 italic">
                              Vardiya saatlerini dikkate al
                            </span>
                          </div>
                          <Checkbox />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        {tab === "tercihler" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex items-center justify-center text-slate-400 italic h-full min-h-75">
              Kullanıcı tercihleri ile ilgili ayarlar burada olacak.
            </div>
            <div className="space-y-8">
              {/* Profil ve Tercihler */}
              <Card className="text-center">
                <CardContent>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      alt="Büyük Profil"
                      className="w-24 h-24 rounded-full border-4 border-slate-50 dark:border-slate-800 shadow-lg"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-AzmsLpj_RhXyHbZTrMnkbgNYtJoGA7eML1OicLe8ZhiXp1DRMadbUyEtqeYhl9zwWLedKmAFfFdNODPdqEN8YRBM5y93KPBAeoL0JxRwpNgK1D02c7na9sL7Kmij24Zp3XEJggobKUrxhFvvzbpI17QTcfky0N1-VEEbNOvqv3I9aEihMdrd92qhU8GLDD1RwmcyG9Ge4cJqKO_m7OWHixlqtctqCeQq1qpp2Xs24JZUkLiudWBuO1lRucxYM0ATq1UhDHCooY"
                    />
                    <Button
                      size="icon"
                      className="absolute bottom-0 right-0 p-1.5 bg-primary text-white rounded-full border-2 border-white dark:border-slate-900"
                    >
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </Button>
                  </div>
                  <h4 className="font-bold text-lg">Ahmet Yılmaz</h4>
                  <p className="text-sm text-slate-500 mb-6">
                    ahmet.yilmaz@company.com
                  </p>
                  <div className="text-left space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Rol
                      </span>
                      <span className="text-sm font-medium py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        Baş Planlama Koordinatörü
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Son Oturum Açma
                      </span>
                      <span className="text-sm font-medium py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        Bugün, 09:42
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-bold mb-6">
                    Görünüm Tercihleri
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        contrast
                      </span>
                      <span className="text-sm font-semibold">
                        Koyu Tema (Dark Mode)
                      </span>
                    </div>
                    <Checkbox
                      onCheckedChange={() =>
                        document.documentElement.classList.toggle("dark")
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        notifications_active
                      </span>
                      <span className="text-sm font-semibold">
                        Anlık Bildirimler
                      </span>
                    </div>
                    <Checkbox checked />
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-500 mb-4 uppercase font-bold tracking-widest">
                      Arayüz Yoğunluğu
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="xs">
                        Geniş
                      </Button>
                      <Button variant="default" size="xs">
                        Orta
                      </Button>
                      <Button variant="outline" size="xs">
                        Sıkışık
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20 flex items-start gap-4 p-6">
                <span className="material-symbols-outlined text-primary">
                  help_outline
                </span>
                <div>
                  <h4 className="text-sm font-bold text-primary mb-1">
                    Yardım Lazım mı?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Parametrelerin planlama algoritmasını nasıl etkilediğini
                    öğrenmek için{" "}
                    <a className="underline font-bold" href="#">
                      dokümantasyonumuzu
                    </a>{" "}
                    inceleyebilirsiniz.
                  </p>
                </div>
              </Card>
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
