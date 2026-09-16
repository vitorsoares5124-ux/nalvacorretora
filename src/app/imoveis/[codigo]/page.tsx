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
import { MapaImovel } from "@/components/imoveis/MapaImovel";
import { WhatsAppLeadButton } from "@/components/imoveis/WhatsAppLeadButton";
import type { Imovel } from "@/lib/supabase/types";

interface PageProps {
  params: Promise<{
    codigo: string;
  }>;
}

// Revalidação a cada 60s (ISR)
export const revalidate = 60;

async function getImovelPorCodigo(codigoParam: string): Promise<Imovel | null> {
  const codigoLimpo = decodeURIComponent(codigoParam).trim();

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
        .or(`codigo.eq.${codigoLimpo},codigo.eq.[DEMO] ${codigoLimpo}`)
        .eq("status", "disponivel")
        .maybeSingle();

      if (data && !error) {
        const item = data as Imovel;
        item.codigo = item.codigo.replace(/^\[DEMO\]\s*/i, "");
        return item;
      }
    } catch (err) {
      console.warn("Erro ao buscar imóvel individual no Supabase:", err);
    }
  }

  // Fallback nos dados DEMO para testes locais
  const demoItem = DEMO_IMOVEIS.find(
    (i) =>
      i.codigo.replace(/^\[DEMO\]\s*/i, "").toUpperCase() ===
        codigoLimpo.replace(/^\[DEMO\]\s*/i, "").toUpperCase() &&
      i.status === "disponivel"
  );

  if (demoItem) {
    return {
      ...demoItem,
      codigo: demoItem.codigo.replace(/^\[DEMO\]\s*/i, ""),
    };
  }

  return null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { codigo } = await params;
  const imovel = await getImovelPorCodigo(codigo);

  if (!imovel) {
    return {
      title: "Imóvel Não Encontrado | RA Imóveis",
    };
  }

  const capaUrl =
    imovel.imoveis_imagens?.find((img) => img.capa)?.url ||
    imovel.imoveis_imagens?.[0]?.url;

  return {
    title: `${imovel.titulo} (Cód: ${imovel.codigo}) | RA Imóveis`,
    description: imovel.descricao || `Imóvel exclusivo em ${imovel.bairro}, ${imovel.cidade}.`,
    openGraph: {
      title: `${imovel.titulo} | RA Imóveis`,
      description: imovel.descricao || undefined,
      images: capaUrl ? [{ url: capaUrl }] : undefined,
    },
  };
}

