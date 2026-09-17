import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { PublicLayoutWrapper } from "@/components/layout/PublicLayoutWrapper";
import { getTema } from "@/lib/tema";

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

export async function generateViewport(): Promise<Viewport> {
  const tema = await getTema();

  return {
    themeColor: tema === "light" ? "#FFFFFF" : "#0A0A0A",
    width: "device-width",
    initialScale: 1,
  };
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const ogDescription =
  "Portfólio exclusivo de imóveis de alto padrão e atendimento personalizado.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    description: ogDescription,
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "RA Imóveis",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RA Imóveis - Imóveis de Alto Padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RA Imóveis | Imóveis de Alto Padrão",
    description: ogDescription,
    images: ["/images/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();
  const tema = await getTema();

  return (
    <html
      lang="pt-BR"
      data-theme={tema}
      className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
        <noscript>
          {/* Sem JavaScript: exibe tudo, desativando as animações de scroll */}
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
