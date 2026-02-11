"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* ✅ Mobile açıkken body scroll kapat */
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const links = [
    {
      href: "/dashboard",
      icon: "dashboard",
      label: "Dashboard",
      match: (p: string) => p === "/dashboard",
    },
    {
      href: "/dashboard/bom",
      icon: "inventory_2",
      label: "Ürünler & Reçeteler",
      match: (p: string) => p.startsWith("/dashboard/bom"),
    },
    {
      href: "/dashboard/reports",
      icon: "analytics",
      label: "Raporlar",
      match: (p: string) => p.startsWith("/dashboard/reports"),
    },
    {
      href: "/dashboard/production-orders/1",
      icon: "assignment_turned_in",
      label: "Üretim Emirleri",
      match: (p: string) => p.startsWith("/dashboard/production-orders"),
    },
  ];

  return (
    <>
      {/* ☰ Mobile hamburger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 rounded-lg bg-white border border-slate-200 shadow"
        >
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      )}

      {/* 🌑 Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 📌 Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 w-64
          bg-white border-r border-slate-200
          transform transition-transform duration-300
          flex flex-col
          h-dvh max-h-dvh
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:sticky md:top-0 md:translate-x-0 md:h-screen md:shrink-0
        `}
      >
        {/* Container for header, nav, footer with proper scroll behavior */}
        <div className="flex flex-col h-full min-h-0">
          {/* 🔝 Header */}
          <div className="shrink-0 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">
                factory
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-sm font-bold">Üretim Motoru</h1>
              <p className="text-xs text-slate-500">Planlama Paneli</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-slate-400"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* 📜 NAV — sadece burası scroll, header ve footer sabit */}
          <nav className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-1">
            {links.map((link) => {
              const active = link.match(pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition ` +
                    (active
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-slate-600 hover:bg-slate-100")
                  }
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {link.icon}
                  </span>
                  <span className="text-sm">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 👤 Footer — sabit, her zaman görünür */}
          <div className="shrink-0 p-4 border-t border-slate-200 bg-white">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB75DO_rCd9qRtCG0ec4r57cB5WDht3tSKuGsM5m3uIjix4CSm8KXdwysxr6K5NTnxJ6ipcaKE7IwF5upVoMibXMWlmdNtqz5T1ZtDrT77APlCpjOOtLzEIN7JUmOMm8Nh5WlMyh7erHNC3gzf4eSdjbA_2lhSJq9hKw4JtiSNqMS9SGl44ElbdK54lKgF27CR_mN8T9_51rSwUbedxrpxsMe-ypwQeFWYBwL66b7chkjKYqp3xOFytdL_GKLlDmy3qYRlPViwTWLk"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold truncate">Ahmet Yılmaz</p>
                <p className="text-[10px] text-slate-500 truncate">
                  Üretim Müdürü
                </p>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined text-sm">
                  logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
