import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx("w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[40px]", className),
      )}
      {...props}
    >
      {children}
    </div>
  );
};
