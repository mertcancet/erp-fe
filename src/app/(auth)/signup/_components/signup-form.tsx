import React from "react";
import Link from "next/link";

export function SignupForm() {
  return (
    <div className="w-full max-w-md">
      {/* Mobile Logo (Visible only on small screens) */}
      <div className="flex items-center gap-2 mb-8 md:hidden">
        <div className="bg-primary p-2 rounded-lg">
          <span className="material-icons-round text-white text-2xl">
            settings_input_component
          </span>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          PLANNER<span className="text-primary">PRO</span>
        </span>
      </div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Yeni Hesap Oluştur
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Üretim süreçlerinizi dijitalleştirmeye hemen başlayın.
        </p>
      </div>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="full_name"
            >
              Ad Soyad
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              id="full_name"
              name="full_name"
              placeholder="Örn: Ahmet Yılmaz"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="company_name"
            >
              Şirket Adı
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              id="company_name"
              name="company_name"
              placeholder="Şirketinizin tam adı"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="email"
            >
              İş E-postası
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
              id="email"
              name="email"
              placeholder="isim@sirket.com"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="password"
            >
              Şifre
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                type="button"
              >
                <span className="material-icons-round text-xl">visibility_off</span>
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 italic">
              En az 8 karakter, bir büyük harf ve bir rakam içermelidir.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="flex items-center">
            <input
              className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary/30 transition-colors cursor-pointer"
              id="terms"
              name="terms"
              type="checkbox"
            />
          </div>
          <label
            className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none"
            htmlFor="terms"
          >
            <Link className="text-primary hover:underline font-medium" href="#">
              Kullanım Koşullarını
            </Link>{" "}
            ve{" "}
            <Link className="text-primary hover:underline font-medium" href="#">
              Gizlilik Politikası
            </Link>
            'nı kabul ediyorum.
          </label>
        </div>
        <button
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
          type="submit"
        >
          <span>Hesap Oluştur</span>
          <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Zaten hesabınız var mı?
          <Link
            className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 ml-1"
            href="/login"
          >
            Giriş Yap
          </Link>
        </p>
      </div>
      {/* Simple Social Registration Divider */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-background-dark px-4 text-slate-400">
            Veya şununla devam et
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <button
          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
          type="button"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="currentColor"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="currentColor"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="currentColor"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="currentColor"
            ></path>
          </svg>
          <span>Google ile Kaydol</span>
        </button>
      </div>
    </div>
  );
}
