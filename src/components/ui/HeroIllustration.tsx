"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[460px] flex items-center justify-center">
      {/* Glow de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-[var(--accent)]/6 blur-3xl" />
      </div>

      <svg
        viewBox="0 0 480 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[520px] h-auto"
        aria-hidden="true"
        role="img"
      >
        {/* ─── Defs ─── */}
        <defs>
          <linearGradient id="nodeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" fill="var(--accent)" fillOpacity="0.5" />
          </marker>
        </defs>

        {/* ─── Grid de fundo ─── */}
        <g opacity="0.15">
          {[80, 160, 240, 320, 400].map((x) => (
            <line key={`vg-${x}`} x1={x} y1="20" x2={x} y2="420" stroke="var(--border)" strokeWidth="1" />
          ))}
          {[60, 140, 220, 300, 380].map((y) => (
            <line key={`hg-${y}`} x1="20" y1={y} x2="460" y2={y} stroke="var(--border)" strokeWidth="1" />
          ))}
        </g>

        {/* ─── Linhas de conexão ─── */}
        {/* Linha horizontal central */}
        <motion.line
          x1="80" y1="220" x2="400" y2="220"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
        />
        {/* Linha vertical esquerda */}
        <motion.line
          x1="160" y1="100" x2="160" y2="340"
          stroke="url(#lineGradV)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
        />
        {/* Linha vertical direita */}
        <motion.line
          x1="320" y1="100" x2="320" y2="340"
          stroke="url(#lineGradV)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.0, ease: "easeInOut" }}
        />
        {/* Linha diagonal */}
        <motion.line
          x1="160" y1="140" x2="320" y2="300"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, delay: 1.2, ease: "easeInOut" }}
        />
        <motion.line
          x1="320" y1="140" x2="160" y2="300"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.0, delay: 1.4, ease: "easeInOut" }}
        />

        {/* ─── Bloco central principal ─── */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <rect x="188" y="188" width="104" height="64" rx="10" fill="url(#nodeGrad1)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.6" />
          <rect x="188" y="188" width="104" height="8" rx="4" fill="var(--accent)" fillOpacity="0.3" />
          <rect x="200" y="208" width="48" height="4" rx="2" fill="var(--accent)" fillOpacity="0.5" />
          <rect x="200" y="218" width="32" height="4" rx="2" fill="var(--muted-foreground)" fillOpacity="0.3" />
          <rect x="200" y="228" width="40" height="4" rx="2" fill="var(--muted-foreground)" fillOpacity="0.2" />
          <circle cx="270" cy="245" r="3" fill="var(--accent)" fillOpacity="0.8" />
        </motion.g>

        {/* ─── Bloco superior esquerdo ─── */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <rect x="100" y="100" width="80" height="52" rx="8" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="100" y="100" width="80" height="6" rx="3" fill="var(--accent)" fillOpacity="0.4" />
          <rect x="112" y="118" width="36" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.4" />
          <rect x="112" y="126" width="24" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.25" />
          <circle cx="168" cy="126" r="8" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 165 126 L 168 123 L 171 126" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        </motion.g>

        {/* ─── Bloco superior direito ─── */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <rect x="300" y="100" width="80" height="52" rx="8" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="300" y="100" width="80" height="6" rx="3" fill="var(--accent)" fillOpacity="0.25" />
          <rect x="312" y="118" width="40" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.4" />
          <rect x="312" y="126" width="28" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.25" />
          <rect x="312" y="134" width="20" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.15" />
        </motion.g>

        {/* ─── Bloco inferior esquerdo ─── */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <rect x="100" y="300" width="80" height="52" rx="8" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="112" y="314" width="28" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.4" />
          <rect x="112" y="322" width="44" height="3" rx="1.5" fill="var(--accent)" fillOpacity="0.3" />
          <rect x="112" y="330" width="36" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.2" />
          <rect x="112" y="338" width="20" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.15" />
        </motion.g>

        {/* ─── Bloco inferior direito ─── */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <rect x="300" y="300" width="80" height="52" rx="8" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="312" y="314" width="32" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.4" />
          <rect x="312" y="322" width="24" height="3" rx="1.5" fill="var(--muted-foreground)" fillOpacity="0.25" />
          <rect x="312" y="330" width="40" height="3" rx="1.5" fill="var(--accent)" fillOpacity="0.3" />
          {/* Ping */}
          <motion.circle
            cx="368" cy="320" r="4"
            fill="var(--accent)"
            fillOpacity="0.9"
            animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.3, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.g>

        {/* ─── Nó flutuante esquerdo ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="56" cy="220" r="20" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
            <circle cx="56" cy="220" r="8" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="56" cy="220" r="3" fill="var(--accent)" fillOpacity="0.8" />
          </motion.g>
        </motion.g>

        {/* ─── Nó flutuante direito ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <motion.g
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <circle cx="424" cy="220" r="20" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
            <circle cx="424" cy="220" r="8" fill="var(--accent)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="424" cy="220" r="3" fill="var(--accent)" fillOpacity="0.8" />
          </motion.g>
        </motion.g>

        {/* ─── Nó flutuante topo ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.g
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="240" cy="44" r="16" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
            <path d="M 234 44 L 240 38 L 246 44 L 240 50 Z" fill="var(--accent)" fillOpacity="0.6" />
          </motion.g>
        </motion.g>

        {/* ─── Nó flutuante base ─── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <motion.g
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <circle cx="240" cy="396" r="16" fill="var(--muted)" stroke="var(--border)" strokeWidth="1.5" />
            <rect x="233" y="389" width="14" height="14" rx="3" fill="var(--accent)" fillOpacity="0.5" stroke="none" />
          </motion.g>
        </motion.g>

        {/* ─── Partículas pulsantes ─── */}
        {[
          { cx: 160, cy: 140, delay: 0 },
          { cx: 320, cy: 140, delay: 0.5 },
          { cx: 160, cy: 300, delay: 1.0 },
          { cx: 320, cy: 300, delay: 1.5 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="4"
            fill="var(--accent)"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: p.delay }}
          />
        ))}

        {/* ─── Linha de conexão animada (dados fluindo) ─── */}
        <motion.circle
          r="3"
          fill="var(--accent)"
          fillOpacity="0.8"
          animate={{
            cx: [56, 160, 240, 320, 424],
            cy: [220, 220, 220, 220, 220],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />

        {/* Labels discretos */}
        <motion.text
          x="140" y="96" textAnchor="middle"
          fontSize="9" fill="var(--muted-foreground)" fillOpacity="0.5"
          fontFamily="Inter, sans-serif" letterSpacing="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          API
        </motion.text>
        <motion.text
          x="340" y="96" textAnchor="middle"
          fontSize="9" fill="var(--muted-foreground)" fillOpacity="0.5"
          fontFamily="Inter, sans-serif" letterSpacing="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          UI
        </motion.text>
        <motion.text
          x="240" y="228" textAnchor="middle"
          fontSize="8" fill="var(--accent)" fillOpacity="0.7"
          fontFamily="Inter, sans-serif" letterSpacing="1" fontWeight="600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          CORE
        </motion.text>
        <motion.text
          x="140" y="368" textAnchor="middle"
          fontSize="9" fill="var(--muted-foreground)" fillOpacity="0.5"
          fontFamily="Inter, sans-serif" letterSpacing="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          DB
        </motion.text>
        <motion.text
          x="340" y="368" textAnchor="middle"
          fontSize="9" fill="var(--muted-foreground)" fillOpacity="0.5"
          fontFamily="Inter, sans-serif" letterSpacing="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          CLOUD
        </motion.text>
      </svg>
    </div>
  );
}
