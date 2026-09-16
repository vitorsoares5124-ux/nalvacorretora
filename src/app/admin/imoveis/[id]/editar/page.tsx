import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { ImovelForm } from "@/components/admin/ImovelForm";
import type { Imovel } from "@/lib/supabase/types";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 0;

export default async function EditarImovelPage({ params }: PageProps) {
  const { id } = await params;

  let imovel: Imovel | null = null;

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
        .eq("id", id)
        .maybeSingle();

      if (data && !error) {
        imovel = data as Imovel;
      }
    } catch (err) {
      console.warn("Erro ao buscar imóvel para edição:", err);
    }
  }

  // Fallback nos dados DEMO para testes locais
  if (!imovel) {
    imovel = DEMO_IMOVEIS.find((i) => i.id === id) || null;
  }

  if (!imovel) {
    notFound();
  }

  return <ImovelForm imovelInicial={imovel} />;
}
