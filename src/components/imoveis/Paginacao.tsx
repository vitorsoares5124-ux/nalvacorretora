"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginacaoProps {
  paginaAtual: number;
  totalPaginas: number;
  ancora?: string;
}

export function Paginacao({ paginaAtual, totalPaginas, ancora }: PaginacaoProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPaginas <= 1) return null;

  const mudarPagina = (novaPagina: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (novaPagina <= 1) {
      params.delete("page");
    } else {
      params.set("page", novaPagina.toString());
    }
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}${ancora ? `#${ancora}` : ""}`);
  };

  // Gerar array de páginas visíveis
  const paginas = [];
  for (let i = 1; i <= totalPaginas; i++) {
    // Mostrar primeira, última, atual e adjacentes
    if (
      i === 1 ||
      i === totalPaginas ||
      (i >= paginaAtual - 1 && i <= paginaAtual + 1)
    ) {
      paginas.push(i);
    } else if (paginas[paginas.length - 1] !== "...") {
      paginas.push("...");
    }
  }

  return (
    <nav
      className="flex items-center justify-center gap-1.5 pt-12 pb-6"
      aria-label="Navegação entre páginas"
    >
      {/* Botão Anterior */}
      <button
        type="button"
        disabled={paginaAtual <= 1}
        onClick={() => mudarPagina(paginaAtual - 1)}
        className="flex items-center gap-1 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-semibold text-ink-soft transition-all hover:border-gold-primary hover:text-ink disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Anterior</span>
      </button>

      {/* Números das páginas */}
      <div className="flex items-center gap-1">
        {paginas.map((p, idx) => {
          if (p === "...") {
            return (
              <span key={`dots-${idx}`} className="px-2 text-xs text-ink-muted">
                ...
              </span>
            );
          }

          const isAtiva = p === paginaAtual;
          return (
            <button
              key={p}
              type="button"
              onClick={() => mudarPagina(Number(p))}
              className={`h-9 w-9 rounded-xl text-xs font-bold transition-all ${
                isAtiva
                  ? "bg-gold-primary text-on-gold shadow-md shadow-gold-primary/20"
                  : "border border-line bg-surface text-ink-soft hover:border-line-hover hover:text-white"
              }`}
              aria-current={isAtiva ? "page" : undefined}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Botão Próxima */}
      <button
        type="button"
        disabled={paginaAtual >= totalPaginas}
        onClick={() => mudarPagina(paginaAtual + 1)}
        className="flex items-center gap-1 rounded-xl border border-line bg-surface px-3.5 py-2 text-xs font-semibold text-ink-soft transition-all hover:border-gold-primary hover:text-ink disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Próxima página"
      >
        <span className="hidden sm:inline">Próxima</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
