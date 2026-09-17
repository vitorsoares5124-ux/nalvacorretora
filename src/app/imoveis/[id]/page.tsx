import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Bath,
  Car,
  Maximize2,
  MapPin,
  Sparkles,
  ShieldCheck,
  Check,
  ChevronRight,
  Home,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { GaleriaImovel } from "@/components/imoveis/GaleriaImovel";
import { WhatsAppLeadButton } from "@/components/imoveis/WhatsAppLeadButton";
import { Reveal } from "@/components/animations/Reveal";
import type { Imovel } from "@/lib/supabase/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Revalidação a cada 60s (ISR)
export const revalidate = 60;

function truncarTexto(texto: string, max = 155): string {
  const limpo = texto.trim().replace(/\s+/g, " ");
  if (limpo.length <= max) return limpo;
  const cortado = limpo.slice(0, max);
  const ultimoEspaco = cortado.lastIndexOf(" ");
  return `${(ultimoEspaco > 0 ? cortado.slice(0, ultimoEspaco) : cortado).trim()}...`;
}

function capaDoImovel(imovel: Imovel): string | undefined {
  return (
    imovel.imoveis_imagens?.find((img) => img.capa)?.url ||
    imovel.imoveis_imagens?.[0]?.url
  );
}

async function getImovelPorId(idParam: string): Promise<Imovel | null> {
  const idLimpo = decodeURIComponent(idParam).trim();

  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (hasSupabaseConfig) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("imoveis")
        .select(`
          *,
          imoveis_imagens (*)
        `)
        .eq("id", idLimpo)
        .eq("status", "disponivel")
        .maybeSingle();

      if (data && !error) {
        return data as Imovel;
      }
    } catch (err) {
      console.warn("Erro ao buscar imóvel individual no Supabase:", err);
    }
  }

  // Fallback nos dados DEMO para testes locais
  const demoItem = DEMO_IMOVEIS.find(
    (i) => i.id === idLimpo && i.status === "disponivel"
  );

  if (demoItem) {
    return demoItem;
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const imovel = await getImovelPorId(id);

  if (!imovel) {
    return {
      title: "Imóvel Não Encontrado | RA Imóveis",
    };
  }

  const capaUrl = capaDoImovel(imovel);
  const urlImovel = `${siteUrl}/imoveis/${encodeURIComponent(imovel.id)}`;
  const descricao =
    imovel.descricao?.trim() ||
    `${imovel.tipo} em ${imovel.cidade}, ${imovel.uf} disponível na RA Imóveis.`;
  const finalidade = imovel.finalidade === "venda" ? "venda" : imovel.finalidade === "aluguel" ? "aluguel" : "temporada";
  const precoTexto = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number(imovel.preco));

  return {
    title: `${imovel.titulo} em ${imovel.cidade}, ${imovel.uf} | RA Imóveis`,
    description: truncarTexto(`${imovel.titulo}. ${finalidade} por ${precoTexto} em ${imovel.cidade}, ${imovel.uf}. ${descricao}`),
    alternates: {
      canonical: urlImovel,
    },
    openGraph: {
      title: `${imovel.titulo} em ${imovel.cidade}, ${imovel.uf} | RA Imóveis`,
      description: truncarTexto(`${finalidade} por ${precoTexto} em ${imovel.cidade}, ${imovel.uf}. ${descricao}`),
      type: "website",
      url: urlImovel,
      siteName: "RA Imóveis",
      images: capaUrl
        ? [
            {
              url: capaUrl,
              width: 1600,
              height: 1000,
              alt: `${imovel.titulo} em ${imovel.cidade}, ${imovel.uf}`,
            },
          ]
        : undefined,
      locale: "pt_BR",
    },
    twitter: {
      card: "summary_large_image",
      title: `${imovel.titulo} em ${imovel.cidade}, ${imovel.uf} | RA Imóveis`,
      description: truncarTexto(`${finalidade} por ${precoTexto} em ${imovel.cidade}, ${imovel.uf}.`),
      images: capaUrl ? [capaUrl] : undefined,
    },
  };
}

