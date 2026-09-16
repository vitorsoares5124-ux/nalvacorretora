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
      <ArrowUpDown className="h-3.5 w-3.5 text-[#D4AF37] hidden sm:inline" />
      <span className="text-xs text-[#A3A3A3] hidden sm:inline">Ordenar:</span>
      <select
        value={ordemAtual}
        onChange={(e) => handleChange(e.target.value)}
        className="rounded-xl border border-[#2A2A2A] bg-[#141414] px-3 py-2 text-xs font-medium text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
        aria-label="Ordenar resultados"
      >
        <option value="recentes" className="bg-[#1A1A1A]">Mais Recentes</option>
        <option value="menor_preco" className="bg-[#1A1A1A]">Menor Preço</option>
        <option value="maior_preco" className="bg-[#1A1A1A]">Maior Preço</option>
      </select>
    </div>
  );
}
