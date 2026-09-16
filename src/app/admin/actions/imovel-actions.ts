"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { Imovel, ImovelStatus } from "@/lib/supabase/types";

// Helper interno para garantir sessão autenticada em toda ação administrativa (Correction 2)
async function requireAuth() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Acesso não autorizado. É necessário estar autenticado.");
  }

  return { supabase: supabase as any, user };
}

// 1. Criar Imóvel (Etapa 1: Salva o registro para obter o ID gerado - Correction 4)
export async function criarImovel(dados: {
  codigo: string;
  titulo: string;
  descricao?: string;
  finalidade: "venda" | "aluguel" | "temporada";
  tipo: string;
  status: ImovelStatus;
  preco: number;
  preco_condominio?: number;
  preco_iptu?: number;
  aceita_financiamento: boolean;
  quartos: number;
  suites: number;
  banheiros: number;
  vagas: number;
  area_util: number;
  area_total: number;
  cep?: string;
  rua?: string;
  numero?: string;
  bairro: string;
  cidade: string;
  uf: string;
  latitude?: number | null;
  longitude?: number | null;
  caracteristicas: string[];
  destaque: boolean;
  is_demo: boolean;
}) {
  const { supabase } = await requireAuth();

  const codigoLimpo = dados.codigo.trim().toUpperCase();

  // Validação de unicidade do código
  const { data: existente } = await supabase
    .from("imoveis")
    .select("id")
    .eq("codigo", codigoLimpo)
    .maybeSingle();

  if (existente) {
    return {
      success: false,
      error: `O código "${codigoLimpo}" já está em uso por outro imóvel. Escolha um código único.`,
    };
  }

  // Validações numéricas (não aceita negativos)
  if (dados.preco <= 0) {
    return { success: false, error: "O preço deve ser maior que zero." };
  }
  if (
    dados.quartos < 0 ||
    dados.suites < 0 ||
    dados.banheiros < 0 ||
    dados.vagas < 0 ||
    dados.area_util < 0
  ) {
    return { success: false, error: "Campos numéricos não podem ser negativos." };
  }

  const payload = {
    ...dados,
    codigo: codigoLimpo,
    preco_condominio: dados.preco_condominio || 0,
    preco_iptu: dados.preco_iptu || 0,
    area_total: dados.area_total || dados.area_util,
  };

  const { data: novoImovel, error: erroInsert } = await supabase
    .from("imoveis")
    .insert(payload as any)
    .select("id, codigo")
    .single();

  if (erroInsert || !novoImovel) {
    return {
      success: false,
      error: erroInsert?.message || "Erro ao inserir imóvel no banco de dados.",
    };
  }

  revalidatePath("/admin/imoveis");
  revalidatePath("/imoveis");
  revalidatePath("/");

  return { success: true, id: (novoImovel as any).id, codigo: (novoImovel as any).codigo };
}

// 2. Atualizar Imóvel existente
export async function atualizarImovel(
  id: string,
  dados: {
    codigo: string;
    titulo: string;
    descricao?: string;
    finalidade: "venda" | "aluguel" | "temporada";
    tipo: string;
    status: ImovelStatus;
    preco: number;
    preco_condominio?: number;
    preco_iptu?: number;
    aceita_financiamento: boolean;
    quartos: number;
    suites: number;
    banheiros: number;
    vagas: number;
    area_util: number;
    area_total: number;
    cep?: string;
    rua?: string;
    numero?: string;
    bairro: string;
    cidade: string;
    uf: string;
    latitude?: number | null;
    longitude?: number | null;
    caracteristicas: string[];
    destaque: boolean;
    is_demo: boolean;
  }
) {
  const { supabase } = await requireAuth();

  const codigoLimpo = dados.codigo.trim().toUpperCase();

  // Validação de unicidade do código (excluindo este próprio id)
  const { data: existente } = await supabase
    .from("imoveis")
    .select("id")
    .eq("codigo", codigoLimpo)
    .neq("id", id)
    .maybeSingle();

  if (existente) {
    return {
      success: false,
      error: `O código "${codigoLimpo}" já está em uso por outro imóvel cadastrado.`,
    };
  }

  if (dados.preco <= 0) {
    return { success: false, error: "O preço deve ser maior que zero." };
  }

  const payload = {
    ...dados,
    codigo: codigoLimpo,
    preco_condominio: dados.preco_condominio || 0,
    preco_iptu: dados.preco_iptu || 0,
    area_total: dados.area_total || dados.area_util,
  };

  const { error: erroUpdate } = await supabase
    .from("imoveis")
    .update(payload as any)
    .eq("id", id);

  if (erroUpdate) {
    return { success: false, error: erroUpdate.message };
  }

  revalidatePath("/admin/imoveis");
  revalidatePath(`/admin/imoveis/${id}/editar`);
  revalidatePath(`/imoveis/${codigoLimpo}`);
  revalidatePath("/imoveis");
  revalidatePath("/");

  return { success: true };
}

