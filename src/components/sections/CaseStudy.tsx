"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Film, HeartPulse, BookOpen, Database } from "lucide-react";
import {
  VIBESFILM_BADGES,
  VETTUTOR_BADGES,
  SCHOOLASSIST_BADGES,
  INFRA_BADGES,
} from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

// ─── Vibesfilm: emotion wheel (pré-calculado — sem Math.cos/sin em render) ─────
// 150 + 90 * cos/sin para ângulos [0, 60, 120, 180, 240, 300]
const EMOTION_NODES = [
  { cx: 240,   cy: 150    },
  { cx: 195,   cy: 227.94 },
  { cx: 105,   cy: 227.94 },
  { cx: 60,    cy: 150    },
  { cx: 105,   cy: 72.06  },
  { cx: 195,   cy: 72.06  },
];
// 150 + 115 * cos/sin + offset y 4
const EMOTION_LABELS = [
  { x: 265,   y: 154,   label: "😊" },
  { x: 207.5, y: 253.6, label: "😢" },
  { x: 92.5,  y: 253.6, label: "😴" },
  { x: 35,    y: 154,   label: "😤" },
  { x: 92.5,  y: 54.4,  label: "😱" },
  { x: 207.5, y: 54.4,  label: "🤩" },
];

// ─── VetTutor: hub-spoke com pets (pré-calculado) ─────────────────────────────
// 150 + 80 * cos/sin para ângulos [0, 60, 120, 180, 240, 300]
const VETTUTOR_NODES = [
  { cx: 230,    cy: 150    },
  { cx: 190,    cy: 219.28 },
  { cx: 110,    cy: 219.28 },
  { cx: 70,     cy: 150    },
  { cx: 110,    cy: 80.72  },
  { cx: 190,    cy: 80.72  },
];

// ─── School Assist: fluxo linear de mensagem → IA → evento (pré-calculado) ────
// Nós do fluxo posicionados estaticamente no viewBox 300x300
const SA_FLOW_NODES = [
  { cx: 42,  cy: 150, emoji: "💬", label: "WA"     },
  { cx: 110, cy: 150, emoji: "📄", label: "PDF"    },
  { cx: 178, cy: 150, emoji: "🤖", label: "IA"     },
  { cx: 246, cy: 150, emoji: "📅", label: "Evento" },
];
// Nós satélite acima e abaixo do nó de IA
const SA_SATELLITE_NODES = [
  { cx: 178, cy: 88,  emoji: "🏫", label: "Escola" },
  { cx: 178, cy: 212, emoji: "📬", label: "Aviso"  },
];

