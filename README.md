# BR2GO — Produtos Digitais Completos

<p align="center">
  <strong>Transformando ideias em produtos digitais completos. Da estratégia ao lançamento.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-ff0055?style=for-the-badge&logo=framer" alt="Framer Motion" />
</p>

---

## 🧭 Sobre a BR2GO

A **BR2GO** projeta, desenvolve e evolui aplicações web, mobile, automações inteligentes e infraestruturas digitais de ponta a ponta. 

Combinamos uma sólida base de engenharia de software com o **uso intensivo de Inteligência Artificial** para potencializar a produtividade, encurtar prazos e resolver desafios reais de negócio com alto rigor técnico.

---

## 💼 Cases em Produção

O site institucional apresenta projetos reais, em produção e em operação contínua:

### 1. 🎬 [Vibesfilm](#) — Recomendação Emocional com IA
* Plataforma completa de curadoria cinematográfica orientada a jornadas emocionais humanas.
* **Stack:** React, React Native, Fastify, PostgreSQL, Supabase, IA (Jev Engine + DeepSeek).
* **Destaque:** Ingestão multilíngue de catálogo, enriquecimento semântico de keywords e pipeline automatizado de scoring vetorial em 99 opções de jornadas afetivas.

### 2. 🐾 [VetTutor](#) — SaaS Multi-Tenant & WhatsApp CRM
* Solução para clínicas veterinárias que automatiza lembretes preventivos de saúde animal e reduz o absenteísmo (*no-show*) em até 40%.
* **Stack:** Node.js, Express, Next.js, React, PostgreSQL, Prisma, WhatsApp API.
* **Destaque:** Máquina de estados conversacional no WhatsApp integrada a importação de dados de ERPs veterinários (Vertis).

### 3. 🎒 [School Assist](#) — Assistente Inteligente Escolar via WhatsApp
* Agente inteligente que consome mensagens de grupos e documentos PDF escolares, extraindo datas e eventos para organizar a rotina de pais e responsáveis.
* **Stack:** Node.js, TypeScript, Fastify, Baileys, PostgreSQL, Prisma, IA / LLM, PDF Parser.
* **Destaque:** Clean Architecture / Arquitetura Hexagonal resiliente com adaptadores desacoplados e compliance com LGPD.

### 4. 🗄️ [Otimização de Infraestrutura & PostgreSQL](#) — DevOps & Tuning
* Reestruturação de ambiente em servidores Linux (**Ubuntu e Debian**) para conteinerização e alta eficiência em bancos PostgreSQL.
* **Stack:** Linux (Ubuntu/Debian), Docker, PostgreSQL, Performance Tuning, Shell Script.
* **Destaque:** Redução drástica no tempo de restauração de banco de dados de 4GB: **de 3 horas para 12 minutos** (economia de 93% no tempo de recuperação e impacto operacional).

---

## 🛠️ Stack Tecnológica do Site

* **Framework:** [Next.js](https://nextjs.org/) (App Router & Turbopack)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [TailwindCSS v4](https://tailwindcss.com/) com CSS Variables semânticas
* **Animações:** [Framer Motion](https://www.framer.com/motion/) para microinterações e transições fluidas
* **Ícones:** [Lucide React](https://lucide.dev/)
* **Tema:** Suporte nativo a Dark Mode e Light Mode via `next-themes` com alto contraste garantido
* **Deploy & CDN:** Vercel com geração 100% estática e otimizada

---

## 📂 Estrutura do Projeto

```bash
br2go/
├── public/                  # Favicons e assets estáticos
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, variáveis e TailwindCSS
│   │   ├── icon.svg         # Favicon dinâmico da BR2GO
│   │   ├── layout.tsx       # Root layout, metadados de SEO e tema
│   │   └── page.tsx         # Página inicial e orquestração de seções
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx   # Cabeçalho fixo com navegação por âncoras e tema
│   │   │   └── Footer.tsx   # Rodapé completo com contatos e navegação
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Apresentação de impacto e badges de experiência
│   │   │   ├── TrustBar.tsx      # Barra de fundamentos de engenharia
│   │   │   ├── Differentials.tsx # Os 8 pilares estratégicos da BR2GO
│   │   │   ├── Experience.tsx    # Bagagem de engenharia aumentada por IA
│   │   │   ├── CaseStudy.tsx     # 4 cases reais com gráficos e fluxos SVG
│   │   │   ├── Services.tsx      # Os 4 pilares de atuação
│   │   │   ├── Methodology.tsx   # Linha do tempo: da ideia à evolução
│   │   │   └── CTA.tsx           # Chamada final de alto contraste com WhatsApp direto
│   │   └── ui/              # Componentes atômicos reutilizáveis (botões, badges, animações)
│   └── lib/
│       ├── constants.ts     # Dados estruturados, casos, contatos e menus
│       └── utils.ts         # Utilitários de classes e styling
├── next.config.ts           # Configurações do Next.js
└── package.json             # Dependências e scripts
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js 18+ instalado
* Gerenciador de pacotes `npm`, `pnpm` ou `yarn`

### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/cabrazil/site-br2go.git
cd site-br2go
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

Para validar a integridade de tipos e gerar o bundle estático:
```bash
# Verificação de tipos
npx tsc --noEmit

# Build estático de produção
npm run build
```

---

## 📞 Contato & Redes

* **WhatsApp:** [+55 (11) 99500-3018](https://wa.me/5511995003018?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20BR2GO%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.)
* **E-mail:** [contato@br2go.com.br](mailto:contato@br2go.com.br)
* **Website:** [br2go.com.br](https://br2go.com.br)

---

<p align="center">
  © 2024 BR2GO. Todos os direitos reservados. Feito com engenharia, inteligência e rigor técnico.
</p>
