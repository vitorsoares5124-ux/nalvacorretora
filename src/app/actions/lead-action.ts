"use server";

import { createClient } from "@/lib/supabase/server";

export interface RegistrarLeadParams {
  imovel_id?: string | null;
  codigo_imovel?: string;
  titulo_imovel?: string;
  origem: string;
}

export async function registrarLeadWhatsApp(params: RegistrarLeadParams) {
  try {
    const hasSupabaseConfig =
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
      Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    if (!hasSupabaseConfig) {
      // Em modo local/demonstração, registra no log do servidor
      console.log("[LEAD FIRE-AND-FORGET] Lead registrado localmente:", params);
      return { success: true, mode: "demo" };
    }

    const supabase = await createClient();

    const payload = {
      imovel_id: params.imovel_id || null,
      nome: "Interessado via WhatsApp",
      telefone: "Pendente via WhatsApp",
      mensagem: `Interesse demonstrado no imóvel ${params.codigo_imovel || ""} - ${params.titulo_imovel || ""}`,
      origem: params.origem || "whatsapp_detalhe",
    };

    const { error } = await supabase.from("leads").insert(payload as any);

    if (error) {
      console.error("[LEAD ERROR] Erro ao gravar lead no Supabase:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("[LEAD EXCEPTION] Falha ao registrar lead:", err?.message || err);
    return { success: false, error: err?.message };
  }
}
