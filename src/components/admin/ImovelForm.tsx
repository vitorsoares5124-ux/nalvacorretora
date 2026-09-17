"use client";

import { useEffect, useRef, useState } from "react";
import imageCompression from "browser-image-compression";
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
  Search,
  MapPin,
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

interface SugestaoEndereco {
  rotulo: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  latitude: number | null;
  longitude: number | null;
}

interface FotoOtimizada {
  arquivo: File;
  nomeOriginal: string;
  tamanhoOriginal: number;
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

function formatarBytes(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function suportaWebP(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    return false;
  }
}

export function ImovelForm({ imovelInicial }: ImovelFormProps) {
  const router = useRouter();
  const isEdicao = Boolean(imovelInicial?.id);

  // ID do imóvel: se for edição já existe; se for novo, gerado após etapa 1 (Correction 4)
  const [imovelId, setImovelId] = useState<string | null>(imovelInicial?.id || null);

  // Estados dos Campos
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
  const [bairro, setBairro] = useState(imovelInicial?.bairro || "");
  const [cidade, setCidade] = useState(imovelInicial?.cidade || "São Paulo");
  const [uf, setUf] = useState(imovelInicial?.uf || "SP");
  const [latitude, setLatitude] = useState(imovelInicial?.latitude?.toString() || "");
  const [longitude, setLongitude] = useState(imovelInicial?.longitude?.toString() || "");

  // Busca de endereço (Photon/OSM)
  const [buscaEndereco, setBuscaEndereco] = useState("");
  const [sugestoesEndereco, setSugestoesEndereco] = useState<SugestaoEndereco[]>([]);
  const [mostrandoEndereco, setMostrandoEndereco] = useState(false);
  const debounceEndereco = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buscaEnderecoId = useRef(0);

  useEffect(() => {
    return () => {
      if (debounceEndereco.current) clearTimeout(debounceEndereco.current);
    };
  }, []);

  const buscarEndereco = (valor: string) => {
    setBuscaEndereco(valor);
    const q = valor.trim();
    if (q.length < 3) {
      if (debounceEndereco.current) clearTimeout(debounceEndereco.current);
      setSugestoesEndereco([]);
      setMostrandoEndereco(false);
      return;
    }
    if (debounceEndereco.current) clearTimeout(debounceEndereco.current);
    const id = ++buscaEnderecoId.current;
    debounceEndereco.current = setTimeout(async () => {
      if (id !== buscaEnderecoId.current) return;
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(q)}`);
        const data = (await res.json()) as { sugestoes?: SugestaoEndereco[] };
        if (id !== buscaEnderecoId.current) return;
        setSugestoesEndereco(data.sugestoes ?? []);
        setMostrandoEndereco(true);
      } catch {
        if (id !== buscaEnderecoId.current) return;
        setSugestoesEndereco([]);
        setMostrandoEndereco(false);
      }
    }, 400);
  };

  const aplicarEndereco = (s: SugestaoEndereco) => {
    setBairro(s.bairro);
    setCidade(s.cidade);
    setUf(s.uf);
    setLatitude(s.latitude !== null ? s.latitude.toFixed(7) : "");
    setLongitude(s.longitude !== null ? s.longitude.toFixed(7) : "");
    setBuscaEndereco("");
    setSugestoesEndereco([]);
    setMostrandoEndereco(false);
  };

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
  const [otimizandoFoto, setOtimizandoFoto] = useState(false);
  const [mensagemOtimizacao, setMensagemOtimizacao] = useState("");
  const [fotosOtimizadas, setFotosOtimizadas] = useState<FotoOtimizada[]>([]);

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

    if (!titulo.trim()) {
      setErro("O título do imóvel é obrigatório.");
      setSalvando(false);
      return;
    }

    const payload = {
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

  // Upload Múltiplo de Fotos — Etapa A: otimização client-side antes do envio
  const handleUploadFotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!imovelId) {
      setErro("Salve os dados do imóvel antes de fazer upload de fotos.");
      return;
    }

    const files = e.target.files;
    if (!files || files.length === 0) return;

    setOtimizandoFoto(true);
    setErro(null);
    setSucesso(null);

    const suportadoWebP = suportaWebP();
    const fileType = suportadoWebP ? "image/webp" : "image/jpeg";
    const extensaoAlvo = suportadoWebP ? "webp" : "jpg";

    const otimizadas: FotoOtimizada[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setMensagemOtimizacao(`Otimizando foto ${i + 1} de ${files.length}...`);

        let arquivoOtimizado: File;
        try {
          const comprimido = await imageCompression(file, {
            maxWidthOrHeight: 1920,
            fileType,
            initialQuality: 0.8,
            preserveExif: false,
            useWebWorker: false,
            maxIteration: 3,
          });

          const nomeBase = file.name.replace(/\.[^/.]+$/, "");
          arquivoOtimizado = new File([comprimido], `${nomeBase}.${extensaoAlvo}`, {
            type: fileType,
            lastModified: file.lastModified,
          });
        } catch (errOtimizacao) {
          console.warn("Falha ao otimizar imagem, enviando original:", errOtimizacao);
          arquivoOtimizado = file;
        }

        otimizadas.push({
          arquivo: arquivoOtimizado,
          nomeOriginal: file.name,
          tamanhoOriginal: file.size,
        });
      }

      setFotosOtimizadas(otimizadas);
    } catch {
      setErro("Falha durante a otimização das fotos.");
    } finally {
      setOtimizandoFoto(false);
      setMensagemOtimizacao("");
      e.target.value = ""; // Reset input
    }
  };

  // Upload Múltiplo de Fotos — Etapa B: envio confirmado para o Storage
  const confirmarUploadFotos = async () => {
    if (!imovelId || fotosOtimizadas.length === 0) return;

    setFazendoUpload(true);
    setErro(null);

    const supabase = createClient();
    const novasImagensAdicionadas: ImovelImagem[] = [];

    try {
      for (let i = 0; i < fotosOtimizadas.length; i++) {
        const { arquivo } = fotosOtimizadas[i];
        const extensao = arquivo.name.split(".").pop()?.toLowerCase() || "jpg";
        const nomeLimpo = arquivo.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[^a-zA-Z0-9_-]/g, "_");
        const timestamp = Date.now();
        // Caminho organizado na pasta do imóvel: {imovel_id}/{timestamp}-{nome}.{ext} (Correction 3)
        const storagePath = `${imovelId}/${timestamp}-${nomeLimpo}.${extensao}`;

        const { error: erroUpload } = await supabase.storage
          .from("imoveis")
          .upload(storagePath, arquivo, {
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
      setFotosOtimizadas([]);
      setSucesso(`${novasImagensAdicionadas.length} foto(s) enviada(s) com sucesso!`);
    } catch (err) {
      console.error("Falha durante o upload de fotos:", err);
      setErro("Falha durante o upload de fotos.");
    } finally {
      setFazendoUpload(false);
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/imoveis")}
            className="p-2 rounded-xl border border-line bg-surface text-ink-soft hover:text-white hover:border-gold-primary transition-colors"
            title="Voltar para a listagem"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-ink">
              {isEdicao ? "Editar Imóvel" : "Cadastrar Novo Imóvel"}
            </h1>
            <p className="text-xs text-ink-soft">
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
            className="flex items-center gap-2 rounded-xl gold-gradient-btn px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-on-gold shadow-md shadow-gold-primary/20 active:scale-95 disabled:opacity-50 transition-all"
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
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald/30 bg-emerald/10 p-4 text-xs text-emerald">
          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
          <span>{sucesso}</span>
        </div>
      )}

      {/* ETAPA 1: Dados Cadastrais */}
      <form onSubmit={handleSalvarImovel} className="space-y-8">
        {/* Bloco 1: Identificação Básica */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            1. Identificação Básica
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Finalidade *
              </label>
              <select
                value={finalidade}
                onChange={(e) => setFinalidade(e.target.value as ImovelFinalidade)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              >
                <option value="venda">Venda</option>
                <option value="aluguel">Aluguel</option>
                <option value="temporada">Temporada</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Tipo de Imóvel *
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
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
              <label className="text-xs text-ink-soft font-medium">
                Título do Anúncio *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Cobertura Triplex com Vista 360°"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Status Atual *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ImovelStatus)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
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
            <label className="text-xs text-ink-soft font-medium">
              Descrição Completa
            </label>
            <textarea
              rows={4}
              placeholder="Descreva detalhadamente os diferenciais arquitetônicos, acabamentos e comodidades..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-xl border border-line bg-card p-3.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Bloco 2: Valores & Financiamento */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            2. Valores & Condições
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Preço de Aquisição / Aluguel (R$) *
              </label>
              <input
                type="number"
                required
                min="1"
                placeholder="3500000"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs font-bold text-gold-primary focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Condomínio Mensal (R$)
              </label>
              <input
                type="number"
                min="0"
                placeholder="2500"
                value={precoCondominio}
                onChange={(e) => setPrecoCondominio(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                IPTU Mensal (R$)
              </label>
              <input
                type="number"
                min="0"
                placeholder="1200"
                value={precoIptu}
                onChange={(e) => setPrecoIptu(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={aceitaFinanciamento}
                onChange={(e) => setAceitaFinanciamento(e.target.checked)}
                className="h-4 w-4 rounded accent-gold-primary"
              />
              <span className="text-xs text-ink">
                Aceita financiamento bancário e recursos de consórcio/FGTS
              </span>
            </label>
          </div>
        </div>

        {/* Bloco 3: Ficha Técnica */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            3. Ficha Técnica & Metragens
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Quartos</label>
              <input
                type="number"
                min="0"
                value={quartos}
                onChange={(e) => setQuartos(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Suítes</label>
              <input
                type="number"
                min="0"
                value={suites}
                onChange={(e) => setSuites(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Banheiros</label>
              <input
                type="number"
                min="0"
                value={banheiros}
                onChange={(e) => setBanheiros(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Vagas</label>
              <input
                type="number"
                min="0"
                value={vagas}
                onChange={(e) => setVagas(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Área Útil / Construída (m²) *
              </label>
              <input
                type="number"
                min="0"
                required
                placeholder="280"
                value={areaUtil}
                onChange={(e) => setAreaUtil(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Área Total / Terreno (m²)
              </label>
              <input
                type="number"
                min="0"
                placeholder="350"
                value={areaTotal}
                onChange={(e) => setAreaTotal(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Bloco 4: Localização */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            4. Localização & Endereço
          </h2>

          <div className="relative space-y-1.5">
            <label className="text-xs text-ink-soft font-medium">
              Buscar endereço (preenche automaticamente)
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                placeholder="Digite rua e número, ex.: Alameda Lorena 1500"
                value={buscaEndereco}
                onChange={(e) => buscarEndereco(e.target.value)}
                onBlur={() => setMostrandoEndereco(false)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 pl-10 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
              />
            </div>

            {mostrandoEndereco && sugestoesEndereco.length > 0 && (
              <ul className="absolute z-20 left-0 right-0 top-full mt-1 max-h-60 overflow-y-auto rounded-xl border border-line bg-card shadow-2xl">
                {sugestoesEndereco.map((s, idx) => (
                  <li key={`${s.rotulo}-${idx}`}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => aplicarEndereco(s)}
                      className="flex w-full items-start gap-2.5 px-3.5 py-2.5 text-left hover:bg-elevated"
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-primary" />
                      <span className="min-w-0">
                        <span className="block truncate text-xs font-medium text-ink">
                          {s.rotulo}
                        </span>
                        <span className="block text-[11px] text-ink-muted">
                          {[s.bairro, s.cidade, s.uf].filter(Boolean).join(", ")}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Bairro *</label>
              <input
                type="text"
                required
                placeholder="Jardins"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">Cidade *</label>
              <input
                type="text"
                required
                placeholder="São Paulo"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">UF *</label>
              <input
                type="text"
                required
                maxLength={2}
                placeholder="SP"
                value={uf}
                onChange={(e) => setUf(e.target.value.toUpperCase())}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Latitude (Mapa)
              </label>
              <input
                type="text"
                placeholder="-23.5670000"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs font-mono text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-ink-soft font-medium">
                Longitude (Mapa)
              </label>
              <input
                type="text"
                placeholder="-46.6650000"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-xs font-mono text-ink focus:border-gold-primary focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Bloco 5: Características & Comodidades */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            5. Características & Comodidades
          </h2>

          {/* Tags Atuais */}
          <div className="flex flex-wrap gap-2">
            {caracteristicas.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-xl border border-gold-primary/30 bg-gold-primary/10 px-3 py-1.5 text-xs font-medium text-gold-light"
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
              className="flex-1 rounded-xl border border-line bg-card px-3.5 py-2 text-xs text-ink focus:border-gold-primary focus:outline-none"
            />
            <button
              type="button"
              onClick={() => handleAdicionarTag(novaTag)}
              className="rounded-xl bg-card-hover border border-line-strong px-4 py-2 text-xs font-semibold text-ink hover:border-gold-primary hover:text-gold-light"
            >
              Adicionar
            </button>
          </div>

          {/* Sugestões Rápidas */}
          <div className="space-y-1.5 pt-2">
            <span className="text-[11px] text-ink-muted">Sugestões frequentes:</span>
            <div className="flex flex-wrap gap-1.5">
              {SUGESTOES_CARACTERISTICAS.map((sugestao) => (
                <button
                  key={sugestao}
                  type="button"
                  onClick={() => handleAdicionarTag(sugestao)}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1 text-[11px] text-ink-soft hover:border-line-hover hover:text-white"
                >
                  + {sugestao}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 6: Visibilidade e Demonstração */}
        <div className="rounded-2xl border border-line bg-surface p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-primary">
            6. Configurações de Exibição
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3 rounded-xl border border-line bg-card cursor-pointer">
              <input
                type="checkbox"
                checked={destaque}
                onChange={(e) => setDestaque(e.target.checked)}
                className="h-4 w-4 rounded accent-gold-primary"
              />
              <div>
                <span className="block text-xs font-semibold text-ink">
                  Destacar na Página Inicial
                </span>
                <span className="text-[11px] text-ink-muted">
                  Exibe o imóvel na vitrine nobre da Home
                </span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-line bg-card cursor-pointer">
              <input
                type="checkbox"
                checked={isDemo}
                onChange={(e) => setIsDemo(e.target.checked)}
                className="h-4 w-4 rounded accent-gold-primary"
              />
              <div>
                <span className="block text-xs font-semibold text-ink">
                  Marcar como Demonstração [DEMO]
                </span>
                <span className="text-[11px] text-ink-muted">
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
            className="flex items-center gap-2 rounded-xl gold-gradient-btn px-6 py-3 text-xs font-bold uppercase tracking-wider text-on-gold shadow-lg shadow-gold-primary/20 active:scale-95 disabled:opacity-50 transition-all"
          >
            <Save className="h-4 w-4" />
            <span>{salvando ? "Salvando Dados..." : "Salvar Dados Cadastrais"}</span>
          </button>
        </div>
      </form>

      {/* ETAPA 2: Upload e Gestão de Fotos (Correction 4: Requer que o imóvel já exista) */}
      <div className="rounded-2xl border border-line bg-surface p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary">
              <Images className="h-4 w-4" />
              <span>Etapa 2: Álbum de Fotos</span>
            </div>
            <p className="text-xs text-ink-soft mt-0.5">
              Faça upload de fotos em alta resolução. A foto marcada com estrela dourada será a capa principal.
            </p>
          </div>

          {imovelId && (
            <div className="flex flex-col items-end gap-2">
              <label className="inline-flex items-center gap-2 rounded-xl bg-card-hover border border-line-strong px-4 py-2.5 text-xs font-semibold text-ink hover:border-gold-primary hover:text-gold-light cursor-pointer active:scale-95 transition-all">
                <Upload className="h-4 w-4 text-gold-primary" />
                <span>
                  {fazendoUpload
                    ? "Enviando..."
                    : otimizandoFoto
                    ? "Otimizando..."
                    : "Adicionar Fotos"}
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  disabled={fazendoUpload || otimizandoFoto}
                  onChange={handleUploadFotos}
                  className="hidden"
                />
              </label>
              {otimizandoFoto && (
                <p className="text-[11px] text-gold-primary">
                  {mensagemOtimizacao}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Painel de confirmação: fotos otimizadas aguardando envio */}
        {fotosOtimizadas.length > 0 && (
          <div className="rounded-xl border border-line bg-card p-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs font-semibold text-ink">
                {fotosOtimizadas.length === 1
                  ? "1 foto otimizada pronta para envio"
                  : `${fotosOtimizadas.length} fotos otimizadas prontas para envio`}
              </p>
              <p className="text-[11px] text-ink-muted">
                Redimensionadas para 1920px • WebP q80 • metadados removidos
              </p>
            </div>

            <ul className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {fotosOtimizadas.map((foto, idx) => (
                <li
                  key={`${foto.nomeOriginal}-${idx}`}
                  className="flex items-center justify-between gap-3 rounded-lg bg-surface border border-line px-3 py-2"
                >
                  <span className="truncate text-xs text-ink-soft">
                    {foto.nomeOriginal}
                  </span>
                  <span className="shrink-0 text-xs font-semibold text-gold-primary">
                    {formatarBytes(foto.tamanhoOriginal)} →{" "}
                    {formatarBytes(foto.arquivo.size)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="button"
                onClick={confirmarUploadFotos}
                disabled={fazendoUpload}
                className="flex items-center justify-center gap-2 rounded-xl bg-gold-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-gold shadow-md shadow-gold-primary/20 hover:bg-gold-light active:scale-95 disabled:opacity-50 transition-all"
              >
                <Upload className="h-3.5 w-3.5" />
                <span>
                  {fazendoUpload
                    ? `Enviando ${fotosOtimizadas.length} foto(s)...`
                    : `Confirmar envio (${fotosOtimizadas.length})`}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setFotosOtimizadas([])}
                disabled={fazendoUpload}
                className="rounded-xl border border-line-strong px-4 py-2 text-xs font-semibold text-ink-soft hover:border-gold-primary hover:text-gold-light active:scale-95 disabled:opacity-50 transition-all"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {!imovelId ? (
          <div className="rounded-xl border border-dashed border-line-strong p-10 text-center space-y-2">
            <Upload className="mx-auto h-8 w-8 text-ink-muted" />
            <p className="text-xs font-semibold text-ink-soft">
              Salve os dados cadastrais acima para habilitar o upload de fotos.
            </p>
            <p className="text-[11px] text-ink-muted">
              O Supabase Storage organiza as imagens em pastas com o identificador único do imóvel.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {imagens.length === 0 ? (
              <div className="rounded-xl border border-dashed border-line-strong p-8 text-center space-y-2">
                <Images className="mx-auto h-8 w-8 text-ink-muted" />
                <p className="text-xs text-ink-soft">
                  Nenhuma foto cadastrada para este imóvel ainda.
                </p>
                <p className="text-[11px] text-ink-muted">
                  Clique em &quot;Adicionar Fotos&quot; acima para selecionar uma ou mais imagens.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {imagens.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`group relative aspect-[16/10] overflow-hidden rounded-xl border bg-elevated transition-all ${
                      img.capa
                        ? "border-gold-primary ring-2 ring-gold-primary/30"
                        : "border-line hover:border-line-hover"
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
                      <div className="absolute top-2 left-2 rounded-md bg-gold-primary px-2 py-0.5 text-[10px] font-bold text-on-gold shadow-md flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Capa</span>
                      </div>
                    )}

                    {/* Número de Ordem */}
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-mono text-ink-soft border border-line-strong">
                      #{idx + 1}
                    </div>

                    {/* Overlay de Ações */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 p-2">
                      {!img.capa && (
                        <button
                          type="button"
                          onClick={() => handleDefinirCapa(img.id)}
                          className="p-1.5 rounded-lg bg-surface text-gold-primary hover:bg-gold-primary hover:text-black transition-colors"
                          title="Definir como foto de capa"
                        >
                          <Star className="h-4 w-4" />
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => handleMoverFoto(idx, "cima")}
                        className="p-1.5 rounded-lg bg-surface text-ink-soft hover:text-white disabled:opacity-25 transition-colors"
                        title="Mover para esquerda/cima"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        disabled={idx === imagens.length - 1}
                        onClick={() => handleMoverFoto(idx, "baixo")}
                        className="p-1.5 rounded-lg bg-surface text-ink-soft hover:text-white disabled:opacity-25 transition-colors"
                        title="Mover para direita/baixo"
                      >
                        <ArrowUp className="h-4 w-4 rotate-90" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleExcluirFoto(img)}
                        className="p-1.5 rounded-lg bg-surface text-red-400 hover:bg-red-500 hover:text-white transition-colors"
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
