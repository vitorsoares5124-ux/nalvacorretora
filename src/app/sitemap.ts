import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";
import { DEMO_IMOVEIS } from "@/lib/demo-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const rotasEstaticas: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/imoveis`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const temSupabase =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const imoveisDisponiveis = new Set(
    DEMO_IMOVEIS.filter((i) => i.status === "disponivel").map((i) => i.id)
  );

  const itemPorId = new Map<string, Date>();

  if (temSupabase) {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { data } = await supabase
        .from("imoveis")
        .select("id, status, updated_at")
        .eq("status", "disponivel");

      data?.forEach((row) => {
        imoveisDisponiveis.add(row.id);
        itemPorId.set(row.id, new Date(row.updated_at));
      });
    } catch (err) {
      console.warn("Erro ao buscar imóveis para o sitemap:", err);
    }
  }

  const rotasImoveis: MetadataRoute.Sitemap = Array.from(
    imoveisDisponiveis
  ).map((id) => ({
    url: `${siteUrl}/imoveis/${encodeURIComponent(id)}`,
    lastModified: itemPorId.get(id) ?? now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...rotasEstaticas, ...rotasImoveis];
}