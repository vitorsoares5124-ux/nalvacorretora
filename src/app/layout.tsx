import type { Metadata, Viewport } from "next";
import { connection } from "next/server";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { PublicLayoutWrapper } from "@/components/layout/PublicLayoutWrapper";
import { createClient } from "@/lib/supabase/server";
import type { TemaSite } from "@/lib/supabase/types";

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

// Busca o tema global definido pela corretora no painel admin.
// É lido a cada request: todo visitante vê o mesmo tema, forçado pelo servidor.
async function getTemaPadrao(): Promise<TemaSite> {
  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (!hasSupabaseConfig) return "dark";

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("tema_padrao")
      .eq("id", 1)
      .single();

    return data?.tema_padrao === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();
  const tema = await getTemaPadrao();

  return (
    <html
      lang="pt-BR"
      data-theme={tema}
      className={`${playfair.variable} ${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-canvas text-ink flex flex-col font-sans">
        <PublicLayoutWrapper>{children}</PublicLayoutWrapper>
      </body>
    </html>
  );
}
