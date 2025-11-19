import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95";

  const variantStyles = {
    primary:
      "bg-synapse-blue text-void-black hover:bg-synapse-blue/90 shadow-[0_0_20px_rgba(0,194,255,0.4)] hover:shadow-[0_0_30px_rgba(0,194,255,0.6)]",
    secondary:
      "glass border-synapse-blue/50 text-synapse-blue hover:bg-synapse-blue/10 hover:border-synapse-blue",
    ghost: "text-circuit-silver hover:text-synapse-blue hover:bg-white/5",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
