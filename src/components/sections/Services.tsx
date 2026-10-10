"use client";

import { Layers, Workflow, Lightbulb, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers, Workflow, Lightbulb, BarChart2,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="py-24 lg:py-32 bg-[var(--muted)]/30 scroll-mt-16"
      aria-label="Serviços da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow="Serviços"
            title="Quatro pilares. Um produto."
          />
          <p className="text-base text-[var(--muted-foreground)] max-w-sm lg:text-right leading-relaxed">
            Não listamos dezenas de serviços. Fazemos poucas coisas — e as fazemos muito bem.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                variants={staggerItem}
                className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-md ${
                  service.highlight
                    ? "bg-[var(--accent)] border-[var(--accent)] text-white"
                    : "bg-[var(--card)] border-[var(--card-border)] hover:border-[var(--accent)]/30"
                }`}
                aria-label={`Serviço: ${service.title}`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
                    service.highlight
                      ? "bg-white/15"
                      : "bg-[var(--accent-light)]"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-5 h-5 ${
                        service.highlight
                          ? "text-white"
                          : "text-[var(--accent)]"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    service.highlight
                      ? "text-white"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight
                      ? "text-white/75"
                      : "text-[var(--muted-foreground)]"
                  }`}
                >
                  {service.description}
                </p>

                {/* Hover accent */}
                {!service.highlight && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
