import React from "react";
import Link from "next/link";

export function LoginFooter() {
  return (
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
  );
}
