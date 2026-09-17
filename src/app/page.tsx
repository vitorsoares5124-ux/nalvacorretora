import { headers } from "next/headers";
import { Hero } from "@/components/home/Hero";
import { ImoveisDestaque } from "@/components/home/ImoveisDestaque";
import { Sobre } from "@/components/home/Sobre";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import type { Imovel } from "@/lib/supabase/types";

// Revalidação a cada 60 segundos (ISR)
export const revalidate = 60;

const ITENS_POR_PAGINA_DESKTOP = 12;
const ITENS_POR_PAGINA_MOBILE = 7;

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function HomePage({ searchParams }: HomeProps) {
  const params = await searchParams;
  const paginaAtual = Math.max(1, Number(params.page) || 1);

  // O servidor não conhece a largura da tela: usa o user-agent para
  // escolher quantos destaques exibir por página (12 no PC, 7 no mobile).
  const userAgent = (await headers()).get("user-agent") ?? "";
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
  const itensPorPagina = isMobile
    ? ITENS_POR_PAGINA_MOBILE
    : ITENS_POR_PAGINA_DESKTOP;
  const offset = (paginaAtual - 1) * itensPorPagina;

  let imoveis: Imovel[] = [];
  let totalCount = 0;
  let isDemo = false;

  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (hasSupabaseConfig) {
    try {
      const supabase = await createClient();
      const { data, count, error } = await supabase
        .from("imoveis")
        .select(
          `
          *,
          imoveis_imagens!inner (*)
        `,
          { count: "exact" }
        )
        .eq("destaque", true)
        .eq("status", "disponivel")
        .order("created_at", { ascending: false })
        .range(offset, offset + itensPorPagina - 1);

      if (error) {
        console.warn("Aviso ao buscar imóveis do Supabase:", error.message);
      } else if (count && count > 0) {
        imoveis = (data as Imovel[]) || [];
        totalCount = count;
      }
    } catch (err) {
      console.warn("Exceção ao conectar no Supabase:", err);
    }
  }

  // Fallback para DEMO quando não há Supabase configurado ou nenhum destaque.
  if (totalCount === 0) {
    totalCount = DEMO_IMOVEIS.length;
    imoveis = DEMO_IMOVEIS.slice(offset, offset + itensPorPagina);
    isDemo = true;
  }

  const totalPaginas = Math.ceil(totalCount / itensPorPagina);

  return (
    <>
      <Hero />
      <ImoveisDestaque
        imoveis={imoveis}
        isDemo={isDemo}
        paginaAtual={paginaAtual}
        totalPaginas={totalPaginas}
      />
      <Sobre />
    </>
  );
}
