import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'blue' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const buttonConfig = {
  base: "inline-flex items-center justify-center font-display font-bold uppercase transition-all duration-200 border-2 border-ink shadow-[4px_4px_0px_transparent] hover:shadow-[4px_4px_0px_#080808] hover:-translate-y-1 hover:-translate-x-1",
  variants: {
    primary: "bg-lime text-ink",
    secondary: "bg-ink text-paper hover:bg-orange hover:text-ink",
    blue: "bg-blue text-paper hover:bg-lime hover:text-ink",
    outline: "bg-transparent text-ink",
  },
  sizes: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonConfig.base, buttonConfig.variants[variant], buttonConfig.sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export interface LinkButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'blue' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(buttonConfig.base, buttonConfig.variants[variant], buttonConfig.sizes[size], className)}
        {...props}
      />
    );
  }
);
LinkButton.displayName = "LinkButton";
