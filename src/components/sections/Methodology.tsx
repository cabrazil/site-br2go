"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { METHODOLOGY_STEPS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Methodology() {
  const lineRef = useRef<SVGLineElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="metodologia"
      className="py-24 lg:py-32 bg-[var(--background)] overflow-hidden scroll-mt-16"
      aria-label="Metodologia da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <SectionTitle
            eyebrow="Como trabalhamos"
            title="Do conceito ao produto vivo."
            align="center"
            description="Um processo estruturado, sem surpresas — com clareza em cada etapa."
          />
        </AnimatedSection>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Horizontal line — desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1px] bg-[var(--border)]">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[var(--accent)] origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {METHODOLOGY_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Node */}
                <div className="relative flex items-center justify-center mb-6">
                  <motion.div
                    className="w-[3.5rem] h-[3.5rem] rounded-full border-2 border-[var(--accent)] bg-[var(--background)] flex items-center justify-center z-10"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}
                  >
                    <span className="text-sm font-bold text-[var(--accent)]">
                      {step.number}
                    </span>
                  </motion.div>
                  {/* Connector for mobile */}
                  {index < METHODOLOGY_STEPS.length - 1 && (
                    <div className="lg:hidden absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-[var(--border)]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
