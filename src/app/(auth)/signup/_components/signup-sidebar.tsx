import React from "react";

export function SignupSidebar() {
  return (
    <div className="relative hidden md:flex md:w-1/2 bg-slate-900 overflow-hidden flex-col justify-between p-12 text-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent"></div>
        <img
          alt="Industrial production floor with modern machinery"
          className="w-full h-full object-cover mix-blend-overlay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADuLZbPgJbSuVuEzU0o_eodjF967FuoAsekkeueK_ankMfxKP3VpKYEljk8sHTXJBF3PwznpURtrvp01BhA9gL8o_XS2Oo3C7-qKMEL9K6ykOb-lNl5DOBaG2o2hc-4nEXUP57bvOo7Ww6-CSuleIdRauCzi6a_Q8x-gfBFaNdJEth4ASKHT3d4fN-rq_usAblHqe5mJa7sberg3Gc19ACBvV6Ke703l-Or3QuTb83SpHvQVL95svvzYJUryK0NpGBGSiYXUbPrYI"
        />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-primary p-2 rounded-lg">
            <span className="material-icons-round text-white text-3xl">
              settings_input_component
            </span>
          </div>
          <span className="text-2xl font-bold tracking-tight">
            PLANNER<span className="text-primary">PRO</span>
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
          Geleceğin Üretim Planlama Sistemine Katılın
        </h1>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <span className="material-icons-round text-primary">analytics</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Gelişmiş MRP Çözümleri</h3>
              <p className="text-slate-400 text-sm">
                Malzeme gereksinimlerini hatasız ve otomatik olarak yönetin.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <span className="material-icons-round text-primary">
                precision_manufacturing
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Gerçek Zamanlı Kapasite Planlama
              </h3>
              <p className="text-slate-400 text-sm">
                Kaynak kullanımını anlık izleyin ve darboğazları önleyin.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-2 rounded-lg mt-1">
              <span className="material-icons-round text-primary">auto_awesome</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Akıllı Çizelgeleme</h3>
              <p className="text-slate-400 text-sm">
                Yapay zeka ile üretim sıralarını optimize edin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-sm text-slate-400">
        © 2024 PlannerPro Industrial Solutions. Tüm hakları saklıdır.
      </div>
    </div>
  );
}
