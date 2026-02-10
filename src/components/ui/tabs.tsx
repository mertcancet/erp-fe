import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  tabs: { value: string; label: React.ReactNode; icon?: React.ReactNode }[];
  className?: string;
}

export function Tabs({ value, onValueChange, tabs, className }: TabsProps) {
  return (
    <div
      className={cn(
        "flex gap-8 border-b border-slate-200 dark:border-slate-800",
        className,
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={cn(
            "pb-4 text-sm font-bold tracking-wide transition-all flex items-center gap-2 border-b-3 border-transparent",
            value === tab.value && "tab-active border-primary text-primary",
          )}
          onClick={() => onValueChange(tab.value)}
          type="button"
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
