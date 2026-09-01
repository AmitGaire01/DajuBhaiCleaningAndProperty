import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 select-none';

  const variants = {
    primary: 'bg-[#2D6B23] hover:bg-[#23541b] text-white rounded-[9999px] shadow-sm focus:ring-[#2D6B23]',
    secondary: 'bg-white/60 hover:bg-white/90 text-gray-800 border border-gray-200/60 rounded-[9999px] backdrop-blur-sm shadow-sm focus:ring-gray-300',
    tertiary: 'bg-[#76B947] hover:bg-[#65a33b] text-white rounded-[9999px] shadow-sm focus:ring-[#76B947]',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700 rounded-[9999px] focus:ring-[#1A4670]',
    ghost: 'hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-[9999px] focus:ring-gray-300',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 h-[38px] gap-1.5',
    md: 'text-sm px-[24px] py-[12px] h-[48px] gap-2 font-medium',
    lg: 'text-base px-[32px] py-[16px] h-[56px] gap-[8px] font-medium',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0 items-center">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0 items-center">{icon}</span>}
    </button>
  );
};
