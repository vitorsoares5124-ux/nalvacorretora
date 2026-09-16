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

  return (
    <div className="space-y-6 text-[#F5F5F0]">
      {/* Botão de Limpeza Rápida */}
      {temFiltrosAtivos && (
        <div className="flex items-center justify-between pb-3 border-b border-[#2A2A2A]">
          <span className="text-xs text-[#A3A3A3]">Filtros aplicados</span>
          <button
            type="button"
            onClick={limparFiltros}
            className="flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#F4C430] transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Limpar todos</span>
          </button>
        </div>
      )}

      {/* 1. Finalidade (Tabs/Botões, não dropdown) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
          Finalidade
        </label>
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#141414] p-1 border border-[#2A2A2A]">
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
                    ? "bg-[#D4AF37] text-[#0A0A0A] shadow-md"
                    : "text-[#A3A3A3] hover:text-white hover:bg-[#1E1E1E]"
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
          <label className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
            Cidade
          </label>
          <select
            value={cidadeAtual}
            onChange={(e) =>
              atualizarUrl({
                cidade: e.target.value || null,
                bairro: null, // Limpa bairro ao trocar cidade
              })
            }
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
          >
            <option value="">Todas as cidades</option>
            {options.cidades.map((c) => (
              <option key={c} value={c} className="bg-[#1A1A1A]">
                {c}
              </option>
            ))}
          </select>
        </div>

        {options.bairros.length > 0 && (
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
              Bairro
            </label>
            <select
              value={bairroAtual}
              onChange={(e) =>
                atualizarUrl({
                  bairro: e.target.value || null,
                })
              }
              className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
            >
              <option value="">Todos os bairros</option>
              {options.bairros.map((b) => (
                <option key={b} value={b} className="bg-[#1A1A1A]">
                  {b}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 3. Tipo de Imóvel (Multi-select) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
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
                    ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#F4C430]"
                    : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:border-[#444] hover:text-[#F5F5F0]"
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
        <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
          Preço (R$)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mínimo"
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3 py-2 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Máximo"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3 py-2 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* 5. Área Útil (m² com debounce) */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
          Área Útil (m²)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mín m²"
            value={areaMin}
            onChange={(e) => setAreaMin(e.target.value)}
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3 py-2 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none"
          />
          <input
            type="number"
            placeholder="Máx m²"
            value={areaMax}
            onChange={(e) => setAreaMax(e.target.value)}
            className="w-full rounded-xl border border-[#2A2A2A] bg-[#141414] px-3 py-2 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none"
          />
        </div>
      </div>

      {/* 6. Seletores "X+" (Quartos, Suítes, Banheiros, Vagas) */}
      <div className="space-y-4">
        {/* Quartos */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A3A3A3]">Quartos (mínimo)</span>
            <span className="text-[#D4AF37] font-semibold">{quartosAtual ? `${quartosAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((q) => (
              <button
                key={q || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ quartos: q || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  quartosAtual === q
                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37]"
                    : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:text-white"
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
            <span className="text-[#A3A3A3]">Suítes (mínimo)</span>
            <span className="text-[#D4AF37] font-semibold">{suitesAtual ? `${suitesAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((s) => (
              <button
                key={s || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ suites: s || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  suitesAtual === s
                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37]"
                    : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:text-white"
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
            <span className="text-[#A3A3A3]">Banheiros (mínimo)</span>
            <span className="text-[#D4AF37] font-semibold">{banheirosAtual ? `${banheirosAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((b) => (
              <button
                key={b || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ banheiros: b || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  banheirosAtual === b
                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37]"
                    : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:text-white"
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
            <span className="text-[#A3A3A3]">Vagas (mínimo)</span>
            <span className="text-[#D4AF37] font-semibold">{vagasAtual ? `${vagasAtual}+` : "Qualquer"}</span>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {["", "1", "2", "3", "4"].map((v) => (
              <button
                key={v || "qualquer"}
                type="button"
                onClick={() => atualizarUrl({ vagas: v || null })}
                className={`rounded-lg py-1.5 text-xs font-semibold border transition-all ${
                  vagasAtual === v
                    ? "bg-[#D4AF37] text-[#0A0A0A] border-[#D4AF37]"
                    : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:text-white"
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
          <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
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
                      ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#F4C430]"
                      : "border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:border-[#444] hover:text-[#F5F5F0]"
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
        <div className="pt-4 border-t border-[#2A2A2A]">
          <button
            type="button"
            onClick={onApplyFilters}
            className="w-full rounded-xl bg-[#D4AF37] py-3.5 text-sm font-bold uppercase tracking-wider text-[#0A0A0A] shadow-lg hover:bg-[#F4C430] active:scale-95 transition-all"
          >
            Ver {totalResultados ?? "os"} Imóveis
          </button>
        </div>
      )}
    </div>
  );
}
