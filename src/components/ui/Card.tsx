import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  hover = false,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "bg-white rounded-2xl border border-slate-100 p-6 shadow-sm shadow-slate-200/50",
          hover &&
            "transition-all duration-300 hover:shadow-md hover:border-slate-200 hover:-translate-y-1",
          className,
        ),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
