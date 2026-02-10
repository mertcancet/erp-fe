import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-[40%] bg-background-dark p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            width="100%"
          >
            <defs>
              <pattern
                height="10"
                id="grid"
                patternUnits="userSpaceOnUse"
                width="10"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.1"
                ></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-primary mb-24">
            <span className="material-symbols-outlined text-4xl font-bold">
              precision_manufacturing
            </span>
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              PLANNING
              <span className="text-primary text-opacity-80">ENGINE</span>
            </span>
          </div>
          <div className="space-y-6 max-w-md">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              Üretim Planlamayı <br />
              <span className="text-primary">Yazılımınıza</span> Taşıyın.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Karmaşık üretim süreçlerini optimize edin, kaynak verimliliğini
              artırın ve operasyonel mükemmelliğe modern algoritmalarla ulaşın.
            </p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-600 flex items-center justify-center text-[10px]">
                ED
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-primary flex items-center justify-center text-[10px]">
                MK
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-500 flex items-center justify-center text-[10px]">
                AS
              </div>
            </div>
            <p className="text-xs text-slate-300">
              500+ Endüstriyel tesis tarafından güvenilen çözüm.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-background-light">
        <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Hoş Geldiniz
            </h2>
            <p className="text-slate-500 text-sm">
              Devam etmek için hesabınıza giriş yapın.
            </p>
          </div>
          <form className="space-y-5">
            <div className="space-y-2">
              <Label
                className="text-sm font-semibold text-slate-700"
                htmlFor="email"
              >
                E-posta Adresi
              </Label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                  mail
                </span>
                <Input
                  className="w-full pl-11 pr-4 py-6 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary"
                  id="email"
                  placeholder="ornek@sirket.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  className="text-sm font-semibold text-slate-700"
                  htmlFor="password"
                >
                  Şifre
                </Label>
                <Link
                  className="text-xs font-semibold text-primary hover:underline"
                  href="#"
                >
                  Şifremi Unuttum
                </Link>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                  lock
                </span>
                <Input
                  className="w-full pl-11 pr-4 py-6 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary"
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label
                className="text-sm text-slate-600 font-normal cursor-pointer"
                htmlFor="remember"
              >
                Beni Hatırla
              </Label>
            </div>
            <Button
              className="w-full py-6 bg-primary text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all gap-2"
              type="submit"
            >
              Giriş Yap
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Button>
          </form>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-medium">
                veya şununla bağlan
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.896 4.136-1.24 1.24-3.152 2.52-6.744 2.52-5.404 0-9.692-4.388-9.692-9.792s4.288-9.792 9.692-9.792c3.096 0 5.272 1.24 7.128 3l2.304-2.304C18.216 1.152 15.512 0 12.092 0 5.58 0 0 5.58 0 12s5.58 12 12.092 12c3.504 0 6.144-1.152 8.164-3.264 2.104-2.104 2.776-5.064 2.776-7.44 0-.72-.064-1.392-.192-2.064h-10.36z"
                  fill="currentColor"
                ></path>
              </svg>
              Google
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                ></path>
              </svg>
              GitHub
            </Button>
          </div>
          <div className="pt-6 text-center">
            <p className="text-sm text-slate-500">
              Henüz hesabınız yok mu?{" "}
              <Link className="font-bold text-primary hover:underline" href="#">
                Kaydolun
              </Link>
            </p>
          </div>
        </div>
        <footer className="mt-12 flex gap-8 text-xs text-slate-400 font-medium">
          <Link className="hover:text-slate-600 transition-colors" href="#">
            Kullanım Koşulları
          </Link>
          <Link className="hover:text-slate-600 transition-colors" href="#">
            Gizlilik Politikası
          </Link>
          <Link className="hover:text-slate-600 transition-colors" href="#">
            Destek
          </Link>
        </footer>
      </main>
    </div>
  );
}
