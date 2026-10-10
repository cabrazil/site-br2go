import { TRUST_BAR_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section
      className="border-y border-[var(--border)] bg-[var(--muted)]/50"
      aria-label="Pilares da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <span className="text-xs font-medium text-[var(--muted-foreground)] opacity-60 mr-2 hidden sm:block">
            Da primeira ideia ao produto em produção.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {TRUST_BAR_ITEMS.map((item, i) => (
              <div key={item} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-[var(--border)] mx-0.5 select-none" aria-hidden="true">
                    •
                  </span>
                )}
                <span className="text-xs font-medium text-[var(--muted-foreground)] tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
