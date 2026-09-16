"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { FiltrosImoveisContent } from "./FiltrosImoveisContent";

interface FiltrosBottomSheetProps {
  options: {
    cidades: string[];
    bairros: string[];
    tipos: string[];
    caracteristicas: string[];
  };
  totalResultados: number;
}

export function FiltrosBottomSheet({
  options,
  totalResultados,
}: FiltrosBottomSheetProps) {
  const [aberto, setAberto] = useState(false);
  const searchParams = useSearchParams();

  // Contar quantos filtros estão ativos
  const chavesDeFiltro = [
    "finalidade",
    "cidade",
    "bairro",
    "tipo",
    "preco_min",
    "preco_max",
    "area_min",
    "area_max",
    "quartos",
    "suites",
    "banheiros",
    "vagas",
    "caracteristica",
  ];

  const filtrosAtivosContagem = chavesDeFiltro.reduce((acc, chave) => {
    const valores = searchParams.getAll(chave);
    return acc + valores.length;
  }, 0);

  // Trava scroll do body
  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [aberto]);

  return (
    <div className="lg:hidden">
      {/* Botão de Disparo para Mobile */}
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="flex items-center gap-2 rounded-xl border border-line-strong bg-card px-4 py-2.5 text-xs font-semibold text-ink hover:border-gold-primary active:scale-95 transition-all shadow-md"
        aria-label="Abrir filtros de busca"
      >
        <SlidersHorizontal className="h-4 w-4 text-gold-primary" />
        <span>Filtros</span>
        {filtrosAtivosContagem > 0 && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-primary text-[10px] font-bold text-on-gold">
            {filtrosAtivosContagem}
          </span>
        )}
      </button>

      {/* Backdrop e Bottom Sheet */}
      {aberto && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Área de clique fora para fechar */}
          <div
            className="flex-1"
            onClick={() => setAberto(false)}
            aria-hidden="true"
          />

          {/* Gaveta Inferior (Bottom Sheet) */}
          <div className="relative max-h-[85vh] w-full overflow-hidden rounded-t-3xl border-t border-line-strong bg-surface shadow-2xl animate-in slide-in-from-bottom duration-300 flex flex-col">
            {/* Barra de Arraste (Pill) */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-12 rounded-full bg-elevated" />
            </div>

            {/* Cabeçalho do Bottom Sheet */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-line">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-gold-primary" />
                <h3 className="text-base font-bold text-ink">
                  Filtrar Imóveis
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-full bg-elevated p-2 text-ink-soft hover:text-white"
                aria-label="Fechar filtros"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Conteúdo Rolável do Formulário */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin">
              <FiltrosImoveisContent
                options={options}
                totalResultados={totalResultados}
                onApplyFilters={() => setAberto(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