// 3. Atualizar Status Rápido direto da linha da tabela
export async function atualizarStatusImovel(id: string, novoStatus: ImovelStatus) {
  const { supabase } = await requireAuth();

  const { error } = await supabase
    .from("imoveis")
    .update({ status: novoStatus })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/admin/imoveis");
  revalidatePath("/admin");
  revalidatePath("/imoveis");
  revalidatePath("/");

  return { success: true };
}

// 4. Excluir Imóvel (apaga pasta inteira de fotos no Storage com .list() + .remove() - Correction 3)
export async function excluirImovel(id: string) {
  const { supabase } = await requireAuth();

  try {
    // 1. Listar todos os arquivos da pasta {imovel_id} no Storage
    const { data: arquivosPasta } = await supabase.storage
      .from("imoveis")
      .list(id);

    if (arquivosPasta && arquivosPasta.length > 0) {
      // Monta os paths com prefixo da pasta: "{imovel_id}/{arquivo}"
      const pathsParaRemover = arquivosPasta.map((arq: any) => `${id}/${arq.name}`);
      await supabase.storage.from("imoveis").remove(pathsParaRemover);
    }

    // 2. Excluir o imóvel (cascade no banco remove imagens vinculadas)
    const { error: erroDelete } = await supabase
      .from("imoveis")
      .delete()
      .eq("id", id);

    if (erroDelete) {
      return { success: false, error: erroDelete.message };
    }

    revalidatePath("/admin/imoveis");
    revalidatePath("/admin");
    revalidatePath("/imoveis");
    revalidatePath("/");

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Falha ao excluir imóvel." };
  }
}

// 5. Vincular Foto ao Imóvel
export async function vincularFotoImovel(params: {
  imovel_id: string;
  url: string;
  ordem: number;
  capa: boolean;
}) {
  const { supabase } = await requireAuth();

  // Se esta foto for marcada como capa, remove o status de capa das demais
  if (params.capa) {
    await supabase
      .from("imoveis_imagens")
      .update({ capa: false })
      .eq("imovel_id", params.imovel_id);
  }

  const { data, error } = await supabase
    .from("imoveis_imagens")
    .insert({
      imovel_id: params.imovel_id,
      url: params.url,
      ordem: params.ordem,
      capa: params.capa,
    })
    .select("id")
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath(`/admin/imoveis/${params.imovel_id}/editar`);
  return { success: true, id: (data as any)?.id };
}

// 6. Atualizar Ordem e Capa das Fotos
export async function atualizarOrdemImagens(
  imovel_id: string,
  imagens: Array<{ id: string; ordem: number; capa: boolean }>
) {
  const { supabase } = await requireAuth();

  for (const img of imagens) {
    await supabase
      .from("imoveis_imagens")
      .update({ ordem: img.ordem, capa: img.capa })
      .eq("id", img.id);
  }

  revalidatePath(`/admin/imoveis/${imovel_id}/editar`);
  return { success: true };
}

// 7. Excluir Foto Individual (Storage e Banco)
export async function excluirFotoStorage(params: {
  imagem_id: string;
  imovel_id: string;
  storagePath: string; // Ex: "a111.../minha-foto.jpg"
}) {
  const { supabase } = await requireAuth();

  // 1. Remover do Storage se houver path válido
  if (params.storagePath) {
    await supabase.storage.from("imoveis").remove([params.storagePath]);
  }

  // 2. Remover da tabela imoveis_imagens
  const { error } = await supabase
    .from("imoveis_imagens")
    .delete()
    .eq("id", params.imagem_id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath(`/admin/imoveis/${params.imovel_id}/editar`);
  return { success: true };
}
