import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { PublicLayoutWrapper } from "@/components/layout/PublicLayoutWrapper";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "RA Imóveis | Imóveis de Alto Padrão e Consultoria Exclusiva",
  description:
    "Portfólio selecionado de imóveis de alto padrão, coberturas, casas em condomínio e investimentos imobiliários com assessoria consultiva personalizada.",
  keywords: [
    "RA Imóveis",
    "Roberto Andrade",
    "Imóveis de Alto Padrão",
    "Coberturas",
    "Casas em Condomínio",
    "Consultoria Imobiliária",
  ],
  authors: [{ name: "Roberto Andrade" }],
  openGraph: {
    title: "RA Imóveis | Imóveis de Alto Padrão",
    description: "Portfólio exclusivo de imóveis de alto padrão e atendimento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] flex flex-col font-sans">
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
