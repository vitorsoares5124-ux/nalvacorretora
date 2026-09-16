import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Home, ChevronRight, SearchX, RotateCcw } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { ImovelCard } from "@/components/imoveis/ImovelCard";
import { FiltrosSidebar } from "@/components/imoveis/FiltrosSidebar";
import { FiltrosBottomSheet } from "@/components/imoveis/FiltrosBottomSheet";
import { OrdenacaoSelect } from "@/components/imoveis/OrdenacaoSelect";
import { Paginacao } from "@/components/imoveis/Paginacao";
import type { Imovel } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Portfólio de Imóveis Exclusivos | RA Imóveis",
  description:
    "Explore nossa curadoria de coberturas, residências em condomínios fechados e apartamentos de alto padrão com assessoria consultiva personalizada.",
};

interface SearchParamsProps {
  searchParams: Promise<{
    finalidade?: string;
    cidade?: string;
    bairro?: string;
    tipo?: string | string[];
    preco_min?: string;
    preco_max?: string;
    area_min?: string;
    area_max?: string;
    quartos?: string;
    suites?: string;
    banheiros?: string;
    vagas?: string;
    caracteristica?: string | string[];
    ordem?: string;
    page?: string;
  }>;
}

const ITENS_POR_PAGINA = 24;

export default async function ImoveisPage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;

  const paginaAtual = Math.max(1, Number(params.page) || 1);
  const offset = (paginaAtual - 1) * ITENS_POR_PAGINA;

  const tiposFiltro = Array.isArray(params.tipo)
    ? params.tipo
    : params.tipo
    ? [params.tipo]
    : [];

  const caracteristicasFiltro = Array.isArray(params.caracteristica)
    ? params.caracteristica
    : params.caracteristica
    ? [params.caracteristica]
    : [];

  let imoveis: Imovel[] = [];
  let totalCount = 0;

  // Obter opções distintas para os filtros
  let opcoesFiltro = {
    cidades: ["São Paulo", "Campinas", "Barueri"],
    bairros: ["Jardins", "Itaim Bibi", "Gramado", "Alphaville"],
    tipos: ["Apartamento", "Cobertura", "Casa em Condomínio", "Casa"],
    caracteristicas: [
      "Piscina Privativa",
      "Piscina Aquecida",
      "Varanda Gourmet",
      "Pé-direito Duplo",
      "Automação",
      "Segurança 24h",
      "Borda Infinita",
      "Lazer Completo",
      "Home Cinema",
    ],
  };

  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (hasSupabaseConfig) {
    try {
      const supabase = await createClient();

      // 1. Montagem da Query Supabase direta no banco (sem filtro em memória)
      let query = supabase
        .from("imoveis")
        .select("*, imoveis_imagens (*)", { count: "exact" })
        .eq("status", "disponivel");

      if (params.finalidade) {
        query = query.eq("finalidade", params.finalidade);
      }

      if (params.cidade) {
        query = query.ilike("cidade", `%${params.cidade}%`);
      }

      if (params.bairro) {
        query = query.ilike("bairro", `%${params.bairro}%`);
      }

      if (tiposFiltro.length > 0) {
        query = query.in("tipo", tiposFiltro);
      }

      if (params.preco_min) {
        query = query.gte("preco", Number(params.preco_min));
      }

      if (params.preco_max) {
        query = query.lte("preco", Number(params.preco_max));
      }

      if (params.area_min) {
        query = query.gte("area_util", Number(params.area_min));
      }

      if (params.area_max) {
        query = query.lte("area_util", Number(params.area_max));
      }

      if (params.quartos) {
        query = query.gte("quartos", Number(params.quartos));
      }

      if (params.suites) {
        query = query.gte("suites", Number(params.suites));
      }

      if (params.banheiros) {
        query = query.gte("banheiros", Number(params.banheiros));
      }

      if (params.vagas) {
        query = query.gte("vagas", Number(params.vagas));
      }

      if (caracteristicasFiltro.length > 0) {
        query = query.contains("caracteristicas", JSON.stringify(caracteristicasFiltro));
      }

      // Ordenação
      if (params.ordem === "menor_preco") {
        query = query.order("preco", { ascending: true });
      } else if (params.ordem === "maior_preco") {
        query = query.order("preco", { ascending: false });
      } else {
        query = query.order("created_at", { ascending: false });
      }

      // Paginação na query com .range (Correction 4)
      query = query.range(offset, offset + ITENS_POR_PAGINA - 1);

      const { data, count, error } = await query;

      if (!error && data) {
        imoveis = data as Imovel[];
        totalCount = count || 0;
      }

      // Buscar opções distintas no banco
      const { data: todosImoveis } = await supabase
        .from("imoveis")
        .select("cidade, bairro, tipo, caracteristicas")
        .eq("status", "disponivel");

      const itens = (todosImoveis || []) as unknown as Array<{
        cidade: string;
        bairro: string;
        tipo: string;
        caracteristicas: string[];
      }>;

      if (itens.length > 0) {
        const cidadesSet = new Set<string>();
        const bairrosSet = new Set<string>();
        const tiposSet = new Set<string>();
        const caracSet = new Set<string>();

        itens.forEach((item) => {
          if (item.cidade) cidadesSet.add(item.cidade);
          if (item.bairro) bairrosSet.add(item.bairro);
          if (item.tipo) tiposSet.add(item.tipo);
          if (Array.isArray(item.caracteristicas)) {
            item.caracteristicas.forEach((c: string) => caracSet.add(c));
          }
        });

        opcoesFiltro = {
          cidades: Array.from(cidadesSet).sort(),
          bairros: Array.from(bairrosSet).sort(),
          tipos: Array.from(tiposSet).sort(),
          caracteristicas: Array.from(caracSet).sort(),
        };
      }
    } catch (err) {
      console.warn("Exceção na busca Supabase:", err);
    }
  }

  // Fallback para DEMO se base não estiver configurada ou estiver vazia
  if (imoveis.length === 0 && (!hasSupabaseConfig || totalCount === 0)) {
    let filtrados = DEMO_IMOVEIS.filter((i) => i.status === "disponivel");

    if (params.finalidade) {
      filtrados = filtrados.filter((i) => i.finalidade === params.finalidade);
    }
    if (params.cidade) {
      filtrados = filtrados.filter((i) =>
        i.cidade.toLowerCase().includes(params.cidade!.toLowerCase())
      );
    }
    if (params.bairro) {
      filtrados = filtrados.filter((i) =>
        i.bairro.toLowerCase().includes(params.bairro!.toLowerCase())
      );
    }
    if (tiposFiltro.length > 0) {
      filtrados = filtrados.filter((i) => tiposFiltro.includes(i.tipo));
    }
    if (params.preco_min) {
      filtrados = filtrados.filter((i) => i.preco >= Number(params.preco_min));
    }
    if (params.preco_max) {
      filtrados = filtrados.filter((i) => i.preco <= Number(params.preco_max));
    }
    if (params.area_min) {
      filtrados = filtrados.filter((i) => i.area_util >= Number(params.area_min));
    }
    if (params.area_max) {
      filtrados = filtrados.filter((i) => i.area_util <= Number(params.area_max));
    }
    if (params.quartos) {
      filtrados = filtrados.filter((i) => i.quartos >= Number(params.quartos));
    }
    if (params.suites) {
      filtrados = filtrados.filter((i) => i.suites >= Number(params.suites));
    }
    if (params.banheiros) {
      filtrados = filtrados.filter((i) => i.banheiros >= Number(params.banheiros));
    }
    if (params.vagas) {
      filtrados = filtrados.filter((i) => i.vagas >= Number(params.vagas));
    }
    if (caracteristicasFiltro.length > 0) {
      filtrados = filtrados.filter((i) =>
        caracteristicasFiltro.every((c) => i.caracteristicas.includes(c))
      );
    }

    if (params.ordem === "menor_preco") {
      filtrados.sort((a, b) => a.preco - b.preco);
    } else if (params.ordem === "maior_preco") {
      filtrados.sort((a, b) => b.preco - a.preco);
    }

    totalCount = filtrados.length;
    imoveis = filtrados.slice(offset, offset + ITENS_POR_PAGINA);
  }

  const totalPaginas = Math.ceil(totalCount / ITENS_POR_PAGINA);

  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-24 text-[#F5F5F0]">
      {/* Breadcrumb */}
      <div className="border-b border-[#2A2A2A] bg-[#0D0D0D]/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8 text-xs text-[#A3A3A3]">
          <Link href="/" className="hover:text-[#D4AF37] flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>Início</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-[#555]" />
          <span className="text-[#D4AF37]">Imóveis</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#2A2A2A]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfólio Exclusivo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F5F0]">
              Imóveis Selecionados
            </h1>
            <p className="mt-1 text-sm text-[#A3A3A3]">
              Curadoria de coberturas, casas em condomínios e apartamentos de alto padrão.
            </p>
          </div>

          {/* Barra de Controles Mobile e Ordenação */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <FiltrosBottomSheet
              options={opcoesFiltro}
              totalResultados={totalCount}
            />
            <OrdenacaoSelect />
          </div>
        </div>

        {/* Contador Geral de Resultados (Reflete o total real - Correction 4) */}
        <div className="py-4 flex items-center justify-between text-xs text-[#A3A3A3]">
          <span>
            Mostrando <strong className="text-[#F5F5F0]">{imoveis.length}</strong> de{" "}
            <strong className="text-[#D4AF37]">{totalCount}</strong>{" "}
            {totalCount === 1 ? "propriedade encontrada" : "propriedades encontradas"}
          </span>
        </div>

        {/* Layout de Duas Colunas: Sidebar Desktop + Grid de Resultados */}
        <div className="mt-2 flex gap-8 lg:gap-10 items-start">
          {/* Sidebar Desktop */}
          <FiltrosSidebar
            options={opcoesFiltro}
            totalResultados={totalCount}
          />

          {/* Área Central de Resultados */}
          <div className="flex-1 min-w-0">
            {imoveis.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {imoveis.map((imovel) => (
                    <ImovelCard key={imovel.id} imovel={imovel} />
                  ))}
                </div>

                {/* Paginação */}
                <Paginacao
                  paginaAtual={paginaAtual}
                  totalPaginas={totalPaginas}
                />
              </>
            ) : (
              /* Estado Vazio Refinado */
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1F1F1F] border border-[#2A2A2A] text-[#D4AF37]">
                  <SearchX className="h-8 w-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#F5F5F0]">
                    Nenhum imóvel encontrado com esses filtros
                  </h3>
                  <p className="text-xs text-[#A3A3A3] max-w-md mx-auto">
                    Tente ajustar os critérios de busca, remover alguns filtros de características ou selecionar outra faixa de valores.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/imoveis"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#222222] border border-[#333333] px-5 py-2.5 text-xs font-semibold text-[#D4AF37] hover:border-[#D4AF37] hover:text-[#F4C430] transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Limpar todos os filtros</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
