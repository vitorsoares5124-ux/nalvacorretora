"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Save,
  ArrowLeft,
  Upload,
  Trash2,
  Star,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  CheckCircle2,
  Plus,
  X,
  Sparkles,
  Images,
} from "lucide-react";
import {
  criarImovel,
  atualizarImovel,
  vincularFotoImovel,
  atualizarOrdemImagens,
  excluirFotoStorage,
} from "@/app/admin/actions/imovel-actions";
import { createClient } from "@/lib/supabase/client";
import type { Imovel, ImovelFinalidade, ImovelStatus, ImovelImagem } from "@/lib/supabase/types";

interface ImovelFormProps {
  imovelInicial?: Imovel | null;
}

const SUGESTOES_CARACTERISTICAS = [
  "Piscina Privativa",
  "Piscina Aquecida",
  "Varanda Gourmet",
  "Pé-direito Duplo",
  "Automação Residencial",
  "Segurança 24h",
  "Borda Infinita",
  "Lareira",
  "Home Cinema",
  "Ar Condicionado",
  "Elevador Privativo",
  "Acabamento em Mármore",
  "Churrasqueira",
  "Quadra de Tênis",
  "Vista Panorâmica",
];

export function ImovelForm({ imovelInicial }: ImovelFormProps) {
  const router = useRouter();
  const isEdicao = Boolean(imovelInicial?.id);

  // ID do imóvel: se for edição já existe; se for novo, gerado após etapa 1 (Correction 4)
  const [imovelId, setImovelId] = useState<string | null>(imovelInicial?.id || null);

  // Estados dos Campos
  const [codigo, setCodigo] = useState(imovelInicial?.codigo || "");
  const [titulo, setTitulo] = useState(imovelInicial?.titulo || "");
  const [descricao, setDescricao] = useState(imovelInicial?.descricao || "");
  const [finalidade, setFinalidade] = useState<ImovelFinalidade>(
    imovelInicial?.finalidade || "venda"
  );
  const [tipo, setTipo] = useState(imovelInicial?.tipo || "Apartamento");
  const [status, setStatus] = useState<ImovelStatus>(
    imovelInicial?.status || "disponivel"
  );
  const [preco, setPreco] = useState(imovelInicial?.preco?.toString() || "");
  const [precoCondominio, setPrecoCondominio] = useState(
    imovelInicial?.preco_condominio?.toString() || ""
  );
  const [precoIptu, setPrecoIptu] = useState(
    imovelInicial?.preco_iptu?.toString() || ""
  );
  const [aceitaFinanciamento, setAceitaFinanciamento] = useState(
    imovelInicial?.aceita_financiamento ?? true
  );

  // Ficha técnica
  const [quartos, setQuartos] = useState(imovelInicial?.quartos?.toString() || "3");
  const [suites, setSuites] = useState(imovelInicial?.suites?.toString() || "1");
  const [banheiros, setBanheiros] = useState(imovelInicial?.banheiros?.toString() || "2");
  const [vagas, setVagas] = useState(imovelInicial?.vagas?.toString() || "2");
  const [areaUtil, setAreaUtil] = useState(imovelInicial?.area_util?.toString() || "");
  const [areaTotal, setAreaTotal] = useState(imovelInicial?.area_total?.toString() || "");

  // Endereço
  const [cep, setCep] = useState(imovelInicial?.cep || "");
  const [rua, setRua] = useState(imovelInicial?.rua || "");
  const [numero, setNumero] = useState(imovelInicial?.numero || "");
  const [bairro, setBairro] = useState(imovelInicial?.bairro || "");
  const [cidade, setCidade] = useState(imovelInicial?.cidade || "São Paulo");
  const [uf, setUf] = useState(imovelInicial?.uf || "SP");
  const [latitude, setLatitude] = useState(imovelInicial?.latitude?.toString() || "");
  const [longitude, setLongitude] = useState(imovelInicial?.longitude?.toString() || "");

  // Diferenciais
  const [caracteristicas, setCaracteristicas] = useState<string[]>(
    imovelInicial?.caracteristicas || []
  );
  const [novaTag, setNovaTag] = useState("");

  // Configurações
  const [destaque, setDestaque] = useState(imovelInicial?.destaque ?? false);
  const [isDemo, setIsDemo] = useState(imovelInicial?.is_demo ?? false);

  // Gestão de Imagens
  const [imagens, setImagens] = useState<ImovelImagem[]>(
    imovelInicial?.imoveis_imagens || []
  );
  const [fazendoUpload, setFazendoUpload] = useState(false);

  // Estados de Envio e Feedback
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [sucesso, setSucesso] = useState<string | null>(null);

  // Adicionar caracteristica
  const handleAdicionarTag = (tag: string) => {
    const limpa = tag.trim();
    if (limpa && !caracteristicas.includes(limpa)) {
      setCaracteristicas([...caracteristicas, limpa]);
      setNovaTag("");
    }
  };

  const handleRemoverTag = (tag: string) => {
    setCaracteristicas(caracteristicas.filter((t) => t !== tag));
  };

  // Salvar Dados do Imóvel (Etapa 1)
  const handleSalvarImovel = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setSucesso(null);
    setSalvando(true);

    const precoNum = Number(preco);
    if (!precoNum || precoNum <= 0) {
      setErro("Informe um preço válido maior que zero.");
      setSalvando(false);
      return;
    }

    if (!codigo.trim()) {
      setErro("O código do imóvel é obrigatório.");
      setSalvando(false);
      return;
    }

    if (!titulo.trim()) {
      setErro("O título do imóvel é obrigatório.");
      setSalvando(false);
      return;
    }

    const payload = {
      codigo: codigo.trim(),
      titulo: titulo.trim(),
      descricao: descricao.trim() || undefined,
      finalidade,
      tipo,
      status,
      preco: precoNum,
      preco_condominio: Number(precoCondominio) || 0,
      preco_iptu: Number(precoIptu) || 0,
      aceita_financiamento: aceitaFinanciamento,
      quartos: Math.max(0, Number(quartos) || 0),
      suites: Math.max(0, Number(suites) || 0),
      banheiros: Math.max(0, Number(banheiros) || 0),
      vagas: Math.max(0, Number(vagas) || 0),
      area_util: Math.max(0, Number(areaUtil) || 0),
      area_total: Math.max(0, Number(areaTotal) || Number(areaUtil) || 0),
      cep: cep.trim() || undefined,
      rua: rua.trim() || undefined,
      numero: numero.trim() || undefined,
      bairro: bairro.trim(),
      cidade: cidade.trim(),
      uf: uf.trim().toUpperCase(),
      latitude: latitude ? Number(latitude) : null,
      longitude: longitude ? Number(longitude) : null,
      caracteristicas,
      destaque,
      is_demo: isDemo,
    };

    if (isEdicao && imovelId) {
      const res = await atualizarImovel(imovelId, payload);
      if (!res.success) {
        setErro(res.error || "Erro ao atualizar imóvel.");
        setSalvando(false);
        return;
      }
      setSucesso("Imóvel atualizado com sucesso!");
      setSalvando(false);
    } else {
      // Criação nova (Etapa 1: gera o id e habilita etapa de fotos - Correction 4)
      const res = await criarImovel(payload);
      if (!res.success || !res.id) {
        setErro(res.error || "Erro ao criar imóvel.");
        setSalvando(false);
        return;
      }

      setImovelId(res.id);
      setSucesso("Dados do imóvel salvos com sucesso! Agora você pode adicionar as fotos abaixo.");
      setSalvando(false);
      // Atualiza URL para o modo de edição para persistir o id
      window.history.replaceState(null, "", `/admin/imoveis/${res.id}/editar`);
    }
  };

  // Upload Múltiplo de Fotos (Salva em pasta {imovel_id}/{arquivo} - Correction 3)
  const handleUploadFotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!imovelId) {
      setErro("Salve os dados do imóvel antes de fazer upload de fotos.");
      return;
    }

    const files = e.target.files;
    if (!files || files.length === 0) return;

    setFazendoUpload(true);
    setErro(null);

    const supabase = createClient();
    const novasImagensAdicionadas: ImovelImagem[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const extensao = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const nomeLimpo = file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9_-]/g, "_");
        const timestamp = Date.now();
        // Caminho organizado na pasta do imóvel: {imovel_id}/{timestamp}-{nome}.{ext} (Correction 3)
        const storagePath = `${imovelId}/${timestamp}-${nomeLimpo}.${extensao}`;

        const { error: erroUpload } = await supabase.storage
          .from("imoveis")
          .upload(storagePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (erroUpload) {
          console.error("Erro no upload para o Storage:", erroUpload.message);
          continue;
        }

        // URL pública
        const { data: publicUrlData } = supabase.storage
          .from("imoveis")
          .getPublicUrl(storagePath);

        const novaOrdem = imagens.length + novasImagensAdicionadas.length + 1;
        const ehCapa = imagens.length === 0 && novasImagensAdicionadas.length === 0;

        const resVinculo = await vincularFotoImovel({
          imovel_id: imovelId,
          url: publicUrlData.publicUrl,
          ordem: novaOrdem,
          capa: ehCapa,
        });

        if (resVinculo.success && resVinculo.id) {
          novasImagensAdicionadas.push({
            id: resVinculo.id,
            imovel_id: imovelId,
            url: publicUrlData.publicUrl,
            ordem: novaOrdem,
            capa: ehCapa,
          });
        }
      }

      setImagens([...imagens, ...novasImagensAdicionadas]);
      setSucesso(`${novasImagensAdicionadas.length} foto(s) enviada(s) com sucesso!`);
    } catch (err: any) {
      setErro("Falha durante o upload de fotos.");
    } finally {
      setFazendoUpload(false);
      e.target.value = ""; // Reset input
    }
  };

  // Definir Foto como Capa
  const handleDefinirCapa = async (imagemId: string) => {
    if (!imovelId) return;
    const atualizadas = imagens.map((img) => ({
      ...img,
      capa: img.id === imagemId,
    }));
    setImagens(atualizadas);
    await atualizarOrdemImagens(
      imovelId,
      atualizadas.map((i) => ({ id: i.id, ordem: i.ordem, capa: i.capa }))
    );
  };

  // Mudar Ordem (Subir / Descer)
  const handleMoverFoto = async (index: number, direcao: "cima" | "baixo") => {
    if (!imovelId) return;
    const novoIndex = direcao === "cima" ? index - 1 : index + 1;
    if (novoIndex < 0 || novoIndex >= imagens.length) return;

    const copia = [...imagens];
    const item = copia.splice(index, 1)[0];
    copia.splice(novoIndex, 0, item);

    const reordenadas = copia.map((img, idx) => ({
      ...img,
      ordem: idx + 1,
    }));

    setImagens(reordenadas);
    await atualizarOrdemImagens(
      imovelId,
      reordenadas.map((i) => ({ id: i.id, ordem: i.ordem, capa: i.capa }))
    );
  };

  // Excluir Foto Individual
  const handleExcluirFoto = async (img: ImovelImagem) => {
    if (!imovelId) return;
    const confirmar = confirm("Deseja realmente remover esta foto?");
    if (!confirmar) return;

    // Extrair storagePath da URL se for do bucket imoveis
    let storagePath = "";
    if (img.url.includes("/storage/v1/object/public/imoveis/")) {
      storagePath = img.url.split("/storage/v1/object/public/imoveis/")[1] || "";
    }

    const res = await excluirFotoStorage({
      imagem_id: img.id,
      imovel_id: imovelId,
      storagePath,
    });

    if (res.success) {
      setImagens(imagens.filter((i) => i.id !== img.id));
    } else {
      alert("Erro ao remover foto: " + res.error);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl pb-16">
      {/* Barra de Ações Superior */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A2A2A]">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/imoveis")}
            className="p-2 rounded-xl border border-[#2A2A2A] bg-[#141414] text-[#A3A3A3] hover:text-white hover:border-[#D4AF37] transition-colors"
            title="Voltar para a listagem"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#F5F5F0]">
              {isEdicao ? `Editar Imóvel (${codigo})` : "Cadastrar Novo Imóvel"}
            </h1>
            <p className="text-xs text-[#A3A3A3]">
              {isEdicao
                ? "Atualize as informações cadastrais e o álbum de fotos do imóvel."
                : "Preencha os dados principais (Etapa 1) e em seguida faça o upload das fotos (Etapa 2)."}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleSalvarImovel}
            disabled={salvando}
            className="flex items-center gap-2 rounded-xl gold-gradient-btn px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-md shadow-[#D4AF37]/20 active:scale-95 disabled:opacity-50 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>{salvando ? "Salvando..." : "Salvar Imóvel"}</span>
          </button>
        </div>
      </div>

      {/* Alertas de Erro e Sucesso */}
      {erro && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{erro}</span>
        </div>
      )}

      {sucesso && (
        <div className="flex items-start gap-2.5 rounded-xl border border-[#10B981]/30 bg-[#10B981]/10 p-4 text-xs text-[#10B981]">
          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{sucesso}</span>
        </div>
      )}

      {/* ETAPA 1: Dados Cadastrais */}
      <form onSubmit={handleSalvarImovel} className="space-y-8">
        {/* Bloco 1: Identificação Básica */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            1. Identificação Básica
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Código do Imóvel *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: RAI-201"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs font-mono font-bold text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Finalidade *
              </label>
              <select
                value={finalidade}
                onChange={(e) => setFinalidade(e.target.value as ImovelFinalidade)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="venda">Venda</option>
                <option value="aluguel">Aluguel</option>
                <option value="temporada">Temporada</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Tipo de Imóvel *
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="Apartamento">Apartamento</option>
                <option value="Cobertura">Cobertura</option>
                <option value="Casa em Condomínio">Casa em Condomínio</option>
                <option value="Casa">Casa</option>
                <option value="Terreno">Terreno</option>
                <option value="Comercial">Comercial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Título do Anúncio *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Cobertura Triplex com Vista 360°"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Status Atual *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ImovelStatus)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="disponivel">Disponível (Público)</option>
                <option value="reservado">Reservado</option>
                <option value="vendido">Vendido</option>
                <option value="alugado">Alugado</option>
                <option value="indisponivel">Indisponível</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[#A3A3A3] font-medium">
              Descrição Completa
            </label>
            <textarea
              rows={4}
              placeholder="Descreva detalhadamente os diferenciais arquitetônicos, acabamentos e comodidades..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-3.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        {/* Bloco 2: Valores & Financiamento */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            2. Valores & Condições
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Preço de Aquisição / Aluguel (R$) *
              </label>
              <input
                type="number"
                required
                min="1"
                placeholder="3500000"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs font-bold text-[#D4AF37] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Condomínio Mensal (R$)
              </label>
              <input
                type="number"
                min="0"
                placeholder="2500"
                value={precoCondominio}
                onChange={(e) => setPrecoCondominio(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                IPTU Mensal (R$)
              </label>
              <input
                type="number"
                min="0"
                placeholder="1200"
                value={precoIptu}
                onChange={(e) => setPrecoIptu(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={aceitaFinanciamento}
                onChange={(e) => setAceitaFinanciamento(e.target.checked)}
                className="h-4 w-4 rounded accent-[#D4AF37]"
              />
              <span className="text-xs text-[#F5F5F0]">
                Aceita financiamento bancário e recursos de consórcio/FGTS
              </span>
            </label>
          </div>
        </div>

        {/* Bloco 3: Ficha Técnica */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            3. Ficha Técnica & Metragens
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Quartos</label>
              <input
                type="number"
                min="0"
                value={quartos}
                onChange={(e) => setQuartos(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Suítes</label>
              <input
                type="number"
                min="0"
                value={suites}
                onChange={(e) => setSuites(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Banheiros</label>
              <input
                type="number"
                min="0"
                value={banheiros}
                onChange={(e) => setBanheiros(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Vagas</label>
              <input
                type="number"
                min="0"
                value={vagas}
                onChange={(e) => setVagas(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Área Útil / Construída (m²) *
              </label>
              <input
                type="number"
                min="0"
                required
                placeholder="280"
                value={areaUtil}
                onChange={(e) => setAreaUtil(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Área Total / Terreno (m²)
              </label>
              <input
                type="number"
                min="0"
                placeholder="350"
                value={areaTotal}
                onChange={(e) => setAreaTotal(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Bloco 4: Localização */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            4. Localização & Endereço
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">CEP</label>
              <input
                type="text"
                placeholder="01401-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="col-span-2 space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Rua (Oculta na Vitrine)
              </label>
              <input
                type="text"
                placeholder="Alameda Lorena"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Número
              </label>
              <input
                type="text"
                placeholder="1500"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Bairro *</label>
              <input
                type="text"
                required
                placeholder="Jardins"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">Cidade *</label>
              <input
                type="text"
                required
                placeholder="São Paulo"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">UF *</label>
              <input
                type="text"
                required
                maxLength={2}
                placeholder="SP"
                value={uf}
                onChange={(e) => setUf(e.target.value.toUpperCase())}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Latitude (Mapa)
              </label>
              <input
                type="text"
                placeholder="-23.5670000"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs font-mono text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#A3A3A3] font-medium">
                Longitude (Mapa)
              </label>
              <input
                type="text"
                placeholder="-46.6650000"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2.5 text-xs font-mono text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Bloco 5: Características & Comodidades */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            5. Características & Comodidades
          </h2>

          {/* Tags Atuais */}
          <div className="flex flex-wrap gap-2">
            {caracteristicas.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-medium text-[#EAD2A8]"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => handleRemoverTag(tag)}
                  className="hover:text-white"
                  title="Remover tag"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>

          {/* Input de nova tag */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Digite uma nova comodidade e clique em Adicionar..."
              value={novaTag}
              onChange={(e) => setNovaTag(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAdicionarTag(novaTag);
                }
              }}
              className="flex-1 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3.5 py-2 text-xs text-[#F5F5F0] focus:border-[#D4AF37] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleAdicionarTag(novaTag)}
              className="rounded-xl bg-[#222222] border border-[#333333] px-4 py-2 text-xs font-semibold text-[#F5F5F0] hover:border-[#D4AF37] hover:text-[#EAD2A8]"
            >
              Adicionar
            </button>
          </div>

          {/* Sugestões Rápidas */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[11px] text-[#737373]">Sugestões frequentes:</span>
            <div className="flex flex-wrap gap-1.5">
              {SUGESTOES_CARACTERISTICAS.map((sugestao) => (
                <button
                  key={sugestao}
                  type="button"
                  onClick={() => handleAdicionarTag(sugestao)}
                  className="rounded-lg border border-[#2A2A2A] bg-[#161616] px-2.5 py-1 text-[11px] text-[#A3A3A3] hover:border-[#444] hover:text-white"
                >
                  + {sugestao}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 6: Visibilidade e Demonstração */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            6. Configurações de Exibição
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] cursor-pointer">
              <input
                type="checkbox"
                checked={destaque}
                onChange={(e) => setDestaque(e.target.checked)}
                className="h-4 w-4 rounded accent-[#D4AF37]"
              />
              <div>
                <span className="block text-xs font-semibold text-[#F5F5F0]">
                  Destacar na Página Inicial
                </span>
                <span className="text-[11px] text-[#737373]">
                  Exibe o imóvel na vitrine nobre da Home
                </span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] cursor-pointer">
              <input
                type="checkbox"
                checked={isDemo}
                onChange={(e) => setIsDemo(e.target.checked)}
                className="h-4 w-4 rounded accent-[#D4AF37]"
              />
              <div>
                <span className="block text-xs font-semibold text-[#F5F5F0]">
                  Marcar como Demonstração [DEMO]
                </span>
                <span className="text-[11px] text-[#737373]">
                  Facilita filtrar ou excluir testes futuros
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Botão Salvar Etapa 1 */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={salvando}
            className="flex items-center gap-2 rounded-xl gold-gradient-btn px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-lg shadow-[#D4AF37]/20 active:scale-95 disabled:opacity-50 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>{salvando ? "Salvando Dados..." : "Salvar Dados Cadastrais"}</span>
          </button>
        </div>
      </form>

      {/* ETAPA 2: Upload e Gestão de Fotos (Correction 4: Requer que o imóvel já exista) */}
      <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2A2A2A] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <Images className="h-4 w-4" />
              <span>Etapa 2: Álbum de Fotos</span>
            </div>
            <p className="text-xs text-[#A3A3A3] mt-0.5">
              Faça upload de fotos em alta resolução. A foto marcada com estrela dourada será a capa principal.
            </p>
          </div>

          {imovelId && (
            <label className="inline-flex items-center gap-2 rounded-xl bg-[#222222] border border-[#333333] px-4 py-2.5 text-xs font-semibold text-[#F5F5F0] hover:border-[#D4AF37] hover:text-[#EAD2A8] cursor-pointer active:scale-95 transition-all">
              <Upload className="h-4 w-4 text-[#D4AF37]" />
              <span>{fazendoUpload ? "Enviando..." : "Adicionar Fotos"}</span>
              <input
                type="file"
                multiple
                accept="image/*"
                disabled={fazendoUpload}
                onChange={handleUploadFotos}
                className="hidden"
              />
            </label>
          )}
        </div>

        {!imovelId ? (
          <div className="rounded-xl border border-dashed border-[#333333] p-10 text-center space-y-2">
            <Upload className="mx-auto h-8 w-8 text-[#555]" />
            <p className="text-xs font-semibold text-[#A3A3A3]">
              Salve os dados cadastrais acima para habilitar o upload de fotos.
            </p>
            <p className="text-[11px] text-[#737373]">
              O Supabase Storage organiza as imagens em pastas com o identificador único do imóvel.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {imagens.length === 0 ? (
              <div className="rounded-xl border border-dashed border-[#333333] p-8 text-center space-y-2">
                <Images className="mx-auto h-8 w-8 text-[#555]" />
                <p className="text-xs text-[#A3A3A3]">
                  Nenhuma foto cadastrada para este imóvel ainda.
                </p>
                <p className="text-[11px] text-[#737373]">
                  Clique em &quot;Adicionar Fotos&quot; acima para selecionar uma ou mais imagens.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {imagens.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`group relative aspect-[16/10] overflow-hidden rounded-xl border bg-[#1E1E1E] transition-all ${
                      img.capa
                        ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30"
                        : "border-[#2A2A2A] hover:border-[#444]"
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={`Foto ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Badge de Capa */}
                    {img.capa && (
                      <div className="absolute top-2 left-2 rounded-md bg-[#D4AF37] px-2 py-0.5 text-[10px] font-bold text-[#0A0A0A] shadow-md flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Capa</span>
                      </div>
                    )}

                    {/* Número de Ordem */}
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-mono text-[#A3A3A3] border border-[#333]">
                      #{idx + 1}
                    </div>

                    {/* Overlay de Ações */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                      {!img.capa && (
                        <button
                          type="button"
                          onClick={() => handleDefinirCapa(img.id)}
                          className="p-1.5 rounded-lg bg-[#141414] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                          title="Definir como foto de capa"
                        >
                          <Star className="h-4 w-4" />
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => handleMoverFoto(idx, "cima")}
                        className="p-1.5 rounded-lg bg-[#141414] text-[#A3A3A3] hover:text-white disabled:opacity-25 transition-colors"
                        title="Mover para esquerda/cima"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        disabled={idx === imagens.length - 1}
                        onClick={() => handleMoverFoto(idx, "baixo")}
                        className="p-1.5 rounded-lg bg-[#141414] text-[#A3A3A3] hover:text-white disabled:opacity-25 transition-colors"
                        title="Mover para direita/baixo"
                      >
                        <ArrowUp className="h-4 w-4 rotate-90" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleExcluirFoto(img)}
                        className="p-1.5 rounded-lg bg-[#141414] text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        title="Excluir foto"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
