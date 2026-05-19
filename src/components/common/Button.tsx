import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-5 py-3 transition font-medium",
        {
          "bg-gradient-primary text-white": variant === "primary",
          "glass": variant === "secondary",
          "hover:bg-white/10": variant === "ghost",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}