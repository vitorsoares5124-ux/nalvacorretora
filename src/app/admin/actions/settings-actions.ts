"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { TemaSite } from "@/lib/supabase/types";

// Atualiza o tema global do site (linha única em site_settings).
// Restrito a usuários autenticados via RLS + verificação de sessão.
export async function atualizarTemaSite(tema: TemaSite) {
  if (tema !== "dark" && tema !== "light") {
    return { success: false, error: "Tema inválido." };
  }

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { success: false, error: "Acesso não autorizado. Faça login novamente." };
  }

  const { error } = await supabase
    .from("site_settings")
    .upsert({ id: 1, tema_padrao: tema }, { onConflict: "id" });

  if (error) {
    return { success: false, error: error.message };
  }

  // Aplica o novo tema a todas as rotas (o tema vive no layout raiz)
  revalidatePath("/", "layout");

  return { success: true, tema };
}
