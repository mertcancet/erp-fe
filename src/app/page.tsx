"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-2xl leading-none">
                account_tree
              </span>
            </div>
            <span className="text-xl font-bold tracking-tight text-navy dark:text-white font-display">
              PlanningEngine
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Özellikler
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Dokümantasyon
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Kurumsal
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              href="#"
            >
              GitHub{" "}
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex px-5 py-2 rounded-lg bg-primary text-white font-bold text-sm hover:opacity-90 transition-opacity">
              Hemen Başla
            </Button>
            <button
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined dark:hidden">
                dark_mode
              </span>
              <span className="material-symbols-outlined hidden dark:block text-yellow-400">
                light_mode
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40 -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 w-fit">
              <span className="text-xs font-bold uppercase tracking-wider">
                v2.4.0 Yayında
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-navy dark:text-white font-display">
              Üretim Planlamayı{" "}
              <span className="text-primary">Yazılımınıza Taşıyın</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              ERP ve üretim yazılımları için geliştirilmiş, MRP, kapasite
              planlama ve akıllı çizelgeleme sunan modern ve ölçeklenebilir bir
              TypeScript planlama motoru.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/login">
                <Button className="px-8 py-6 rounded-lg bg-primary text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                  Dokümantasyonu İncele
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="px-8 py-6 rounded-lg bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                  Hemen Başla{" "}
                  <span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/5 to-accent-blue/5 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden flex items-center justify-center p-8">
               {/* Placeholder for the image, normally we would import an image or use Next.js Image component */}
               <div className="w-full h-full relative opacity-80 dark:opacity-40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-9xl text-slate-300">image</span>
               </div>

              <div className="absolute top-1/4 -right-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                <span className="text-sm font-medium">
                  99.9% Hesaplama Hassasiyeti
                </span>
              </div>
              <div className="absolute bottom-1/4 -left-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-500">
                  bolt
                </span>
                <span className="text-sm font-medium">Milisaniye Gecikme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-navy dark:text-white font-display">
              Kurumsal Düzeyde Özellikler
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Karmaşık tedarik zinciri ve üretim süreçlerini yönetmek için
              ihtiyacınız olan tüm temel mantık hazır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  layers
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                Malzeme İhtiyaç Planlama (MRP)
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Çok seviyeli ürün ağacı (BOM) işleme ve bağımlılık takibi ile
                ölçeklenebilir malzeme planlaması.
              </p>
            </div>
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                Kapasite Planlama (CRP)
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Gerçek zamanlı darboğaz tespiti ve otomatik kaynak atama
                algoritmaları ile kapasite yönetimi.
              </p>
            </div>
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                Akıllı Çizelgeleme
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Optimum atölye verimliliği ve yüksek hassasiyetli teslimat
                tarihi tahmini için gelişmiş sezgisel sıralama.
              </p>
            </div>
            <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  terminal
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">
                Yazılımdan Bağımsız Mimari
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Node.js, Deno, Bun veya doğrudan modern tarayıcılarda çalışan
                bağımlılıksız çekirdek mimari.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-navy dark:text-white font-display">
              Nasıl Çalışır
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Entegrasyon sürecimiz 3 basit adımdan oluşur.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-primary flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                1
              </div>
              <h4 className="text-xl font-bold text-navy dark:text-white">
                Veriyi gönder
              </h4>
              <p className="text-slate-500 dark:text-slate-400">
                Ürün ağaçlarını, stok verilerini ve kaynakları API&apos;ye aktarın.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-primary flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                2
              </div>
              <h4 className="text-xl font-bold text-navy dark:text-white">
                Planla
              </h4>
              <p className="text-slate-500 dark:text-slate-400">
                Yüksek performanslı motorumuz kısıtlamaları saniyeler içinde
                çözer.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-slate-800 border-4 border-primary flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                3
              </div>
              <h4 className="text-xl font-bold text-navy dark:text-white">
                Sonucu al
              </h4>
              <p className="text-slate-500 dark:text-slate-400">
                Optimize edilmiş üretim planını sisteminize geri alın.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">15ms</div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">
              ORTALAMA ÇÖZÜM SÜRESİ
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">1M+</div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">
              DESTEKLENEN BOM SEVİYESİ
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">0</div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">
              HARİCİ BAĞIMLILIK
            </div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">
              NATIVE TYPESCRIPT
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary opacity-5 -z-0"></div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy dark:text-white font-display">
            Üretiminizi optimize etmeye hazır mısınız?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Çizelgeleme mantığı için PlanningEngine&apos;e geçen lider
            endüstriyel ERP sağlayıcılarına katılın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="px-10 py-6 rounded-lg bg-primary text-white font-bold text-xl hover:shadow-xl hover:shadow-primary/30 transition-all">
              Hemen Ücretsiz Başlayın
            </Button>
            <Button variant="outline" className="px-10 py-6 rounded-lg border-slate-300 dark:border-slate-700 font-bold text-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              Satışla Konuşun
            </Button>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl leading-none">
                account_tree
              </span>
            </div>
            <span className="text-lg font-bold tracking-tight text-navy dark:text-white font-display">
              PlanningEngine
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">
              Gizlilik
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Güvenlik
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              GitHub
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-slate-400">
            © 2024 PlanningEngine SDK. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
