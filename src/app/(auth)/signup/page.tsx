"use client";

import React from "react";
import { SignupSidebar } from "./_components/signup-sidebar";
import { SignupForm } from "./_components/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row font-display bg-background-light dark:bg-background-dark">
      <SignupSidebar />
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-white dark:bg-background-dark">
        <SignupForm />
      </div>
    </div>
  );
}
