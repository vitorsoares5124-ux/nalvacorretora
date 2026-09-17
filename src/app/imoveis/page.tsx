import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { Sparkles, Home, ChevronRight, SearchX, RotateCcw } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { ImovelCard } from "@/components/imoveis/ImovelCard";
import { SearchBar } from "@/components/imoveis/SearchBar";
import { FiltrosSidebar } from "@/components/imoveis/FiltrosSidebar";
import { FiltrosBottomSheet } from "@/components/imoveis/FiltrosBottomSheet";
import { OrdenacaoSelect } from "@/components/imoveis/OrdenacaoSelect";
import { Paginacao } from "@/components/imoveis/Paginacao";
import { Reveal } from "@/components/animations/Reveal";
import type { Imovel, ImovelFinalidade } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Portfólio de Imóveis Exclusivos | RA Imóveis",
  description:
    "Explore nossa curadoria de coberturas, residências em condomínios fechados e apartamentos de alto padrão com assessoria consultiva personalizada.",
};

interface SearchParamsProps {
  searchParams: Promise<{
    busca?: string;
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

const ITENS_POR_PAGINA_DESKTOP = 12;
const ITENS_POR_PAGINA_MOBILE = 7;

export default async function ImoveisPage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;

  // O servidor não conhece a largura da tela: usa o user-agent para
  // escolher quantos cartões exibir por página (12 no PC, 7 no mobile).
  const userAgent = (await headers()).get("user-agent") ?? "";
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
  const ITENS_POR_PAGINA = isMobile
    ? ITENS_POR_PAGINA_MOBILE
    : ITENS_POR_PAGINA_DESKTOP;

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

  const termoBusca = params.busca?.trim() || "";

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
        .select("*, imoveis_imagens!inner (*)", { count: "exact" })
        .eq("status", "disponivel");

      const finalidadesValidas: ImovelFinalidade[] = ["venda", "aluguel", "temporada"];

      if (
        params.finalidade &&
        finalidadesValidas.includes(params.finalidade as ImovelFinalidade)
      ) {
        query = query.eq("finalidade", params.finalidade as ImovelFinalidade);
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

      // Busca por texto: título, tipo, cidade, bairro ou UF
      if (termoBusca) {
        query = query.or(
          [
            `titulo.ilike.%${termoBusca}%`,
            `tipo.ilike.%${termoBusca}%`,
            `cidade.ilike.%${termoBusca}%`,
            `bairro.ilike.%${termoBusca}%`,
            `uf.ilike.%${termoBusca}%`,
          ].join(",")
        );
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

      // Executa as consultas em paralelo para reduzir a latência total
      const [resultadoPrincipal, resultadoOpcoes] = await Promise.all([
        query,
        supabase
          .from("imoveis")
          .select("cidade, bairro, tipo, caracteristicas")
          .eq("status", "disponivel"),
      ]);

      const { data, count, error } = resultadoPrincipal;

      if (!error && data) {
        imoveis = data as Imovel[];
        totalCount = count || 0;
      }

      // Opções distintas a partir da segunda consulta
      const todosImoveis = resultadoOpcoes.data;

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

    if (termoBusca) {
      const busca = termoBusca.toLowerCase();
      filtrados = filtrados.filter(
        (i) =>
          i.titulo.toLowerCase().includes(busca) ||
          i.tipo.toLowerCase().includes(busca) ||
          i.cidade.toLowerCase().includes(busca) ||
          i.bairro.toLowerCase().includes(busca) ||
          i.uf.toLowerCase().includes(busca)
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
    <div className="min-h-screen bg-canvas pb-24 text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-line bg-canvas-alt/70 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8 text-xs text-ink-soft">
          <Link href="/" className="hover:text-gold-primary flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            <span>Início</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-ink-muted" />
          <span className="text-gold-primary">Imóveis</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Cabeçalho da Página */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-line">
          <Reveal variant="up">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Portfólio Exclusivo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Imóveis <span className="gold-gradient-text">Selecionados</span>
            </h1>
            <p className="mt-1 text-sm text-ink-soft">
              Curadoria de coberturas, casas em condomínios e apartamentos de alto padrão.
            </p>
          </Reveal>

          {/* Barra de Controles Mobile e Ordenação */}
          <Reveal
            variant="left"
            delay={120}
            className="flex items-center justify-between md:justify-end gap-4"
          >
            <FiltrosBottomSheet
              options={opcoesFiltro}
              totalResultados={totalCount}
            />
            <OrdenacaoSelect />
          </Reveal>
        </div>

        {/* Barra de Pesquisa no topo da listagem */}
        <Reveal variant="up" delay={80} className="pt-6">
          <SearchBar />
        </Reveal>

        {/* Contador Geral de Resultados (Reflete o total real - Correction 4) */}
        <Reveal
          variant="fade"
          className="py-4 flex items-center justify-between text-xs text-ink-soft"
        >
          <span>
            Mostrando <strong className="text-ink">{imoveis.length}</strong> de{" "}
            <strong className="text-gold-primary">{totalCount}</strong>{" "}
            {totalCount === 1 ? "propriedade encontrada" : "propriedades encontradas"}
          </span>
        </Reveal>

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
                  {imoveis.map((imovel, idx) => (
                    <Reveal
                      key={imovel.id}
                      variant="up"
                      delay={(idx % 3) * 100}
                      className="h-full"
                    >
                      <ImovelCard imovel={imovel} />
                    </Reveal>
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
              <Reveal
                variant="zoom"
                className="rounded-2xl border border-line bg-surface p-12 text-center space-y-4"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-elevated border border-line text-gold-primary">
                  <SearchX className="h-8 w-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-ink">
                    Nenhum imóvel encontrado com esses filtros
                  </h3>
                  <p className="text-xs text-ink-soft max-w-md mx-auto">
                    Tente ajustar os critérios de busca, remover alguns filtros de características ou selecionar outra faixa de valores.
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/imoveis"
                    className="inline-flex items-center gap-2 rounded-xl bg-card-hover border border-line-strong px-5 py-2.5 text-xs font-semibold text-gold-primary hover:border-gold-primary hover:text-gold-light transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Limpar todos os filtros</span>
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
