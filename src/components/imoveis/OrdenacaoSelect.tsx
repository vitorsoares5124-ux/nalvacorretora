"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

export function OrdenacaoSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const ordemAtual = searchParams.get("ordem") || "recentes";

  const handleChange = (novaOrdem: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (novaOrdem === "recentes") {
      params.delete("ordem");
    } else {
      params.set("ordem", novaOrdem);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-3.5 w-3.5 text-gold-primary hidden sm:inline" />
      <span className="text-xs text-ink-soft hidden sm:inline">Ordenar:</span>
      <select
        value={ordemAtual}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-xl border border-line bg-surface px-3 py-2 text-xs font-medium text-ink focus:border-gold-primary focus:outline-none"
        aria-label="Ordenar resultados"
      >
        <option value="recentes" className="bg-card">Mais Recentes</option>
        <option value="menor_preco" className="bg-card">Menor Preço</option>
        <option value="maior_preco" className="bg-card">Maior Preço</option>
      </select>
    </div>
  );
}
