import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function ProfileSidebar() {
  return (
    <div className="space-y-8">
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
              <span className="material-symbols-outlined text-sm">edit</span>
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
          <CardTitle className="font-bold mb-6">Görünüm Tercihleri</CardTitle>
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
              <span className="text-sm font-semibold">Anlık Bildirimler</span>
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
            Parametrelerin planlama algoritmasını nasıl etkilediğini öğrenmek
            için{" "}
            <a className="underline font-bold" href="#">
              dokümantasyonumuzu
            </a>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </Card>
    </div>
  );
}
