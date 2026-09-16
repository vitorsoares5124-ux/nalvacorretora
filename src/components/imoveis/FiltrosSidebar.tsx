import { SlidersHorizontal } from "lucide-react";
import { FiltrosImoveisContent } from "./FiltrosImoveisContent";

interface FiltrosSidebarProps {
  options: {
    cidades: string[];
    bairros: string[];
    tipos: string[];
    caracteristicas: string[];
  };
  totalResultados: number;
}

export function FiltrosSidebar({ options, totalResultados }: FiltrosSidebarProps) {
  return (
    <aside className="hidden lg:block w-80 shrink-0">
      <div className="sticky top-28 rounded-2xl border border-line bg-card p-6 shadow-xl space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-line">
          <SlidersHorizontal className="h-4 w-4 text-gold-primary" />
          <h2 className="text-base font-bold text-ink">Filtrar Imóveis</h2>
        </div>

        <FiltrosImoveisContent options={options} totalResultados={totalResultados} />
      </div>
    </aside>
  );
}
