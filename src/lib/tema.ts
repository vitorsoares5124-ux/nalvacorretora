import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import type { TemaSite } from "@/lib/supabase/types";

// Tema global definido pela corretora no painel admin.
// É lido a cada request e cacheado por request (React cache), então layout,
// Hero, Sobre e demais componentes compartilham uma única consulta.
export const getTema = cache(async (): Promise<TemaSite> => {
  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (!hasSupabaseConfig) return "dark";

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("site_settings")
      .select("tema_padrao")
      .eq("id", 1)
      .single();

    return data?.tema_padrao === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
});
