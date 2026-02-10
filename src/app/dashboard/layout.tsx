import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-page-bg text-navy-text font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-sidebar-bg flex flex-col fixed h-full z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary rounded-lg p-1.5 shadoq-sm">
            <span className="material-symbols-outlined text-white">factory</span>
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight text-navy-text">
              Üretim Motoru
            </h1>
            <p className="text-xs text-slate-500">Planlama Paneli</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors group"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/bom"
            className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors group"
          >
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm font-bold">Ürünler & Reçeteler</span>
          </Link>
          <Link
            href="/dashboard/reports"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors group"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm font-medium">Raporlar</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors group"
          >
            <span className="material-symbols-outlined">warehouse</span>
            <span className="text-sm font-medium">Envanter</span>
          </Link>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors group"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Ayarlar</span>
            </Link>
          </div>
        </nav>

        <div className="p-4 bg-white m-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75DO_rCd9qRtCG0ec4r57cB5WDht3tSKuGsM5m3uIjix4CSm8KXdwysxr6K5NTnxJ6ipcaKE7IwF5upVoMibXMWlmdNtqz5T1ZtDrT77APlCpjOOtLzEIN7JUmOMm8Nh5WlMyh7erHNC3gzf4eSdjbA_2lhSJq9hKw4JtiSNqMS9SGl44ElbdK54lKgF27CR_mN8T9_51rSwUbedxrpxsMe-ypwQeFWYBwL66b7chkjKYqp3xOFytdL_GKLlDmy3qYRlPViwTWLk"
                alt="Kullanıcı Profil Fotoğrafı"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate text-navy-text">
                Ahmet Yılmaz
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                Üretim Müdürü
              </p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <span className="material-symbols-outlined text-sm">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
