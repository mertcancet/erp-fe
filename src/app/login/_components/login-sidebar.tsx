import React from "react";

export function LoginSidebar() {
  return (
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
  );
}