export default async function ImovelDetalhePage({ params }: PageProps) {
  const { id } = await params;
  const imovel = await getImovelPorId(id);

  // Se não existir ou não estiver disponível, 404
  if (!imovel) {
    notFound();
  }

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number(imovel.preco));

  const formatarMoeda = (val: number | null) =>
    val
      ? new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(val)
      : null;

  const capaJson = capaDoImovel(imovel);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: imovel.titulo,
    description: truncarTexto(imovel.descricao || ""),
    url: `${siteUrl}/imoveis/${encodeURIComponent(imovel.id)}`,
    image: capaJson,
    availabilityStarts: new Date().toISOString().split("T")[0],
    offers: {
      "@type": "Offer",
      price: Number(imovel.preco),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: imovel.bairro || imovel.cidade,
      addressRegion: imovel.uf,
    },
  };

  return (
    <div className="min-h-screen bg-canvas pb-24 lg:pb-16 text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb de Navegação */}
      <div className="border-b border-line bg-canvas-alt/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8 text-xs text-ink-soft">
          <Link href="/" className="hover:text-gold-primary flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>Início</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-ink-muted" />
          <Link href="/imoveis" className="hover:text-gold-primary">
            Imóveis
          </Link>
          <ChevronRight className="h-3 w-3 text-ink-muted" />
          <span className="text-gold-primary truncate">{imovel.titulo}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Cabeçalho do Imóvel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-line">
          <Reveal variant="up" className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-gold-primary/15 border border-gold-primary/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-primary">
                {imovel.finalidade === "venda"
                  ? "Venda"
                  : imovel.finalidade === "aluguel"
                  ? "Aluguel"
                  : "Temporada"}
              </span>
              <span className="rounded-md bg-card border border-line px-2.5 py-1 text-xs text-ink-soft">
                {imovel.tipo}
              </span>
              {imovel.destaque && (
                <span className="flex items-center gap-1 rounded-md bg-gold-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-on-gold">
                  <Sparkles className="h-3 w-3 fill-current" />
                  Destaque
                </span>
              )}
              <span className="flex items-center gap-1 rounded-md bg-emerald/90 px-2.5 py-1 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Disponível
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
              {imovel.titulo}
            </h1>

            <div className="flex items-center gap-2 text-sm text-ink-soft">
              <MapPin className="h-4 w-4 text-gold-primary shrink-0" />
              <span>
                {imovel.cidade}, {imovel.uf}
              </span>
            </div>
          </Reveal>

          {/* Preço de Aquisição */}
          <Reveal variant="up" delay={120} className="flex flex-col lg:items-end">
            <span className="text-xs uppercase tracking-wider text-ink-soft">
              Valor de {imovel.finalidade === "venda" ? "Venda" : "Locação"}
            </span>
            <div className="text-3xl sm:text-4xl font-bold gold-gradient-text">
              {precoFormatado}
              {imovel.finalidade === "aluguel" && (
                <span className="text-sm font-normal text-ink-soft ml-1">/mês</span>
              )}
            </div>
            {(Number(imovel.preco_condominio) > 0 || Number(imovel.preco_iptu) > 0) && (
              <div className="flex flex-wrap gap-3 text-xs text-ink-muted mt-1">
                {Number(imovel.preco_condominio) > 0 && (
                  <span>Condomínio: {formatarMoeda(imovel.preco_condominio)}</span>
                )}
                {Number(imovel.preco_iptu) > 0 && (
                  <span>IPTU: {formatarMoeda(imovel.preco_iptu)}/mês</span>
                )}
              </div>
            )}
          </Reveal>
        </div>

        {/* Layout Principal: Galeria + Ficha Técnica */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Coluna Esquerda (8 cols): Galeria, Descrição e Características */}
          <div className="lg:col-span-8 space-y-10">
            {/* Galeria de Fotos com Lightbox */}
            <Reveal variant="up">
              <GaleriaImovel
                imagens={imovel.imoveis_imagens || []}
                titulo={imovel.titulo}
              />
            </Reveal>

            {/* Ficha Técnica Rápida (Grid de Especificações) */}
            <Reveal
              variant="up"
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary mb-5">
                Especificações Principais
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-elevated p-3 text-gold-primary border border-line">
                    <BedDouble className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-ink">
                      {imovel.quartos}
                    </span>
                    <span className="text-xs text-ink-soft">
                      {imovel.suites > 0 ? `${imovel.suites} suíte(s)` : "Quartos"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-elevated p-3 text-gold-primary border border-line">
                    <Bath className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-ink">
                      {imovel.banheiros}
                    </span>
                    <span className="text-xs text-ink-soft">Banheiros</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-elevated p-3 text-gold-primary border border-line">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-ink">
                      {imovel.vagas}
                    </span>
                    <span className="text-xs text-ink-soft">Vagas de Garagem</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-elevated p-3 text-gold-primary border border-line">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-ink">
                      {imovel.area_util} m²
                    </span>
                    <span className="text-xs text-ink-soft">
                      {imovel.area_total > 0 ? `${imovel.area_total} m² total` : "Área Útil"}
                    </span>
                  </div>
                </div>
              </div>

              {imovel.aceita_financiamento && (
                <div className="mt-6 pt-5 border-t border-line-faint flex items-center gap-2 text-xs text-emerald">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-ink">
                    Aceita financiamento bancário e utilização de recursos
                  </span>
                </div>
              )}
            </Reveal>

            {/* Descrição Completa */}
            <Reveal
              variant="up"
              className="rounded-2xl border border-line bg-surface p-6 sm:p-8 space-y-4"
            >
              <h2 className="text-lg font-semibold text-ink">
                Sobre o Imóvel
              </h2>
              <div className="prose prose-invert max-w-none text-sm leading-relaxed text-ink-soft whitespace-pre-line">
                {imovel.descricao || "Sem descrição disponível para este imóvel."}
              </div>
            </Reveal>

            {/* Características e Comodidades */}
            {imovel.caracteristicas && imovel.caracteristicas.length > 0 && (
              <Reveal
                variant="up"
                className="rounded-2xl border border-line bg-surface p-6 sm:p-8 space-y-4"
              >
                <h2 className="text-lg font-semibold text-ink">
                  Características & Diferenciais
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {imovel.caracteristicas.map((item, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 rounded-xl border border-line bg-card px-3.5 py-2 text-xs font-medium text-ink"
                    >
                      <Check className="h-3.5 w-3.5 text-gold-primary" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Coluna Direita (4 cols): Card de Atendimento e CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 rounded-2xl border border-line bg-card p-6 space-y-6 shadow-xl">
              <Reveal variant="up" className="border-b border-line pb-5">
                <span className="text-xs uppercase tracking-wider text-ink-soft">
                  Consultor Imobiliário
                </span>
                <h3 className="text-xl font-bold text-ink mt-1">
                  Roberto Andrade
                </h3>
                <p className="text-xs text-gold-primary mt-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Consultor Imobiliário • CRECI 322479</span>
                </p>
              </Reveal>

              <Reveal
                variant="up"
                delay={120}
                className="space-y-3 text-xs text-ink-soft"
              >
                <p>
                  Atendimento direto e sem intermediários. Agende uma visita privativa ao imóvel ou solicite a documentação completa.
                </p>
                <div className="rounded-xl bg-surface p-3 border border-line-faint space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-ink-muted">Cidade:</span>
                    <span className="text-ink">{imovel.cidade}, {imovel.uf}</span>
                  </div>
                </div>
              </Reveal>

              {/* Botão de WhatsApp Desktop com Fire-and-forget Lead Logging */}
              <Reveal variant="up" delay={200}>
                <WhatsAppLeadButton
                  imovelId={imovel.id}
                  titulo={imovel.titulo}
                  preco={Number(imovel.preco)}
                  className="w-full"
                />
              </Reveal>

              <Reveal
                variant="fade"
                delay={260}
                className="pt-2 text-center text-[11px] text-ink-muted"
              >
                <span>Resposta ágil em horário comercial • Atendimento confidencial</span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* CTA de WhatsApp Fixo / Sticky no Mobile (Correction 2) */}
      <WhatsAppLeadButton
        imovelId={imovel.id}
        titulo={imovel.titulo}
        preco={Number(imovel.preco)}
        isStickyMobile
      />
    </div>
  );
}
