import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-3 py-2 text-sm",
            error && "border-destructive ring-destructive/20",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span className="text-xs text-destructive mt-1">{error}</span>
        )}
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
