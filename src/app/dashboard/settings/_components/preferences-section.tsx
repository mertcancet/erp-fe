import { Card, CardContent } from "@/components/ui/card";

export function PreferencesSection() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-center text-slate-400 italic h-full min-h-75">
          Kullanıcı tercihleri ile ilgili ayarlar burada olacak.
        </div>
      </CardContent>
    </Card>
  );
}
