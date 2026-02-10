export default function DesignSystemPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="w-64 border-r border-sidebar-border hidden lg:block sticky top-0 h-screen overflow-y-auto bg-sidebar">
        <div className="p-6 border-b border-sidebar-border flex items-center gap-3 text-primary">
          <span className="material-symbols-outlined text-3xl font-bold">
            design_services
          </span>
          <h1 className="text-xl font-extrabold tracking-tight">
            Design System
          </h1>
        </div>
        <nav className="p-4 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-sidebar-foreground bg-sidebar-accent rounded-lg"
            href="#giris"
          >
            <span className="material-symbols-outlined text-lg">info</span>{" "}
            Giriş
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            href="#renk-paleti"
          >
            <span className="material-symbols-outlined text-lg">palette</span>{" "}
            Renk Paleti
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            href="#tipografi"
          >
            <span className="material-symbols-outlined text-lg">
              text_fields
            </span>{" "}
            Tipografi
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            href="#bilesenler"
          >
            <span className="material-symbols-outlined text-lg">widgets</span>{" "}
            Bileşenler
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            href="#ikon-seti"
          >
            <span className="material-symbols-outlined text-lg">category</span>{" "}
            İkon Seti
          </a>
        </nav>
      </aside>
      <main className="flex-1 max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <header className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">
            Tasarım Sistemi ve Stil Rehberi
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Üretim planlama motoru için geliştirilen, veri odaklı ve teknik
            gereksinimleri karşılayan kurumsal tasarım standartları
            dokümantasyonu (Açık Tema).
          </p>
        </header>
        <section className="mb-16" id="renk-paleti">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="material-symbols-outlined text-primary text-2xl">
              palette
            </span>
            <h3 className="text-2xl font-bold">Renk Paleti</h3>
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Kurumsal Maviler
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-primary border border-border"></div>
                  <span className="text-xs font-bold">Primary</span>
                  <span className="text-[10px] text-muted-foreground">
                    #135BEC
                  </span>
                </div>
                {/* Note: Specific shades like blue-600 are standard Tailwind, 
                    but our config only mapped semantic names. 
                    Using hardcoded hex or tailwind defaults for verification of standard palette availability. */}
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-blue-600 border border-border"></div>
                  <span className="text-xs font-bold">Blue 600</span>
                  <span className="text-[10px] text-muted-foreground">
                    #2563EB
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-blue-500 border border-border"></div>
                  <span className="text-xs font-bold">Blue 500</span>
                  <span className="text-[10px] text-muted-foreground">
                    #3B82F6
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-blue-100 border border-border"></div>
                  <span className="text-xs font-bold">Blue Light</span>
                  <span className="text-[10px] text-muted-foreground">
                    #DBEAFE
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Durum Renkleri
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-success border border-border"></div>
                  <span className="text-xs font-bold">Success</span>
                  <span className="text-[10px] text-muted-foreground">
                    #10B981
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-warning border border-border"></div>
                  <span className="text-xs font-bold">Warning</span>
                  <span className="text-[10px] text-muted-foreground">
                    #F59E0B
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-danger border border-border"></div>
                  <span className="text-xs font-bold">Danger</span>
                  <span className="text-[10px] text-muted-foreground">
                    #EF4444
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                Nötr Griler
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-slate-900 border border-slate-800"></div>
                  <span className="text-xs font-bold">Slate 900</span>
                  <span className="text-[10px] text-muted-foreground">
                    #0F172A
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-slate-500"></div>
                  <span className="text-xs font-bold">Slate 500</span>
                  <span className="text-[10px] text-muted-foreground">
                    #64748B
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-slate-200 border border-slate-300"></div>
                  <span className="text-xs font-bold">Slate 200</span>
                  <span className="text-[10px] text-muted-foreground">
                    #E2E8F0
                  </span>
                </div>
                <div className="color-card">
                  <div className="h-16 rounded-lg bg-white border border-border"></div>
                  <span className="text-xs font-bold">White</span>
                  <span className="text-[10px] text-muted-foreground">
                    #FFFFFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16" id="tipografi">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="material-symbols-outlined text-primary text-2xl">
              text_fields
            </span>
            <h3 className="text-2xl font-bold">Tipografi</h3>
          </div>
          <div className="doc-section-card">
            <div className="p-8 space-y-8">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-4">
                  Başlık Ölçekleri
                </p>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      H1 - 36px / Manrope ExtraBold
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                      H2 - 30px / Manrope Bold
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-2xl font-bold text-foreground">
                      H3 - 24px / Manrope Bold
                    </span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xl font-semibold text-foreground">
                      H4 - 20px / Manrope SemiBold
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-4">
                  Gövde Ölçekleri
                </p>
                <div className="space-y-6">
                  <div className="max-w-xl">
                    <p className="text-base font-normal leading-relaxed text-foreground">
                      <span className="font-bold">Body (Base) - 16px:</span>{" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Üretim süreçleri optimize edilirken veri doğruluğu en
                      yüksek seviyede tutulmalıdır.
                    </p>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                      <span className="font-bold text-foreground">
                        Body (Small) - 14px:
                      </span>{" "}
                      Karmaşık veri setlerini ve çizelgeleme algoritmalarını
                      görselleştirmek için optimize edilmiştir.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      Caption - 12px / Uppercase / Bold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16" id="bilesenler">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="material-symbols-outlined text-primary text-2xl">
              widgets
            </span>
            <h3 className="text-2xl font-bold">Bileşenler</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-muted-foreground uppercase">
                Butonlar
              </h4>
              <div className="p-6 doc-section-card flex flex-wrap gap-4 items-center">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                  Birincil İşlem
                </button>
                <button className="px-4 py-2 border border-border text-foreground rounded-lg text-sm font-bold hover:bg-accent transition-all">
                  İkincil
                </button>
                <button className="p-2 bg-accent rounded-lg text-foreground hover:bg-muted transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-muted-foreground uppercase">
                Rozetler (Badges)
              </h4>
              <div className="p-6 doc-section-card flex flex-wrap gap-4 items-center">
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase">
                  Tamamlandı
                </span>
                <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                  Aktif
                </span>
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase">
                  Beklemede
                </span>
                <span className="px-2.5 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase">
                  Gecikme
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-muted-foreground uppercase">
                Girdi &amp; Arama
              </h4>
              <div className="p-6 doc-section-card space-y-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-accent border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                    placeholder="Arama yapın..."
                    type="text"
                  />
                </div>
                <input
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-foreground"
                  placeholder="Metin giriniz"
                  type="text"
                  defaultValue="Aktif Değer"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-muted-foreground uppercase">
                Veri Kartları
              </h4>
              <div className="p-6 doc-section-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      Miktar
                    </p>
                    <p className="text-2xl font-extrabold tracking-tight text-foreground">
                      2.450{" "}
                      <span className="text-sm font-normal text-muted-foreground">
                        Adet
                      </span>
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      inventory_2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16" id="ikon-seti">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <span className="material-symbols-outlined text-primary text-2xl">
              category
            </span>
            <h3 className="text-2xl font-bold">İkon Seti</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            Sistem genelinde kullanılan teknik ve minimalist Material Symbols
            Outlined seti.
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {[
              "precision_manufacturing",
              "engineering",
              "schedule",
              "analytics",
              "link",
              "notifications",
              "search",
              "inventory",
              "settings",
              "dashboard",
            ].map((icon) => (
              <div
                key={icon}
                className="flex flex-col items-center gap-2 p-4 doc-section-card"
              >
                <span className="material-symbols-outlined text-2xl text-foreground">
                  {icon}
                </span>
                <span className="text-[10px] text-muted-foreground text-center truncate w-full">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
