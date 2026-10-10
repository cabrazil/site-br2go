"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTA() {
  return (
    <section
      id="contato"
      className="py-24 lg:py-36 bg-[#080c10] text-white relative overflow-hidden scroll-mt-16 border-t border-zinc-800/80"
      aria-label="Chamada para ação — fale com a BR2GO"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[400px] rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-6">
            Vamos trabalhar juntos
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white text-balance">
            Vamos transformar sua{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #2dd4bf, #14b8a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ideia
            </span>{" "}
            em realidade.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto text-balance">
            Da estratégia ao lançamento. Sem achismos, sem overpromise. Apenas engenharia séria e produto funcionando.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold text-base active:scale-[0.98] transition-all duration-200 shadow-lg shadow-teal-500/20 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Conversar no WhatsApp com a BR2GO"
            >
              Conversar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
            </motion.a>
            <a
              href={CONTACT_INFO.emailLink}
              className="inline-flex items-center gap-2.5 text-sm font-medium text-zinc-100 hover:text-white transition-colors duration-150 px-6 py-4 rounded-xl border border-zinc-700/80 bg-zinc-900/80 hover:bg-zinc-800"
              aria-label="Enviar email para a BR2GO"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Subtle trust signals */}
          <div className="mt-14 flex items-center justify-center gap-6 flex-wrap">
            {["Sem contratos longos", "Processo transparente", "Entregas incrementais"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span className="text-xs font-medium text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
