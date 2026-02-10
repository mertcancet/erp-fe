import { Button } from "@/components/ui/button";

export function SettingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Sistem Ayarları ve Konfigürasyon
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          Endüstriyel üretim planlama parametrelerini ve kullanıcı bazlı arayüz
          tercihlerini buradan yönetin.
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
  );
}
