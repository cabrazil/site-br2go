"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/ui/HeroIllustration";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-grid-bg pt-16"
      aria-label="Seção principal"
    >
      {/* Glow ambiental sutil */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(12,92,111,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="flex flex-col">
            {/* Badge de destaque */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8 w-fit"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                Da primeira ideia ao produto em produção
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--foreground)] text-balance"
            >
              Transformando{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--accent)" }}
              >
                ideias
                {/* underline accent */}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 6 Q50 2 100 5 Q150 8 198 4"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </svg>
              </span>{" "}
              em produtos digitais completos.
            </motion.h1>

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-3">
                Da estratégia ao lançamento.
              </p>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl text-balance">
                Projetamos, desenvolvemos e evoluímos aplicações{" "}
                <strong className="font-medium text-[var(--foreground)]">web</strong>,{" "}
                <strong className="font-medium text-[var(--foreground)]">mobile</strong>,{" "}
                <strong className="font-medium text-[var(--foreground)]">automações</strong> e{" "}
                <strong className="font-medium text-[var(--foreground)]">plataformas digitais</strong>.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <LinkButton
                href="#projetos"
                variant="primary"
                size="lg"
                className="group"
              >
                Conheça nossos projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </LinkButton>
              <LinkButton
                href="#contato"
                variant="ghost"
                size="lg"
                className="group"
              >
                Fale conosco
                <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)] group-hover:translate-x-0.5 transition-transform duration-150" />
              </LinkButton>
            </motion.div>

            {/* Micro stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-14 flex items-center gap-8"
            >
              {[
                { value: "35+", label: "anos de experiência" },
                { value: "100%", label: "foco em produto" },
                { value: "end-to-end", label: "da ideia ao ar" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-bold text-[var(--foreground)] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--background))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
