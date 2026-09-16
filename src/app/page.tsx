import { Hero } from "@/components/home/Hero";
import { ImoveisDestaque } from "@/components/home/ImoveisDestaque";
import { Sobre } from "@/components/home/Sobre";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import type { Imovel } from "@/lib/supabase/types";

// Revalidação a cada 60 segundos (ISR)
export const revalidate = 60;

export default async function HomePage() {
  let imoveis: Imovel[] = [];
  let isDemo = false;

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
        .eq("destaque", true)
        .eq("status", "disponivel")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Aviso ao buscar imóveis do Supabase:", error.message);
        imoveis = DEMO_IMOVEIS;
        isDemo = true;
      } else if (data && data.length > 0) {
        imoveis = data as Imovel[];
        isDemo = false;
      } else {
        // Tabela ainda vazia
        imoveis = DEMO_IMOVEIS;
        isDemo = true;
      }
    } catch (err) {
      console.warn("Exceção ao conectar no Supabase:", err);
      imoveis = DEMO_IMOVEIS;
      isDemo = true;
    }
  } else {
    // Variáveis de ambiente ainda não preenchidas
    imoveis = DEMO_IMOVEIS;
    isDemo = true;
  }

  return (
    <>
      <Hero />
      <ImoveisDestaque imoveis={imoveis} isDemo={isDemo} />
      <Sobre />
    </>
  );
}
