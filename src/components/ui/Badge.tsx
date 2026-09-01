import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "neutral" | "accent";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide";

  const variants = {
    primary: "bg-blue-50 text-blue-700 border border-blue-100",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200",
    accent: "bg-amber-50 text-amber-700 border border-amber-100",
  };

  return (
    <span
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      {children}
    </span>
  );
};
