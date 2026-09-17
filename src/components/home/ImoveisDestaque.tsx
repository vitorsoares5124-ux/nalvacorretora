import { ImovelCard } from "@/components/imoveis/ImovelCard";
import { Paginacao } from "@/components/imoveis/Paginacao";
import type { Imovel } from "@/lib/supabase/types";
import { Info } from "lucide-react";

interface ImoveisDestaqueProps {
  imoveis: Imovel[];
  isDemo?: boolean;
  paginaAtual?: number;
  totalPaginas?: number;
}

export function ImoveisDestaque({
  imoveis,
  isDemo,
  paginaAtual = 1,
  totalPaginas = 1,
}: ImoveisDestaqueProps) {
  return (
    <section id="destaques" className="py-20 sm:py-28 bg-canvas-alt relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary mb-3">
              <span>Coleção Exclusiva</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
              Imóveis em <span className="gold-gradient-text">Destaque</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-xl">
              Propriedades selecionadas por sua localização privilegiada, acabamentos de altíssimo nível e arquitetura singular.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-ink-muted uppercase tracking-widest font-mono">
              {imoveis.length} {imoveis.length === 1 ? "propriedade" : "propriedades"}
            </span>
          </div>
        </div>

        {/* Aviso discreto em modo DEMO */}
        {isDemo && (
          <div className="mb-8 flex items-center gap-2.5 rounded-xl border border-gold-primary/30 bg-card p-3 text-xs text-gold-primary">
            <Info className="h-4 w-4 shrink-0" />
            <span>
              Exibindo imóveis de demonstração. Ao rodar o arquivo <code>supabase/schema.sql</code> no seu Supabase e preencher o <code>.env.local</code>, os dados serão sincronizados em tempo real.
            </span>
          </div>
        )}

        {/* Grid de Imóveis (Mobile-first: 1 col mobile, 2 col tablet, 3 col desktop) */}
        {imoveis.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {imoveis.map((imovel) => (
                <ImovelCard key={imovel.id} imovel={imovel} />
              ))}
            </div>
            <Paginacao
              paginaAtual={paginaAtual}
              totalPaginas={totalPaginas}
              ancora="destaques"
            />
          </>
        ) : (
          <div className="rounded-2xl border border-line bg-surface p-12 text-center">
            <p className="text-sm text-ink-soft">Nenhum imóvel em destaque no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
