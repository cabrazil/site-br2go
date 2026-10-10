import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-[var(--foreground)] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
