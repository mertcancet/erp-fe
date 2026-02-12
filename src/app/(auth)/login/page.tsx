import React from "react";
import { LoginSidebar } from "./_components/login-sidebar";
import { LoginForm } from "./_components/login-form";
import { LoginFooter } from "./_components/login-footer";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <LoginSidebar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 bg-background-light">
        <LoginForm />
        <LoginFooter />
      </main>
    </div>
  );
}
