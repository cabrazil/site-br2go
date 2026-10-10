"use client";

import { motion } from "framer-motion";
import { EXPERTISE_AREAS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

export function Experience() {
  return (
    <section
      className="py-24 lg:py-32 bg-[var(--muted)]/30"
      aria-label="Experiência da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <AnimatedSection>
            <SectionTitle
              eyebrow="Experiência"
              title="35 anos construindo tecnologia."
              description="Não somos uma startup que aprendeu a programar ontem. Carregamos décadas de experiência em sistemas reais, com problemas reais e em produção."
            />
            <div className="mt-10 space-y-5">
              <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                Nossa experiência vai muito além das linguagens e frameworks. Entendemos ciclos de produto, falhas de escalabilidade, débito técnico, liderança de equipes e a pressão real de manter sistemas críticos no ar.
              </p>
              <p className="text-base text-[var(--muted-foreground)] leading-relaxed">
                Isso nos permite tomar <strong className="font-medium text-[var(--foreground)]">decisões melhores</strong>, mais rápido — e entregar produtos que duram.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 border-l-2 border-[var(--accent)] pl-5">
              <p className="text-sm text-[var(--muted-foreground)] italic leading-relaxed">
                "Tecnologia sem estratégia é só custo. Estratégia sem tecnologia é só intenção."
              </p>
              <p className="mt-2 text-xs font-medium text-[var(--accent)]">— BR2GO</p>
            </div>
          </AnimatedSection>

          {/* Right — expertise cards */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {EXPERTISE_AREAS.map((area) => (
              <motion.div
                key={area.label}
                variants={staggerItem}
                className="group relative bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-5 hover:border-[var(--accent)]/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-col gap-1">
                  <span
                    className="text-2xl font-bold tracking-tight leading-none"
                    style={{ color: "var(--accent)" }}
                  >
                    {area.years}
                  </span>
                  <span className="text-xs font-medium text-[var(--foreground)] mt-1 leading-snug">
                    {area.label}
                  </span>
                </div>
                {/* Hover underline */}
                <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
