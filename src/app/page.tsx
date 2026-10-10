import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Differentials } from "@/components/sections/Differentials";
import { Experience } from "@/components/sections/Experience";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Services } from "@/components/sections/Services";
import { Methodology } from "@/components/sections/Methodology";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Pular para o conteúdo
        </a>

        <Hero />
        <TrustBar />
        <Differentials />
        <Experience />
        <CaseStudy />
        <Services />
        <Methodology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