export function CaseStudy() {
  return (
    <section
      id="projetos"
      className="py-24 lg:py-32 bg-[var(--background)] scroll-mt-16"
      aria-label="Cases da BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Cases em produção"
            title="Projetos que existem no mundo real."
            description="Não apresentamos protótipos nem mockups. Nossos projetos estão em produção, com usuários reais e evoluindo continuamente."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-14 flex flex-col gap-6">

          {/* ─── Card 1: Vibesfilm ─────────────────────────────────────────── */}
          <motion.div variants={staggerItem}>
            <article
              className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg"
              aria-label="Case Vibesfilm"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/50 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Conteúdo */}
                <div className="lg:col-span-3 p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] border border-[var(--accent)]/20 flex items-center justify-center">
                        <Film className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">Vibesfilm</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Em produção • 2024</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl">
                    Uma plataforma completa de{" "}
                    <strong className="font-medium text-[var(--foreground)]">recomendação emocional de filmes</strong>{" "}
                    desenvolvida integralmente pela BR2GO — com aplicativo mobile, backend robusto, automações de curadoria com IA, SEO técnico e infraestrutura em cloud.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {VIBESFILM_BADGES.map((badge) => (
                      <Badge key={badge} variant="muted">{badge}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: "App Mobile", desc: "iOS e Android com React Native" },
                      { label: "Plataforma Web", desc: "Next.js com SEO técnico avançado" },
                      { label: "Curadoria IA (Jev Engine)", desc: "Enriquecimento semântico e scoring emocional" },
                      { label: "Backend & API", desc: "Fastify + PostgreSQL + Supabase" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-[var(--foreground)]">{item.label}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group/link" aria-label="Conversar sobre o projeto Vibesfilm">
                    Conversar sobre este projeto
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>

                {/* Visual — emotion wheel */}
                <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-0 bg-[var(--muted)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-[var(--accent)]/8 blur-3xl" />
                  </div>
                  <svg viewBox="0 0 300 300" fill="none" className="w-60 h-60 relative z-10" aria-hidden="true">
                    <circle cx="150" cy="150" r="90" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="150" cy="150" r="60" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                    <circle cx="150" cy="150" r="30" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.6" />
                    <circle cx="150" cy="150" r="8" fill="var(--accent)" fillOpacity="0.8" />
                    {EMOTION_NODES.map((node, i) => (
                      <g key={i}>
                        <circle cx={node.cx} cy={node.cy} r="8" fill="var(--card)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.5" />
                        <circle cx={node.cx} cy={node.cy} r="3" fill="var(--accent)" fillOpacity="0.6" />
                      </g>
                    ))}
                    {EMOTION_LABELS.map((item, i) => (
                      <text key={i} x={item.x} y={item.y} textAnchor="middle" fontSize="12">{item.label}</text>
                    ))}
                  </svg>
                </div>
              </div>
            </article>
          </motion.div>

          {/* ─── Card 2: VetTutor ──────────────────────────────────────────── */}
          <motion.div variants={staggerItem}>
            <article
              className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg"
              aria-label="Case VetTutor"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-teal-500 via-teal-400/50 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Visual — pet hub-spoke (esquerda) */}
                <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-0 bg-[var(--muted)] flex items-center justify-center overflow-hidden order-last lg:order-first">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-teal-500/6 blur-3xl" />
                  </div>
                  <svg viewBox="0 0 300 300" fill="none" className="w-60 h-60 relative z-10" aria-hidden="true">
                    {VETTUTOR_NODES.map((node, i) => (
                      <line key={i} x1="150" y1="150" x2={node.cx} y2={node.cy} stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4" />
                    ))}
                    <circle cx="150" cy="150" r="90" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 5" />
                    {VETTUTOR_NODES.map((node, i) => (
                      <g key={i}>
                        <circle cx={node.cx} cy={node.cy} r="14" fill="var(--muted)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.4" />
                        <text x={node.cx} y={node.cy + 4} textAnchor="middle" fontSize="11">
                          {(["🐕", "🐈", "🐕", "🐈", "🐇", "🐕"] as string[])[i]}
                        </text>
                      </g>
                    ))}
                    <circle cx="150" cy="150" r="32" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.5" />
                    <circle cx="150" cy="150" r="20" fill="var(--accent)" fillOpacity="0.15" />
                    <text x="150" y="157" textAnchor="middle" fontSize="20">🐾</text>
                    <circle cx="228" cy="72" r="10" fill="var(--muted)" stroke="var(--border)" strokeWidth="1" />
                    <text x="228" y="76" textAnchor="middle" fontSize="10">💬</text>
                    <circle cx="72" cy="228" r="10" fill="var(--muted)" stroke="var(--border)" strokeWidth="1" />
                    <text x="72" y="232" textAnchor="middle" fontSize="10">📅</text>
                    <text x="150" y="262" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" fillOpacity="0.5" fontFamily="Inter, sans-serif" letterSpacing="1">WHATSAPP • ERP • CRM</text>
                  </svg>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-3 p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">VetTutor</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Em produção • 2025</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl">
                    Plataforma{" "}
                    <strong className="font-medium text-[var(--foreground)]">SaaS multi-tenant para clínicas veterinárias</strong>{" "}
                    — automatiza lembretes preventivos via chatbot conversacional no WhatsApp, reduzindo em até 40% a taxa de no-show e recuperando faturamento adormecido com integração ao ERP Vertis.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {VETTUTOR_BADGES.map((badge) => (
                      <Badge key={badge} variant="muted">{badge}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: "Chatbot WhatsApp", desc: "Fluxo conversacional com máquina de estados" },
                      { label: "CRM Veterinário", desc: "Painel web com dashboard de ROI e métricas" },
                      { label: "Integração ERP", desc: "Importação de retornos do Vertis via CSV" },
                      { label: "Multi-Tenant SaaS", desc: "Isolamento total por clínica com planos" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-[var(--foreground)]">{item.label}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group/link" aria-label="Conversar sobre o projeto VetTutor">
                    Conversar sobre este projeto
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>
              </div>
            </article>
          </motion.div>

          {/* ─── Card 3: School Assist ─────────────────────────────────────── */}
          <motion.div variants={staggerItem}>
            <article
              className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg"
              aria-label="Case School Assist"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-indigo-400/50 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Conteúdo */}
                <div className="lg:col-span-3 p-10 lg:p-12">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">School Assist</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">Em produção • 2025</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl">
                    Assistente inteligente via WhatsApp para{" "}
                    <strong className="font-medium text-[var(--foreground)]">pais e responsáveis</strong>{" "}
                    — interpreta comunicados escolares em texto e PDF usando IA, extrai datas e prazos automaticamente e organiza eventos e lembretes estruturados, eliminando a perda de informações em grupos de WhatsApp.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {SCHOOLASSIST_BADGES.map((badge) => (
                      <Badge key={badge} variant="muted">{badge}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: "Ingestão via WhatsApp", desc: "Conector Baileys para mensagens e PDFs" },
                      { label: "IA & Extração de Texto", desc: "LLM classifica eventos, datas e prazos" },
                      { label: "Lembretes Automáticos", desc: "Eventos estruturados com alertas proativos" },
                      { label: "Clean Architecture", desc: "Hexagonal com adaptadores desacoplados" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-[var(--foreground)]">{item.label}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#contato" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group/link" aria-label="Conversar sobre o projeto School Assist">
                    Conversar sobre este projeto
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>

                {/* Visual — fluxo linear mensagem → IA → evento */}
                <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-0 bg-[var(--muted)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-indigo-500/6 blur-3xl" />
                  </div>
                  <svg viewBox="0 0 300 300" fill="none" className="w-60 h-60 relative z-10" aria-hidden="true">
                    {/* Linha de fluxo horizontal */}
                    <line x1="42" y1="150" x2="246" y2="150" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="5 4" />

                    {/* Conexões verticais do nó IA para satélites */}
                    <line x1="178" y1="150" x2="178" y2="102" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 4" />
                    <line x1="178" y1="150" x2="178" y2="198" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 4" />

                    {/* Nós principais do fluxo */}
                    {SA_FLOW_NODES.map((node, i) => (
                      <g key={i}>
                        <circle cx={node.cx} cy={node.cy} r="22" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
                        <text x={node.cx} y={node.cy + 5} textAnchor="middle" fontSize="16">{node.emoji}</text>
                        <text x={node.cx} y={node.cy + 36} textAnchor="middle" fontSize="7" fill="var(--muted-foreground)" fillOpacity="0.6" fontFamily="Inter, sans-serif" letterSpacing="0.5">{node.label}</text>
                        {/* Seta entre nós */}
                        {i < SA_FLOW_NODES.length - 1 && (
                          <text x={node.cx + 34} y={node.cy + 4} textAnchor="middle" fontSize="10" fill="var(--muted-foreground)" fillOpacity="0.4">›</text>
                        )}
                      </g>
                    ))}

                    {/* Nós satélite acima e abaixo do nó IA */}
                    {SA_SATELLITE_NODES.map((node, i) => (
                      <g key={i}>
                        <circle cx={node.cx} cy={node.cy} r="16" fill="var(--card)" stroke="var(--border)" strokeWidth="1" strokeOpacity="0.6" />
                        <text x={node.cx} y={node.cy + 5} textAnchor="middle" fontSize="12">{node.emoji}</text>
                        <text x={node.cx + 22} y={node.cy + 4} textAnchor="start" fontSize="7" fill="var(--muted-foreground)" fillOpacity="0.5" fontFamily="Inter, sans-serif">{node.label}</text>
                      </g>
                    ))}

                    {/* Label do nó IA em destaque */}
                    <circle cx="178" cy="150" r="22" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.5" />
                    <text x="178" y="155" textAnchor="middle" fontSize="16">🤖</text>

                    {/* Rodapé */}
                    <text x="150" y="274" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" fillOpacity="0.4" fontFamily="Inter, sans-serif" letterSpacing="1">WHATSAPP • IA • LGPD</text>
                  </svg>
                </div>
              </div>
            </article>
          </motion.div>

          {/* ─── Card 4: Infraestrutura & PostgreSQL Tuning ───────────────── */}
          <motion.div variants={staggerItem}>
            <article
              className="relative rounded-2xl border border-[var(--card-border)] bg-[var(--card)] overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg"
              aria-label="Case Infraestrutura e PostgreSQL"
            >
              <div className="h-[3px] w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-transparent" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Visual — Benchmarking de Restore (esquerda) */}
                <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-0 bg-[var(--muted)] flex items-center justify-center overflow-hidden order-2 lg:order-1">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-emerald-500/8 blur-3xl" />
                  </div>
                  <svg viewBox="0 0 300 300" fill="none" className="w-64 h-64 relative z-10" aria-hidden="true">
                    {/* Fundo do card interno */}
                    <rect x="25" y="40" width="250" height="220" rx="14" fill="var(--card)" stroke="var(--border)" strokeWidth="1.2" />

                    {/* Header do Card interno */}
                    <circle cx="50" cy="65" r="10" fill="var(--muted)" stroke="var(--border)" strokeWidth="1" />
                    <text x="50" y="69" textAnchor="middle" fontSize="11">🗄️</text>
                    <text x="68" y="66" fontSize="10" fontWeight="bold" fill="var(--foreground)" fontFamily="Inter, sans-serif">PostgreSQL Restore Benchmark</text>
                    <text x="68" y="77" fontSize="8" fill="var(--muted-foreground)" fontFamily="Inter, sans-serif">Base de dados de 4GB • Linux + Docker</text>

                    {/* Divisória */}
                    <line x1="38" y1="92" x2="262" y2="92" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Barra Antes */}
                    <text x="40" y="118" fontSize="9" fontWeight="600" fill="var(--muted-foreground)" fontFamily="Inter, sans-serif">Antes (Sem Tuning):</text>
                    <text x="260" y="118" textAnchor="end" fontSize="10" fontWeight="bold" fill="#ef4444" fontFamily="Inter, sans-serif">3h 00min</text>
                    <rect x="40" y="126" width="220" height="12" rx="4" fill="var(--muted)" />
                    <rect x="40" y="126" width="220" height="12" rx="4" fill="#f87171" fillOpacity="0.75" />

                    {/* Barra Depois */}
                    <text x="40" y="165" fontSize="9" fontWeight="600" fill="var(--foreground)" fontFamily="Inter, sans-serif">Depois (Docker + Tuning):</text>
                    <text x="260" y="165" textAnchor="end" fontSize="10" fontWeight="bold" fill="#10b981" fontFamily="Inter, sans-serif">12 min</text>
                    <rect x="40" y="173" width="220" height="12" rx="4" fill="var(--muted)" />
                    <rect x="40" y="173" width="28" height="12" rx="4" fill="#10b981" />

                    {/* Badge Destaque de Redução */}
                    <rect x="40" y="202" width="220" height="40" rx="8" fill="var(--muted)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
                    <text x="150" y="219" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#10b981" fontFamily="Inter, sans-serif">⚡ 93% Menos Tempo de Espera</text>
                    <text x="150" y="233" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" fontFamily="Inter, sans-serif">Velocidade ~15x superior com recursos otimizados</text>

                    {/* Rodapé SVG */}
                    <text x="150" y="280" textAnchor="middle" fontSize="8" fill="var(--muted-foreground)" fillOpacity="0.4" fontFamily="Inter, sans-serif" letterSpacing="1">UBUNTU • DEBIAN • DOCKER • POSTGRESQL</text>
                  </svg>
                </div>

                {/* Conteúdo (direita) */}
                <div className="lg:col-span-3 p-10 lg:p-12 order-1 lg:order-2">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Database className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--foreground)]">Otimização de Infraestrutura & PostgreSQL</h3>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">DevOps, Linux & Banco de Dados • 2024</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-xl">
                    Reestruturação e configuração de servidores Linux (<strong className="font-medium text-[var(--foreground)]">Ubuntu e Debian</strong>) para hospedar instâncias PostgreSQL conteinerizadas com <strong className="font-medium text-[var(--foreground)]">Docker</strong>. Ajuste fino de memória compartilhada, I/O e parâmetros de engine, reduzindo o restore de uma base de 4GB de <strong className="font-medium text-[var(--foreground)]">3 horas para apenas 12 minutos</strong>.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {INFRA_BADGES.map((badge) => (
                      <Badge key={badge} variant="muted">{badge}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { label: "Tempo de Restore", desc: "De 3 horas para 12 minutos (-93%)" },
                      { label: "Isolamento com Docker", desc: "Containers organizados e reprodutíveis" },
                      { label: "Tuning de PostgreSQL", desc: "Otimização de RAM, buffers e checkpoint" },
                      { label: "Ambiente Linux", desc: "Deploy e configuração em Ubuntu e Debian" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-[var(--foreground)]">{item.label}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">{item.desc}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group/link"
                    aria-label="Conversar sobre projetos de infraestrutura e banco de dados"
                  >
                    Conversar sobre este projeto
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" />
                  </a>
                </div>
              </div>
            </article>
          </motion.div>

        </StaggerContainer>
      </div>
    </section>
  );
}
