"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  Edit2,
  Trash2,
  AlertTriangle,
  Sparkles,
  ExternalLink,
  PlusCircle,
  CheckCircle2,
} from "lucide-react";
import {
  atualizarStatusImovel,
  excluirImovel,
} from "@/app/admin/actions/imovel-actions";
import type { Imovel, ImovelStatus } from "@/lib/supabase/types";

interface TabelaImoveisAdminProps {
  imoveisIniciais: Imovel[];
}

export function TabelaImoveisAdmin({ imoveisIniciais }: TabelaImoveisAdminProps) {
  const [imoveis, setImoveis] = useState<Imovel[]>(imoveisIniciais);
  const [busca, setBusca] = useState("");
  const [statusFiltro, setStatusFiltro] = useState<string>("todos");
  const [somenteDemo, setSomenteDemo] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Estado do Modal de Exclusão Customizado
  const [imovelParaExcluir, setImovelParaExcluir] = useState<Imovel | null>(null);
  const [excluindo, setExcluindo] = useState(false);
  const [erroExclusao, setErroExclusao] = useState<string | null>(null);

  // Toggle rápido de status direto na linha
  const handleTrocarStatus = async (id: string, novoStatus: ImovelStatus) => {
    // Atualização otimista
    setImoveis((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: novoStatus } : item))
    );

    startTransition(async () => {
      const res = await atualizarStatusImovel(id, novoStatus);
      if (!res.success) {
        alert(`Erro ao atualizar status: ${res.error}`);
      }
    });
  };

  // Confirmar exclusão no modal
  const handleConfirmarExclusao = async () => {
    if (!imovelParaExcluir) return;
    setExcluindo(true);
    setErroExclusao(null);

    const res = await excluirImovel(imovelParaExcluir.id);

    if (res.success) {
      setImoveis((prev) => prev.filter((i) => i.id !== imovelParaExcluir.id));
      setImovelParaExcluir(null);
      setExcluindo(false);
    } else {
      setErroExclusao(res.error || "Erro ao excluir imóvel.");
      setExcluindo(false);
    }
  };

  // Filtragem local da tabela
  const imoveisFiltrados = imoveis.filter((imovel) => {
    const termo = busca.toLowerCase().trim();
    const bateBusca =
      !termo ||
      imovel.titulo.toLowerCase().includes(termo) ||
      imovel.cidade.toLowerCase().includes(termo) ||
      imovel.bairro.toLowerCase().includes(termo);

    const bateStatus =
      statusFiltro === "todos" || imovel.status === statusFiltro;

    const bateDemo = !somenteDemo || Boolean(imovel.is_demo);

    return bateBusca && bateStatus && bateDemo;
  });

  const formatarPreco = (preco: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(preco);

  return (
    <div className="space-y-6">
      {/* Barra de Busca e Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Input de Busca */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input
              type="text"
              placeholder="Buscar por título ou cidade..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-4 text-xs text-ink placeholder-ink-muted focus:border-gold-primary focus:outline-none"
            />
          </div>

          {/* Filtro por Status */}
          <select
            value={statusFiltro}
            onChange={(e) => setStatusFiltro(e.target.value)}
            className="rounded-xl border border-line bg-surface px-3.5 py-2.5 text-xs text-ink focus:border-gold-primary focus:outline-none"
          >
            <option value="todos">Todos os status</option>
            <option value="disponivel">Disponíveis</option>
            <option value="indisponivel">Indisponíveis</option>
            <option value="reservado">Reservados</option>
            <option value="vendido">Vendidos</option>
            <option value="alugado">Alugados</option>
          </select>

          {/* Toggle para filtrar apenas demonstração */}
          <button
            type="button"
            onClick={() => setSomenteDemo(!somenteDemo)}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
              somenteDemo
                ? "bg-gold-primary/20 border-gold-primary text-gold-light"
                : "border-line bg-surface text-ink-soft hover:text-white"
            }`}
          >
            <span>Somente [DEMO]</span>
          </button>
        </div>

        <Link
          href="/admin/imoveis/novo"
          className="inline-flex items-center justify-center gap-2 rounded-xl gold-gradient-btn px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-on-gold shadow-md shadow-gold-primary/20 active:scale-95 shrink-0"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Cadastrar Imóvel</span>
        </Link>
      </div>

      {/* Tabela de Imóveis */}
      <div className="rounded-2xl border border-line bg-surface overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-ink-soft">
            <thead className="border-b border-line bg-card text-[11px] uppercase tracking-wider text-ink-muted font-semibold">
              <tr>
                <th className="px-5 py-4">Capa</th>
                <th className="px-5 py-4">Título & Localização</th>
                <th className="px-5 py-4">Valor</th>
                <th className="px-5 py-4">Status (Rápido)</th>
                <th className="px-5 py-4 text-center">Destaque</th>
                <th className="px-5 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-faint">
              {imoveisFiltrados.length > 0 ? (
                imoveisFiltrados.map((imovel) => {
                  const capaUrl =
                    imovel.imoveis_imagens?.find((img) => img.capa)?.url ||
                    imovel.imoveis_imagens?.[0]?.url ||
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80";

                  return (
                    <tr
                      key={imovel.id}
                      className="hover:bg-surface transition-colors"
                    >
                      {/* Miniatura 16:10 */}
                      <td className="px-5 py-3">
                        <div className="relative h-12 w-20 rounded-lg overflow-hidden border border-line bg-elevated">
                          <Image
                            src={capaUrl}
                            alt={imovel.titulo}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      </td>

                      {/* Título & Localização */}
                      <td className="px-5 py-3 max-w-xs sm:max-w-md">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-ink truncate" title={imovel.titulo}>
                            {imovel.titulo}
                          </div>
                          <div className="text-[11px] text-ink-muted">
                            {imovel.bairro}, {imovel.cidade} - {imovel.uf} • {imovel.tipo}
                          </div>
                        </div>
                      </td>

                      {/* Preço */}
                      <td className="px-5 py-3 whitespace-nowrap font-medium text-ink">
                        {formatarPreco(Number(imovel.preco))}
                      </td>

                      {/* Toggle Rápido de Status */}
                      <td className="px-5 py-3">
                        <select
                          value={imovel.status}
                          onChange={(e) =>
                            handleTrocarStatus(
                              imovel.id,
                              e.target.value as ImovelStatus
                            )
                          }
                          className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold border focus:outline-none transition-colors ${
                            imovel.status === "disponivel"
                              ? "bg-emerald/15 border-emerald/40 text-emerald"
                              : imovel.status === "vendido" || imovel.status === "alugado"
                              ? "bg-blue-500/15 border-blue-500/40 text-blue-400"
                              : "bg-card-hover border-line-strong text-ink-soft"
                          }`}
                        >
                          <option value="disponivel" className="bg-card text-ink">
                            Disponível
                          </option>
                          <option value="reservado" className="bg-card text-ink">
                            Reservado
                          </option>
                          <option value="vendido" className="bg-card text-ink">
                            Vendido
                          </option>
                          <option value="alugado" className="bg-card text-ink">
                            Alugado
                          </option>
                          <option value="indisponivel" className="bg-card text-ink">
                            Indisponível
                          </option>
                        </select>
                      </td>

                      {/* Destaque */}
                      <td className="px-5 py-3 text-center">
                        {imovel.destaque ? (
                          <span className="inline-flex items-center justify-center text-gold-primary" title="Imóvel em destaque">
                            <Sparkles className="h-4 w-4 fill-current" />
                          </span>
                        ) : (
                          <span className="text-ink-muted">—</span>
                        )}
                      </td>

                      {/* Ações (Editar, Ver na Vitrine, Excluir) */}
                      <td className="px-5 py-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5">
                          <Link
                            href={`/imoveis/${encodeURIComponent(imovel.id)}`}
                            target="_blank"
                            className="p-1.5 rounded-lg border border-line bg-card text-ink-soft hover:text-gold-primary hover:border-gold-primary"
                            title="Ver na Vitrine"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>

                          <Link
                            href={`/admin/imoveis/${imovel.id}/editar`}
                            className="p-1.5 rounded-lg border border-line bg-card text-ink-soft hover:text-white hover:border-line-hover"
                            title="Editar Imóvel"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => setImovelParaExcluir(imovel)}
                            className="p-1.5 rounded-lg border border-line bg-card text-red-400 hover:bg-red-500/10 hover:border-red-500/40 transition-colors"
                            title="Excluir Imóvel"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-ink-muted">
                    Nenhum imóvel encontrado com os critérios selecionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Customizado de Exclusão (Dark Luxury Gold) */}
      {imovelParaExcluir && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-2xl border border-line-strong bg-surface p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-red-500/10 p-2.5 text-red-400 border border-red-500/30 shrink-0">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-ink">
                  Confirmar Exclusão do Imóvel
                </h3>
                <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                  Tem certeza que deseja excluir o imóvel{" "}
                  <strong className="text-gold-primary">
                    &quot;{imovelParaExcluir.titulo}&quot;
                  </strong>
                  ?
                </p>
                <p className="text-[11px] text-red-400/90 mt-2">
                  Atenção: Essa ação é irreversível e removerá automaticamente todas as fotos vinculadas na pasta do Storage.
                </p>
              </div>
            </div>

            {erroExclusao && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                {erroExclusao}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={excluindo}
                onClick={() => setImovelParaExcluir(null)}
                className="rounded-xl border border-line bg-card px-4 py-2.5 text-xs font-semibold text-ink-soft hover:text-white hover:border-line-hover transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={excluindo}
                onClick={handleConfirmarExclusao}
                className="rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-500 active:scale-95 disabled:opacity-50 transition-all"
              >
                {excluindo ? "Excluindo..." : "Sim, Excluir Imóvel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
