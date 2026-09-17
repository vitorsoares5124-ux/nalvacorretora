import NextImage from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Car, Maximize2, MapPin, ArrowRight } from "lucide-react";
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

  const urlDetalhes = `/imoveis/${imovel.id}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:border-gold-primary/60 hover:shadow-xl hover:shadow-gold-primary/10">
      {/* Imagem de Capa com Link */}
      <Link href={urlDetalhes} className="relative aspect-[16/10] w-full overflow-hidden bg-surface block">
        <NextImage
          src={capaUrl}
          alt={`${imovel.titulo} em ${imovel.cidade}, ${imovel.uf}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradiente sutil para legibilidade dos badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-black/40 opacity-80" />

        {/* Badges no topo da imagem */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-md bg-canvas/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-primary backdrop-blur-md border border-gold-primary/30 shadow-md">
            {imovel.finalidade === "venda" ? "Venda" : imovel.finalidade === "aluguel" ? "Aluguel" : "Temporada"}
          </span>

          <div className="flex items-center gap-1.5">
            {imovel.destaque && (
              <span className="rounded-md bg-gold-primary px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-on-gold shadow-md">
                Destaque
              </span>
            )}
            <span className="flex items-center gap-1 rounded-md bg-emerald/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Disponível
            </span>
          </div>
        </div>
      </Link>

      {/* Conteúdo do Card */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          {/* Localização */}
          <div className="flex items-center gap-1.5 text-xs text-ink-soft">
            <MapPin className="h-3.5 w-3.5 text-gold-primary shrink-0" />
            <span className="truncate font-medium">
              {imovel.cidade}, {imovel.uf}
            </span>
          </div>

          {/* Título do Imóvel com Link */}
          <Link href={urlDetalhes} className="block">
            <h3 className="line-clamp-2 text-lg sm:text-xl font-semibold tracking-tight text-ink group-hover:text-gold-light transition-colors">
              {imovel.titulo}
            </h3>
          </Link>

          {/* Preço de Aquisição / Aluguel */}
          <div className="pt-1">
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-gold-primary">
              {precoFormatado}
              {imovel.finalidade === "aluguel" && (
                <span className="text-xs font-normal text-ink-soft ml-1">/mês</span>
              )}
            </div>
            {Number(imovel.preco_condominio) > 0 && (
              <p className="text-[11px] text-ink-muted mt-0.5">
                Condomínio: {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(imovel.preco_condominio))}
              </p>
            )}
          </div>
        </div>

        {/* Ficha Técnica: Ícones com especificações arquitetônicas */}
        <div className="mt-5 border-t border-line pt-4">
          <div className="grid grid-cols-4 gap-2 text-center text-xs text-ink-soft">
            {/* Quartos / Suítes */}
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="h-4 w-4 text-gold-primary" />
              <span className="font-semibold text-ink">
                {imovel.quartos}
              </span>
              <span className="text-[10px] text-ink-muted">
                {imovel.suites > 0 ? `${imovel.suites} suíte(s)` : "quartos"}
              </span>
            </div>

            {/* Banheiros */}
            <div className="flex flex-col items-center gap-1">
              <Bath className="h-4 w-4 text-gold-primary" />
              <span className="font-semibold text-ink">
                {imovel.banheiros}
              </span>
              <span className="text-[10px] text-ink-muted">banheiros</span>
            </div>

            {/* Vagas */}
            <div className="flex flex-col items-center gap-1">
              <Car className="h-4 w-4 text-gold-primary" />
              <span className="font-semibold text-ink">
                {imovel.vagas}
              </span>
              <span className="text-[10px] text-ink-muted">vagas</span>
            </div>

            {/* Área Útil */}
            <div className="flex flex-col items-center gap-1">
              <Maximize2 className="h-4 w-4 text-gold-primary" />
              <span className="font-semibold text-ink">
                {imovel.area_util}
              </span>
              <span className="text-[10px] text-ink-muted">m² úteis</span>
            </div>
          </div>
        </div>

        {/* Botão de Navegação para a Página do Imóvel */}
        <div className="mt-5 pt-2">
          <Link
            href={urlDetalhes}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-card-hover border border-line-strong py-2.5 text-xs font-semibold text-ink transition-all duration-200 hover:border-gold-primary hover:bg-gold-primary/10 hover:text-gold-light active:scale-[0.98]"
          >
            <span>Ver Detalhes do Imóvel</span>
            <ArrowRight className="h-3.5 w-3.5 text-gold-primary" />
          </Link>
        </div>
      </div>
    </article>
  );
}
