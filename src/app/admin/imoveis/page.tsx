import { Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { TabelaImoveisAdmin } from "@/components/admin/TabelaImoveisAdmin";
import type { Imovel } from "@/lib/supabase/types";

export const revalidate = 0; // Sempre dinâmico no painel

export default async function AdminImoveisPage() {
  let imoveis: Imovel[] = [];

  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (hasSupabaseConfig) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("imoveis")
        .select(`
          *,
          imoveis_imagens (*)
        `)
        .order("created_at", { ascending: false });

      if (data && !error) {
        imoveis = data as Imovel[];
      }
    } catch (err) {
      console.warn("Erro ao buscar imóveis no admin:", err);
    }
  }

  // Fallback nos dados de demonstração se base vazia ou não configurada
  if (imoveis.length === 0) {
    imoveis = DEMO_IMOVEIS;
  }

  return (
    <div className="space-y-8">
      {/* Cabeçalho da Seção */}
      <div className="border-b border-line pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary mb-1">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Gestão do Catálogo</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
          Imóveis Cadastrados
        </h1>
        <p className="text-xs text-ink-soft mt-0.5">
          Visualize, edite status, gerencie fotos e adicione novas propriedades ao portfólio.
        </p>
      </div>

      {/* Tabela Interativa com Filtros e Ações Rápidas */}
      <TabelaImoveisAdmin imoveisIniciais={imoveis} />
    </div>
  );
}
