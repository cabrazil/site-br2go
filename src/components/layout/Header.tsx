"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-lg"
              aria-label="BR2GO — Página inicial"
            >
              <div className="flex items-center gap-1.5">
                {/* Logo mark */}
                <div className="relative w-7 h-7">
                  <div className="absolute inset-0 rounded-md bg-[var(--accent)] opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-[3px] rounded-[4px] bg-[var(--accent-foreground)] opacity-20" />
                  <div className="absolute bottom-[3px] right-[3px] w-2.5 h-2.5 rounded-sm bg-[var(--accent-foreground)] opacity-90" />
                </div>
                <span className="text-[1.1rem] font-bold tracking-tight text-[var(--foreground)]">
                  BR<span className="text-[var(--accent)]">2</span>GO
                </span>
              </div>
            </a>

            {/* Nav Desktop */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navegação principal"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] rounded-md hover:bg-[var(--muted)] transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-all duration-150"
                  aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}
              <LinkButton href="#contato" variant="primary" size="md">
                Vamos conversar
              </LinkButton>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-all duration-150"
                  aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-all duration-150"
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-lg md:hidden"
          >
            <nav
              className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1"
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg transition-all duration-150"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2 pb-1">
                <LinkButton
                  href="#contato"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Vamos conversar
                </LinkButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
