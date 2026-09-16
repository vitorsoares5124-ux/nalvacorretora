"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  RotateCcw,
  Building,
  DollarSign,
  Maximize2,
  BedDouble,
  Bath,
  Car,
  Check,
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface DistinctOptions {
  cidades: string[];
  bairros: string[];
  tipos: string[];
  caracteristicas: string[];
}

interface FiltrosImoveisContentProps {
  options: DistinctOptions;
  totalResultados?: number;
  onApplyFilters?: () => void; // Callback para fechar o BottomSheet no mobile
}

export function FiltrosImoveisContent({
  options,
  totalResultados,
  onApplyFilters,
}: FiltrosImoveisContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // 1. Estados locais sincronizados com a URL
  const finalidadeAtual = searchParams.get("finalidade") || "";
  const cidadeAtual = searchParams.get("cidade") || "";
  const bairroAtual = searchParams.get("bairro") || "";
  const tiposAtuais = searchParams.getAll("tipo");
  const quartosAtual = searchParams.get("quartos") || "";
  const suitesAtual = searchParams.get("suites") || "";
  const banheirosAtual = searchParams.get("banheiros") || "";
  const vagasAtual = searchParams.get("vagas") || "";
  const caracteristicasAtuais = searchParams.getAll("caracteristica");

  // 1b. Estados do combobox de Cidade/Bairro (texto digitado + abertura)
  const [cidadeTexto, setCidadeTexto] = useState(
    searchParams.get("cidade") || ""
  );
  const [bairroTexto, setBairroTexto] = useState(
    searchParams.get("bairro") || ""
  );
  const [cidadeAberta, setCidadeAberta] = useState(false);
  const [bairroAberta, setBairroAberta] = useState(false);

  // 2. Estados numéricos locais com debounce (Correction 5)
  const [precoMin, setPrecoMin] = useState(searchParams.get("preco_min") || "");
  const [precoMax, setPrecoMax] = useState(searchParams.get("preco_max") || "");
  const [areaMin, setAreaMin] = useState(searchParams.get("area_min") || "");
  const [areaMax, setAreaMax] = useState(searchParams.get("area_max") || "");

  // Sincroniza se a URL mudar externamente (ex: botão Voltar do navegador)
  useEffect(() => {
    setPrecoMin(searchParams.get("preco_min") || "");
    setPrecoMax(searchParams.get("preco_max") || "");
    setAreaMin(searchParams.get("area_min") || "");
    setAreaMax(searchParams.get("area_max") || "");
    setCidadeTexto(searchParams.get("cidade") || "");
    setBairroTexto(searchParams.get("bairro") || "");
  }, [searchParams]);

  // Função central para atualizar os searchParams mantendo os demais
  const atualizarUrl = (atualizacoes: Record<string, string | string[] | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    // Resetar página ao mudar qualquer filtro
    params.delete("page");

    Object.entries(atualizacoes).forEach(([chave, valor]) => {
      params.delete(chave);
      if (valor === null || valor === "") return;

      if (Array.isArray(valor)) {
        valor.forEach((v) => {
          if (v) params.append(chave, v);
        });
      } else {
        params.set(chave, valor);
      }
    });

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  // Debounce de ~400ms para inputs numéricos (Correction 5)
  useEffect(() => {
    const timer = setTimeout(() => {
      const paramPrecoMin = searchParams.get("preco_min") || "";
      const paramPrecoMax = searchParams.get("preco_max") || "";
      const paramAreaMin = searchParams.get("area_min") || "";
      const paramAreaMax = searchParams.get("area_max") || "";

      if (
        precoMin !== paramPrecoMin ||
        precoMax !== paramPrecoMax ||
        areaMin !== paramAreaMin ||
        areaMax !== paramAreaMax
      ) {
        atualizarUrl({
          preco_min: precoMin || null,
          preco_max: precoMax || null,
          area_min: areaMin || null,
          area_max: areaMax || null,
        });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [precoMin, precoMax, areaMin, areaMax]);

  // Toggle de arrays (Tipos de Imóvel, Características)
  const toggleArrayItem = (paramName: string, itensAtuais: string[], item: string) => {
    const novoArray = itensAtuais.includes(item)
      ? itensAtuais.filter((i) => i !== item)
      : [...itensAtuais, item];
    atualizarUrl({ [paramName]: novoArray });
  };

  // Limpar todos os filtros
  const limparFiltros = () => {
    setPrecoMin("");
    setPrecoMax("");
    setAreaMin("");
    setAreaMax("");
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  };

  const temFiltrosAtivos = Array.from(searchParams.keys()).some((k) => k !== "page" && k !== "ordem");

  // Normaliza texto (ignora acentos e caixa) para busca nos filtros
  const normalizarTexto = (s: string) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  // Sugestões filtradas conforme o texto digitado
  const cidadesSugeridas = cidadeTexto
    ? options.cidades.filter((c) =>
        normalizarTexto(c).includes(normalizarTexto(cidadeTexto))
      )
    : options.cidades;

  const bairrosSugeridos = bairroTexto
    ? options.bairros.filter((b) =>
        normalizarTexto(b).includes(normalizarTexto(bairroTexto))
      )
    : options.bairros;

  return (
    <div className="space-y-6 text-ink">
      {/* Botão de Limpeza Rápida */}
      {temFiltrosAtivos && (
        <div className="flex items-center justify-between pb-3 border-b border-line">
          <span className="text-xs text-ink-soft">Filtros aplicados</span>
          <button
            type="button"
            onClick={limparFiltros}
            className="flex items-center gap-1.5 text-xs text-gold-primary hover:text-gold-light transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Limpar todos</span>
          </button>
        </div>
      )}

      {/* 1. Finalidade (Tabs/Botões, não dropdown) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
          Finalidade
        </label>
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-surface p-1 border border-line">
          {[
            { label: "Venda", value: "venda" },
            { label: "Aluguel", value: "aluguel" },
            { label: "Temporada", value: "temporada" },
          ].map((item) => {
            const isAtivo = finalidadeAtual === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() =>
                  atualizarUrl({
                    finalidade: isAtivo ? null : item.value,
                  })
                }
                className={`rounded-lg py-2 text-xs font-semibold transition-all ${
                  isAtivo
                    ? "bg-gold-primary text-on-gold shadow-md"
                    : "text-ink-soft hover:text-white hover:bg-elevated"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Cidade & Bairro */}
      <div className="space-y-3">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            Cidade
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
              <Search className="h-3.5 w-3.5 text-ink-muted" />
            </div>
            <input
              type="text"
              value={cidadeTexto}
              onChange={(e) => {
                setCidadeTexto(e.target.value);
                setCidadeAberta(true);
              }}
              onFocus={() => setCidadeAberta(true)}
              onBlur={() => {
                setTimeout(() => setCidadeAberta(false), 150);
              }}
              placeholder="Pesquisar cidade..."
              className="w-full rounded-xl border border-line bg-surface pl-9 pr-3.5 py-2.5 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
            />
            {cidadeAberta && cidadesSugeridas.length > 0 && (
              <ul className="absolute z-30 mt-1.5 max-h-56 w-full overflow-y-auto rounded-xl border border-line bg-card shadow-2xl scrollbar-thin">
                {cidadesSugeridas.map((c) => {
                  const isAtivo = cidadeAtual === c;
                  return (
                    <li key={c}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()} // mantém o foco para o click funcionar
                        onClick={() => {
                          atualizarUrl({
                            cidade: c,
                            bairro: null, // Limpa bairro ao trocar cidade
                          });
                          setCidadeAberta(false);
                        }}
                        className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors ${
                          isAtivo
                            ? "bg-gold-primary/15 text-gold-light"
                            : "text-ink hover:bg-elevated"
                        }`}
                      >
                        <span>{c}</span>
                        {isAtivo && <Check className="h-3.5 w-3.5 text-gold-primary" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            {/* Reajuste visual quando há digitação sem correspondência */}
            {cidadeAberta && cidadesSugeridas.length === 0 && (
              <div className="absolute z-30 mt-1.5 w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink-muted shadow-2xl">
                Nenhuma cidade cadastrada com esse nome.
              </div>
            )}
          </div>
        </div>

        {options.bairros.length > 0 && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
              Bairro
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Search className="h-3.5 w-3.5 text-ink-muted" />
              </div>
              <input
                type="text"
                value={bairroTexto}
                onChange={(e) => {
                  setBairroTexto(e.target.value);
                  setBairroAberta(true);
                }}
                onFocus={() => setBairroAberta(true)}
                onBlur={() => {
                  setTimeout(() => setBairroAberta(false), 150);
                }}
                placeholder="Pesquisar bairro..."
                className="w-full rounded-xl border border-line bg-surface pl-9 pr-3.5 py-2.5 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
              />
              {bairroAberta && bairrosSugeridos.length > 0 && (
                <ul className="absolute z-30 mt-1.5 max-h-56 w-full overflow-y-auto rounded-xl border border-line bg-card shadow-2xl scrollbar-thin">
                  {bairrosSugeridos.map((b) => {
                    const isAtivo = bairroAtual === b;
                    return (
                      <li key={b}>
                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()} // mantém o foco para o click funcionar
                          onClick={() => {
                            atualizarUrl({
                              bairro: b,
                            });
                            setBairroAberta(false);
                          }}
                          className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors ${
                            isAtivo
                              ? "bg-gold-primary/15 text-gold-light"
                              : "text-ink hover:bg-elevated"
                          }`}
                        >
                          <span>{b}</span>
                          {isAtivo && <Check className="h-3.5 w-3.5 text-gold-primary" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
              {bairroAberta && bairrosSugeridos.length === 0 && (
                <div className="absolute z-30 mt-1.5 w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink-muted shadow-2xl">
                  Nenhum bairro cadastrado com esse nome.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3. Tipo de Imóvel (Multi-select) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
          Tipo de Imóvel
        </label>
        <div className="flex flex-wrap gap-1.5">
          {options.tipos.map((tipo) => {
            const isAtivo = tiposAtuais.includes(tipo);
            return (
              <button
                key={tipo}
                type="button"
                onClick={() => toggleArrayItem("tipo", tiposAtuais, tipo)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium border transition-all ${
                  isAtivo
                    ? "bg-gold-primary/20 border-gold-primary text-gold-light"
                    : "border-line bg-surface text-ink-soft hover:border-line-hover hover:text-ink"
                }`}
              >
                {isAtivo && <Check className="h-3 w-3" />}
                <span>{tipo}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Faixa de Preço (Inputs numéricos com debounce) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
          Preço (R$)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mínimo"
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
          />
          <input
            type="number"
            placeholder="Máximo"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
          />
        </div>
      </div>

      {/* 5. Área Útil (m² com debounce) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
          Área Útil (m²)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mín m²"
            value={areaMin}
            onChange={(e) => setAreaMin(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
          />
          <input
            type="number"
            placeholder="Máx m²"
            value={areaMax}
            onChange={(e) => setAreaMax(e.target.value)}
            className="w-full rounded-xl border border-line bg-surface px-3 py-2 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
          />
        </div>
      </div>

      {/* 6. Seletores "X+" (Quartos, Suítes, Banheiros, Vagas) */}
      <div className="space-y-4">
        {/* Quartos */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-soft">Quartos (mínimo)</span>
            <span className="text-gold-primary font-semibold">{quartosAtual ? `${quartosAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((q) => (
              <button
                key={q || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ quartos: q || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  quartosAtual === q
                    ? "bg-gold-primary text-on-gold border-gold-primary"
                    : "border-line bg-surface text-ink-soft hover:text-white"
                }`}
              >
                {q ? `${q}+` : "Todos"}
              </button>
            ))}
          </div>
        </div>

        {/* Suítes */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-soft">Suítes (mínimo)</span>
            <span className="text-gold-primary font-semibold">{suitesAtual ? `${suitesAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((s) => (
              <button
                key={s || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ suites: s || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  suitesAtual === s
                    ? "bg-gold-primary text-on-gold border-gold-primary"
                    : "border-line bg-surface text-ink-soft hover:text-white"
                }`}
              >
                {s ? `${s}+` : "Todas"}
              </button>
            ))}
          </div>
        </div>

        {/* Banheiros */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-soft">Banheiros (mínimo)</span>
            <span className="text-gold-primary font-semibold">{banheirosAtual ? `${banheirosAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((b) => (
              <button
                key={b || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ banheiros: b || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  banheirosAtual === b
                    ? "bg-gold-primary text-on-gold border-gold-primary"
                    : "border-line bg-surface text-ink-soft hover:text-white"
                }`}
              >
                {b ? `${b}+` : "Todos"}
              </button>
            ))}
          </div>
        </div>

        {/* Vagas */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-ink-soft">Vagas (mínimo)</span>
            <span className="text-gold-primary font-semibold">{vagasAtual ? `${vagasAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((v) => (
              <button
                key={v || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ vagas: v || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  vagasAtual === v
                    ? "bg-gold-primary text-on-gold border-gold-primary"
                    : "border-line bg-surface text-ink-soft hover:text-white"
                }`}
              >
                {v ? `${v}+` : "Todas"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Características (Chips multi-select) */}
      {options.caracteristicas.length > 0 && (
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-gold-primary">
            Diferenciais & Características
          </label>
          <div className="flex flex-wrap gap-1.5">
            {options.caracteristicas.map((carac) => {
              const isAtivo = caracteristicasAtuais.includes(carac);
              return (
                <button
                  key={carac}
                  type="button"
                  onClick={() =>
                    toggleArrayItem(
                      "caracteristica",
                      caracteristicasAtuais,
                      carac
                    )
                  }
                  className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs border transition-all ${
                    isAtivo
                      ? "bg-gold-primary/20 border-gold-primary text-gold-light"
                      : "border-line bg-surface text-ink-soft hover:border-line-hover hover:text-ink"
                  }`}
                >
                  {isAtivo && <Check className="h-3 w-3" />}
                  <span>{carac}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Botão de Fechar / Aplicar no Mobile */}
      {onApplyFilters && (
        <div className="pt-4 border-t border-line">
          <button
            type="button"
            onClick={onApplyFilters}
            className="w-full rounded-xl gold-gradient-btn py-3.5 text-sm font-bold uppercase tracking-wider text-on-gold shadow-lg active:scale-95 transition-all"
          >
            Ver {totalResultados ?? "os"} Imóveis
          </button>
        </div>
      )}
    </div>
  );
}
