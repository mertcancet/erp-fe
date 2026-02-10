import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export function PlanningSection() {
  return (
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
  );
}
