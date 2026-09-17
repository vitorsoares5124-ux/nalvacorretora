"use client";

import { useRouter, useSearchParams } from "next/navigation";

const OPCOES = [
  { valor: "venda", rotulo: "Venda" },
  { valor: "aluguel", rotulo: "Aluguel" },
  { valor: "temporada", rotulo: "Temporada" },
] as const;

export function FiltrosRapidos() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const finalidadeAtual = searchParams.get("finalidade") || "";

  const handleTrocar = (valor: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (valor === finalidadeAtual) {
      params.delete("finalidade");
    } else {
      params.set("finalidade", valor);
    }
    router.push(`/imoveis?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {OPCOES.map((opcao) => {
        const ativo = finalidadeAtual === opcao.valor;
        return (
          <button
            key={opcao.valor}
            type="button"
            onClick={() => handleTrocar(opcao.valor)}
            className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 ${
              ativo
                ? "bg-gold-primary border-gold-primary text-on-gold shadow-md shadow-gold-primary/20"
                : "bg-surface border-line text-ink-soft hover:text-gold-primary hover:border-gold-primary/50"
            }`}
          >
            {opcao.rotulo}
          </button>
        );
      })}
    </div>
  );
}