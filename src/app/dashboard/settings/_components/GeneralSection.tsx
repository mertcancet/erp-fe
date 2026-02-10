import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export function GeneralSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <CardTitle className="text-lg font-bold">Kurumsal Bilgiler</CardTitle>
        <span className="material-symbols-outlined text-slate-400">info</span>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Şirket Adı</Label>
          <Input id="company" value="Industrial Solutions Ltd." />
        </div>
        <div className="flex flex-col gap-2">
          <Select label="Sistem Dili" id="lang" defaultValue="Türkçe (TR)">
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
            <p className="text-xs text-slate-400 mt-1">PNG, JPG (Max 5MB)</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