export default async function ImovelDetalhePage({ params }: PageProps) {
  const { codigo } = await params;
  const imovel = await getImovelPorCodigo(codigo);

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

  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24 lg:pb-16 text-[#F5F5F0]">
      {/* Breadcrumb de Navegação */}
      <div className="border-b border-[#2A2A2A] bg-[#0D0D0D]/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8 text-xs text-[#A3A3A3]">
          <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>Início</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-[#555]" />
          <Link href="/imoveis" className="hover:text-[#D4AF37]">
            Imóveis
          </Link>
          <ChevronRight className="h-3 w-3 text-[#555]" />
          <span className="text-[#D4AF37] font-mono">{imovel.codigo}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        {/* Cabeçalho do Imóvel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#2A2A2A]">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                {imovel.finalidade === "venda"
                  ? "Venda"
                  : imovel.finalidade === "aluguel"
                  ? "Aluguel"
                  : "Temporada"}
              </span>
              <span className="rounded-md bg-[#1A1A1A] border border-[#2A2A2A] px-2.5 py-1 text-xs text-[#A3A3A3]">
                {imovel.tipo}
              </span>
              {imovel.destaque && (
                <span className="flex items-center gap-1 rounded-md bg-[#D4AF37] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                  <Sparkles className="h-3 w-3 fill-current" />
                  Destaque
                </span>
              )}
              <span className="flex items-center gap-1 rounded-md bg-[#10B981]/90 px-2.5 py-1 text-xs font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Disponível
              </span>
              <span className="rounded-md bg-[#141414] border border-[#2A2A2A] px-2.5 py-1 text-xs font-mono text-[#D4AF37]">
                Cód: {imovel.codigo}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F0]">
              {imovel.titulo}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#A3A3A3]">
              <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0" />
              <span>
                {imovel.bairro}, {imovel.cidade} - {imovel.uf}
              </span>
            </div>
          </div>

          {/* Preço de Aquisição */}
          <div className="flex flex-col lg:items-end">
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3]">
              Valor de {imovel.finalidade === "venda" ? "Venda" : "Locação"}
            </span>
            <div className="text-3xl sm:text-4xl font-bold gold-gradient-text">
              {precoFormatado}
              {imovel.finalidade === "aluguel" && (
                <span className="text-sm font-normal text-[#A3A3A3] ml-1">/mês</span>
              )}
            </div>
            {(Number(imovel.preco_condominio) > 0 || Number(imovel.preco_iptu) > 0) && (
              <div className="flex flex-wrap gap-3 text-xs text-[#737373] mt-1">
                {Number(imovel.preco_condominio) > 0 && (
                  <span>Condomínio: {formatarMoeda(imovel.preco_condominio)}</span>
                )}
                {Number(imovel.preco_iptu) > 0 && (
                  <span>IPTU: {formatarMoeda(imovel.preco_iptu)}/mês</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Layout Principal: Galeria + Ficha Técnica */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Coluna Esquerda (8 cols): Galeria, Descrição, Características e Mapa */}
          <div className="lg:col-span-8 space-y-10">
            {/* Galeria de Fotos com Lightbox */}
            <GaleriaImovel
              imagens={imovel.imoveis_imagens || []}
              titulo={imovel.titulo}
            />

            {/* Ficha Técnica Rápida (Grid de Especificações) */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37] mb-5">
                Especificações Principais
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#1F1F1F] p-3 text-[#D4AF37] border border-[#2A2A2A]">
                    <BedDouble className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#F5F5F0]">
                      {imovel.quartos}
                    </span>
                    <span className="text-xs text-[#A3A3A3]">
                      {imovel.suites > 0 ? `${imovel.suites} suíte(s)` : "Quartos"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#1F1F1F] p-3 text-[#D4AF37] border border-[#2A2A2A]">
                    <Bath className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#F5F5F0]">
                      {imovel.banheiros}
                    </span>
                    <span className="text-xs text-[#A3A3A3]">Banheiros</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#1F1F1F] p-3 text-[#D4AF37] border border-[#2A2A2A]">
                    <Car className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#F5F5F0]">
                      {imovel.vagas}
                    </span>
                    <span className="text-xs text-[#A3A3A3]">Vagas de Garagem</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#1F1F1F] p-3 text-[#D4AF37] border border-[#2A2A2A]">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-[#F5F5F0]">
                      {imovel.area_util} m²
                    </span>
                    <span className="text-xs text-[#A3A3A3]">
                      {imovel.area_total > 0 ? `${imovel.area_total} m² total` : "Área Útil"}
                    </span>
                  </div>
                </div>
              </div>

              {imovel.aceita_financiamento && (
                <div className="mt-6 pt-5 border-t border-[#222222] flex items-center gap-2 text-xs text-[#10B981]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-[#F5F5F0]">
                    Aceita financiamento bancário e utilização de recursos
                  </span>
                </div>
              )}
            </div>

            {/* Descrição Completa */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-semibold text-[#F5F5F0]">
                Sobre o Imóvel
              </h2>
              <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#A3A3A3] whitespace-pre-line">
                {imovel.descricao || "Sem descrição disponível para este imóvel."}
              </div>
            </div>

            {/* Características e Comodidades */}
            {imovel.caracteristicas && imovel.caracteristicas.length > 0 && (
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 sm:p-8 space-y-4">
                <h2 className="text-lg font-semibold text-[#F5F5F0]">
                  Características & Diferenciais
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {imovel.caracteristicas.map((item, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2 text-xs font-medium text-[#F5F5F0]"
                    >
                      <Check className="h-3.5 w-3.5 text-[#D4AF37]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mapa de Localização (OpenStreetMap Iframe Leve) */}
            <MapaImovel
              latitude={imovel.latitude}
              longitude={imovel.longitude}
              bairro={imovel.bairro}
              cidade={imovel.cidade}
              uf={imovel.uf}
            />
          </div>

          {/* Coluna Direita (4 cols): Card de Atendimento e CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-6 space-y-6 shadow-xl">
              <div className="border-b border-[#2A2A2A] pb-5">
                <span className="text-xs uppercase tracking-wider text-[#A3A3A3]">
                  Consultoria Exclusiva
                </span>
                <h3 className="text-xl font-bold text-[#F5F5F0] mt-1">
                  Roberto Andrade
                </h3>
                <p className="text-xs text-[#D4AF37] mt-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>CRECI 00000-J • RA Imóveis</span>
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#A3A3A3]">
                <p>
                  Atendimento direto e sem intermediários. Agende uma visita privativa ao imóvel ou solicite a documentação completa.
                </p>
                <div className="rounded-xl bg-[#141414] p-3 border border-[#222222] space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Referência:</span>
                    <span className="text-[#D4AF37] font-bold">{imovel.codigo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#737373]">Cidade:</span>
                    <span className="text-[#F5F5F0]">{imovel.cidade} / {imovel.uf}</span>
                  </div>
                </div>
              </div>

              {/* Botão de WhatsApp Desktop com Fire-and-forget Lead Logging */}
              <WhatsAppLeadButton
                imovelId={imovel.id}
                codigo={imovel.codigo}
                titulo={imovel.titulo}
                preco={Number(imovel.preco)}
                className="w-full"
              />

              <div className="pt-2 text-center text-[11px] text-[#737373]">
                <span>Resposta ágil em horário comercial • Atendimento confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA de WhatsApp Fixo / Sticky no Mobile (Correction 2) */}
      <WhatsAppLeadButton
        imovelId={imovel.id}
        codigo={imovel.codigo}
        titulo={imovel.titulo}
        preco={Number(imovel.preco)}
        isStickyMobile
      />
    </div>
  );
}
