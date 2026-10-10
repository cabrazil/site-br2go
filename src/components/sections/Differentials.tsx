"use client";

import {
  Target, GitBranch, Code2, Server, Search, Brain, Zap, TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { DIFFERENTIALS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, GitBranch, Code2, Server, Search, Brain, Zap, TrendingUp,
};

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-24 lg:py-32 bg-[var(--background)] scroll-mt-16"
      aria-label="Diferenciais da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Por que a BR2GO"
            title="Muito além do desenvolvimento."
            description="Participamos de todas as etapas do produto — não apenas escrevemos código. Entregamos sistemas que funcionam, crescem e evoluem."
          />
        </AnimatedSection>

        {/* Flow indicator */}
        <AnimatedSection delay={0.15} className="mt-12 mb-4">
          <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] opacity-60">
            <div className="flex items-center gap-1.5">
              {DIFFERENTIALS.map((d, i) => (
                <span key={d.id} className="flex items-center gap-1">
                  <span className="font-medium">{d.title}</span>
                  {i < DIFFERENTIALS.length - 1 && (
                    <span className="text-[var(--border)]">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isLast = index === DIFFERENTIALS.length - 1;

            return (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className="group relative bg-[var(--background)] p-8 flex flex-col gap-4 hover:bg-[var(--muted)]/50 transition-colors duration-200"
                aria-label={`Diferencial: ${item.title}`}
              >
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-light)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors duration-200">
                  {Icon && (
                    <Icon className="w-4 h-4 text-[var(--accent)] group-hover:text-white transition-colors duration-200" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Accent indicator bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Arrow for flow */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                    <div className="w-5 h-[1px] bg-[var(--border)]" />
                    <div className="absolute right-0 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[var(--border)]" />
                  </div>
                )}
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
