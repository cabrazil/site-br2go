"use client";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)] active:scale-[0.98]",
    ghost:
      "text-[var(--foreground)] hover:bg-[var(--muted)] active:scale-[0.98]",
    outline:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-3.5 py-2 h-8",
    md: "text-sm px-5 py-2.5 h-10",
    lg: "text-base px-7 py-3.5 h-12",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}

// ─── Link Button ────────────────────────────────────────────────────────────────
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  href: string;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 select-none no-underline";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] active:scale-[0.98] shadow-sm",
    secondary:
      "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)] active:scale-[0.98]",
    ghost:
      "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] active:scale-[0.98]",
    outline:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)] active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-3.5 py-2 h-8",
    md: "text-sm px-5 py-2.5 h-10",
    lg: "text-base px-7 py-3.5 h-12",
  };

  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}
