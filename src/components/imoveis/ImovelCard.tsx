import NextImage from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Maximize2, MapPin, Sparkles, ArrowRight } from "lucide-react";
import type { Imovel } from "@/lib/supabase/types";

interface ImovelCardProps {
  imovel: Imovel;
}

export function ImovelCard({ imovel }: ImovelCardProps) {
  // Obter imagem de capa principal
  const capaUrl =
    imovel.imoveis_imagens?.find((img) => img.capa)?.url ||
    imovel.imoveis_imagens?.[0]?.url ||
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80";

  // Formatação de moeda BRL
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(Number(imovel.preco));

  // Código sempre limpo sem prefixo [DEMO] conforme CORREÇÃO 1
  const codigoLimpo = imovel.codigo.replace(/^\[DEMO\]\s*/i, "");
  const urlDetalhes = `/imoveis/${encodeURIComponent(codigoLimpo)}`;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-[#D4AF37]/10">
      {/* Imagem de Capa com Link */}
      <Link href={urlDetalhes} className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414] block">
        <NextImage
          src={capaUrl}
          alt={imovel.titulo}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradiente sutil para legibilidade dos badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/40 opacity-80" />

        {/* Badges no topo da imagem */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-md bg-[#0A0A0A]/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] backdrop-blur-md border border-[#D4AF37]/30 shadow-md">
            {imovel.finalidade === "venda" ? "Venda" : imovel.finalidade === "aluguel" ? "Aluguel" : "Temporada"}
          </span>

          <div className="flex items-center gap-1.5">
            {imovel.destaque && (
              <span className="flex items-center gap-1 rounded-md bg-[#D4AF37] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-md">
                <Sparkles className="h-3 w-3 fill-current" />
                Destaque
              </span>
            )}
            <span className="flex items-center gap-1 rounded-md bg-[#10B981]/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Disponível
            </span>
          </div>
        </div>

        {/* Código limpo do Imóvel no canto inferior */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded bg-black/70 px-2.5 py-1 text-[11px] font-mono font-medium text-[#D4AF37] backdrop-blur-sm border border-[#2A2A2A]">
            {codigoLimpo}
          </span>
        </div>
      </Link>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          {/* Localização */}
          <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3]">
            <MapPin className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
            <span className="truncate font-medium">
              {imovel.bairro}, {imovel.cidade} - {imovel.uf}
            </span>
          </div>

          {/* Título do Imóvel com Link */}
          <Link href={urlDetalhes} className="block">
            <h3 className="line-clamp-2 text-lg sm:text-xl font-semibold tracking-tight text-[#F5F5F0] group-hover:text-[#F4C430] transition-colors">
              {imovel.titulo}
            </h3>
          </Link>

          {/* Preço de Aquisição / Aluguel */}
          <div className="pt-1">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#D4AF37]">
              {precoFormatado}
              {imovel.finalidade === "aluguel" && (
                <span className="text-xs font-normal text-[#A3A3A3] ml-1">/mês</span>
              )}
            </div>
            {Number(imovel.preco_condominio) > 0 && (
              <p className="text-[11px] text-[#737373] mt-0.5">
                Condomínio: {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(imovel.preco_condominio))}
              </p>
            )}
          </div>
        </div>

        {/* Ficha Técnica: Ícones com especificações arquitetônicas */}
        <div className="mt-5 border-t border-[#2A2A2A] pt-4">
          <div className="grid grid-cols-4 gap-2 text-center text-xs text-[#A3A3A3]">
            {/* Quartos / Suítes */}
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-semibold text-[#F5F5F0]">
                {imovel.quartos}
              </span>
              <span className="text-[10px] text-[#737373]">
                {imovel.suites > 0 ? `${imovel.suites} suíte(s)` : "quartos"}
              </span>
            </div>

            {/* Banheiros */}
            <div className="flex flex-col items-center gap-1">
              <Bath className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-semibold text-[#F5F5F0]">
                {imovel.banheiros}
              </span>
              <span className="text-[10px] text-[#737373]">banheiros</span>
            </div>

            {/* Vagas */}
            <div className="flex flex-col items-center gap-1">
              <Car className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-semibold text-[#F5F5F0]">
                {imovel.vagas}
              </span>
              <span className="text-[10px] text-[#737373]">vagas</span>
            </div>

            {/* Área Útil */}
            <div className="flex flex-col items-center gap-1">
              <Maximize2 className="h-4 w-4 text-[#D4AF37]" />
              <span className="font-semibold text-[#F5F5F0]">
                {imovel.area_util}
              </span>
              <span className="text-[10px] text-[#737373]">m² úteis</span>
            </div>
          </div>
        </div>

        {/* Botão de Navegação para a Página do Imóvel */}
        <div className="mt-5 pt-2">
          <Link
            href={urlDetalhes}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#222222] border border-[#333333] py-2.5 text-xs font-semibold text-[#F5F5F0] transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#F4C430] active:scale-[0.98]"
          >
            <span>Ver Detalhes do Imóvel</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
