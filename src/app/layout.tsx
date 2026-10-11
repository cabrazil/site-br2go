import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BR2GO — Transformando ideias em produtos digitais completos",
  description:
    "Da estratégia ao lançamento. Projetamos, desenvolvemos e evoluímos aplicações web, mobile, automações e plataformas digitais.",
  keywords: [
    "desenvolvimento de software",
    "produtos digitais",
    "aplicações web",
    "mobile",
    "automações",
    "IA",
    "arquitetura de software",
    "BR2GO",
  ],
  authors: [{ name: "BR2GO" }],
  creator: "BR2GO",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://br2go.com.br",
    siteName: "BR2GO",
    title: "BR2GO — Transformando ideias em produtos digitais completos",
    description:
      "Da estratégia ao lançamento. Projetamos, desenvolvemos e evoluímos aplicações web, mobile, automações e plataformas digitais.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BR2GO — Produtos Digitais Completos",
    description:
      "Da estratégia ao lançamento. Projetamos, desenvolvemos e evoluímos aplicações web, mobile, automações e plataformas digitais.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
