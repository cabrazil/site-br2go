import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

// Social icons (lucide-react doesn't include brand icons)
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--background)]"
      aria-label="Rodapé BR2GO"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="inline-flex items-center gap-1.5 mb-5 group" aria-label="BR2GO">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-md bg-[var(--accent)] opacity-90" />
                <div className="absolute inset-[2px] rounded-[3px] bg-[var(--accent-foreground)] opacity-20" />
                <div className="absolute bottom-[2px] right-[2px] w-2 h-2 rounded-sm bg-[var(--accent-foreground)] opacity-90" />
              </div>
              <span className="text-base font-bold tracking-tight text-[var(--foreground)]">
                BR<span className="text-[var(--accent)]">2</span>GO
              </span>
            </a>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Transformamos ideias em produtos digitais completos. Da estratégia ao lançamento — com engenharia, inteligência e rigor técnico.
            </p>
            <p className="mt-4 text-xs text-[var(--muted-foreground)] opacity-60">
              35 anos construindo tecnologia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--muted-foreground)] mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 inline-flex items-center gap-2 group"
                  aria-label="WhatsApp da BR2GO"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[var(--accent)]" />
                  {CONTACT_INFO.whatsappDisplay}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-150" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.emailLink}
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 inline-flex items-center gap-2 group"
                  aria-label="Email da BR2GO"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/br2go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 inline-flex items-center gap-2 group"
                  aria-label="LinkedIn da BR2GO"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-150" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/br2go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 inline-flex items-center gap-2 group"
                  aria-label="GitHub da BR2GO"
                >
                  <GithubIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform duration-150" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)] opacity-60">
            © {currentYear} BR2GO. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--muted-foreground)] opacity-40">
            Feito com engenharia e cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
