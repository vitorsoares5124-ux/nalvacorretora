import { ImovelCard } from "@/components/imoveis/ImovelCard";
import type { Imovel } from "@/lib/supabase/types";
import { Sparkles, Info } from "lucide-react";

interface ImoveisDestaqueProps {
  imoveis: Imovel[];
  isDemo?: boolean;
}

export function ImoveisDestaque({ imoveis, isDemo }: ImoveisDestaqueProps) {
  return (
    <section id="destaques" className="py-20 sm:py-28 bg-[#0D0D0D] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Coleção Exclusiva</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F0]">
              Imóveis em <span className="gold-gradient-text">Destaque</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A3A3A3] max-w-xl">
              Propriedades selecionadas por sua localização privilegiada, acabamentos de altíssimo nível e arquitetura singular.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#737373] uppercase tracking-widest font-mono">
              {imoveis.length} {imoveis.length === 1 ? "propriedade" : "propriedades"}
            </span>
          </div>
        </div>

        {/* Aviso discreto em modo DEMO */}
        {isDemo && (
          <div className="mb-8 flex items-center gap-2.5 rounded-xl border border-[#D4AF37]/30 bg-[#1A1A1A] p-3 text-xs text-[#D4AF37]">
            <Info className="h-4 w-4 shrink-0" />
            <span>
              Exibindo imóveis de demonstração com o prefixo <strong>[DEMO]</strong>. Ao rodar o arquivo <code>supabase/schema.sql</code> no seu Supabase e preencher o <code>.env.local</code>, os dados serão sincronizados em tempo real.
            </span>
          </div>
        )}

        {/* Grid de Imóveis (Mobile-first: 1 col mobile, 2 col tablet, 3 col desktop) */}
        {imoveis.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {imoveis.map((imovel) => (
              <ImovelCard key={imovel.id} imovel={imovel} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-12 text-center">
            <p className="text-sm text-[#A3A3A3]">Nenhum imóvel em destaque no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
