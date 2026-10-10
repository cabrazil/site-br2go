import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--muted)] text-[var(--muted-foreground)] border border-[var(--border)]",
    accent:
      "bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20",
    muted:
      "bg-transparent text-[var(--muted-foreground)] border border-[var(--border)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
