import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  BadgePercent,
  MessageSquare,
  PlusCircle,
  ArrowRight,
  ExternalLink,
  Clock,
  Sparkles,
  Phone,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { DEMO_IMOVEIS } from "@/lib/demo-data";
import { SeletorTema } from "@/components/admin/SeletorTema";
import { Palette } from "lucide-react";
import type { ImovelStatus, Lead, TemaSite } from "@/lib/supabase/types";

export const revalidate = 0; // Sempre dados frescos no admin

export default async function AdminDashboardPage() {
  let totalImoveis = 0;
  let disponiveis = 0;
  let concluidos = 0;
  let leadsUltimos7Dias = 0;
  let ultimosLeads: Array<Lead & { imovel?: { titulo: string } | null }> = [];
  let temaAtual: TemaSite = "dark";

  const hasSupabaseConfig =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (hasSupabaseConfig) {
    try {
      const supabase = await createClient();

      // 1. Contagens de Imóveis
      const { data: imoveisData } = await supabase
        .from("imoveis")
        .select("id, status");

      const itensImoveis = (imoveisData || []) as unknown as Array<{
        id: string;
        status: ImovelStatus;
      }>;

      if (itensImoveis.length > 0) {
        totalImoveis = itensImoveis.length;
        disponiveis = itensImoveis.filter((i) => i.status === "disponivel").length;
        concluidos = itensImoveis.filter(
          (i) => i.status === "vendido" || i.status === "alugado"
        ).length;
      }

      // 2. Leads nos últimos 7 dias
      const dataSeteDiasAtras = new Date(
        Date.now() - 7 * 24 * 60 * 60 * 1000
      ).toISOString();

      const { count: leadsCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .gte("created_at", dataSeteDiasAtras);

      leadsUltimos7Dias = leadsCount || 0;

      // 3. Últimos 5 leads com dados do imóvel relacionado
      const { data: leadsData } = await supabase
        .from("leads")
        .select(`
          *,
          imoveis (titulo)
        `)
        .order("created_at", { ascending: false })
        .limit(5);

      if (leadsData) {
        const leadsTipados = leadsData as unknown as Array<
          Lead & { imoveis?: { titulo: string } | null }
        >;

        ultimosLeads = leadsTipados.map((lead) => ({
          ...lead,
          imovel: lead.imoveis || null,
        }));
      }

      // 4. Tema global atual do site
      const { data: settingsData } = await supabase
        .from("site_settings")
        .select("tema_padrao")
        .eq("id", 1)
        .single();

      if (settingsData?.tema_padrao === "light") {
        temaAtual = "light";
      }
    } catch (err) {
      console.warn("Erro ao buscar dados do Dashboard no Supabase:", err);
    }
  } else {
    // Fallback de demonstração
    totalImoveis = DEMO_IMOVEIS.length;
    disponiveis = DEMO_IMOVEIS.filter((i) => i.status === "disponivel").length;
    concluidos = 0;
    leadsUltimos7Dias = 3;
    ultimosLeads = [
      {
        id: "lead-demo-1",
        imovel_id: DEMO_IMOVEIS[0].id,
        nome: "Carlos Eduardo Silva",
        telefone: "(11) 98888-7777",
        mensagem: "Interesse na cobertura dos Jardins",
        origem: "whatsapp_detalhe",
        created_at: new Date().toISOString(),
        imovel: {
          titulo: DEMO_IMOVEIS[0].titulo,
        },
      },
      {
        id: "lead-demo-2",
        imovel_id: DEMO_IMOVEIS[1].id,
        nome: "Mariana Vasconcelos",
        telefone: "(19) 97777-6666",
        mensagem: "Gostaria de agendar visita na casa em Gramado",
        origem: "whatsapp_detalhe",
        created_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
        imovel: {
          titulo: DEMO_IMOVEIS[1].titulo,
        },
      },
    ];
  }

  return (
    <div className="space-y-8">
      {/* Cabeçalho do Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Visão Geral</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            Painel de Controle
          </h1>
          <p className="text-xs text-ink-soft mt-0.5">
            Acompanhe o desempenho do catálogo de imóveis e os novos contatos de clientes.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/imoveis/novo"
            className="inline-flex items-center gap-2 rounded-xl gold-gradient-btn px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-on-gold shadow-md shadow-gold-primary/20 active:scale-95"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Novo Imóvel</span>
          </Link>
        </div>
      </div>

      {/* 4 Cards de Métricas (KPIs) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total de Imóveis */}
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-soft font-medium">Total de Imóveis</span>
            <div className="rounded-lg bg-elevated p-2 text-gold-primary">
              <Building2 className="h-4 w-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-ink">
            {totalImoveis}
          </div>
          <p className="text-[11px] text-ink-muted">Propriedades cadastradas</p>
        </div>

        {/* Disponíveis */}
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-soft font-medium">Disponíveis</span>
            <div className="rounded-lg bg-emerald/15 p-2 text-emerald">
              <CheckCircle2 className="h-4 w-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald">
            {disponiveis}
          </div>
          <p className="text-[11px] text-ink-muted">Visíveis na vitrine pública</p>
        </div>

        {/* Vendidos / Alugados */}
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-soft font-medium">Vendidos / Alugados</span>
            <div className="rounded-lg bg-elevated p-2 text-gold-primary">
              <BadgePercent className="h-4 w-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-ink">
            {concluidos}
          </div>
          <p className="text-[11px] text-ink-muted">Negociações concretizadas</p>
        </div>

        {/* Leads (Últimos 7 dias) */}
        <div className="rounded-2xl border border-line bg-surface p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-soft font-medium">Leads (7 dias)</span>
            <div className="rounded-lg bg-gold-primary/15 p-2 text-gold-primary">
              <MessageSquare className="h-4 w-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gold-primary">
            {leadsUltimos7Dias}
          </div>
          <p className="text-[11px] text-ink-muted">Cliques diretos para WhatsApp</p>
        </div>
      </div>

      {/* Seção dos Últimos Leads e Ações Rápidas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Tabela dos Últimos Leads (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-line bg-surface p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-gold-primary" />
              <h2 className="text-base font-bold text-ink">
                Últimos Contatos Recebidos (Leads)
              </h2>
            </div>
            <span className="text-xs text-ink-muted font-mono">
              {ultimosLeads.length} mais recentes
            </span>
          </div>

          {ultimosLeads.length > 0 ? (
            <div className="divide-y divide-line-faint">
              {ultimosLeads.map((lead) => {
                const dataFormatada = lead.created_at
                  ? new Intl.DateTimeFormat("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    }).format(new Date(lead.created_at))
                  : "Recentemente";

                return (
                  <div
                    key={lead.id}
                    className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-ink">
                          {lead.nome || "Interessado via WhatsApp"}
                        </span>
                        <span className="rounded bg-card border border-line px-2 py-0.5 text-[10px] text-ink-soft">
                          {lead.origem || "WhatsApp"}
                        </span>
                      </div>

                      {lead.imovel ? (
                        <p className="text-xs text-ink-soft">
                          Imóvel:{" "}
                          <strong className="text-gold-primary">
                            {lead.imovel.titulo}
                          </strong>
                        </p>
                      ) : (
                        <p className="text-xs text-ink-muted">
                          Contato geral da vitrine
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 sm:text-right shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-ink-muted">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{dataFormatada}</span>
                      </div>

                      {lead.telefone && (
                        <a
                          href={`https://wa.me/${lead.telefone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 rounded-lg bg-emerald/15 px-2.5 py-1 text-xs font-semibold text-emerald hover:bg-emerald/25 transition-colors"
                        >
                          <Phone className="h-3 w-3" />
                          <span>WhatsApp</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-ink-muted">
              Nenhum lead registrado recentemente.
            </div>
          )}
        </div>

        {/* Ações Rápidas e Acessos (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-line bg-surface p-6 space-y-4">
            <h2 className="text-base font-bold text-ink">Ações Rápidas</h2>

            <div className="space-y-2.5">
              <Link
                href="/admin/imoveis/novo"
                className="flex items-center justify-between rounded-xl border border-line bg-card p-3.5 text-xs font-semibold text-ink hover:border-gold-primary hover:text-gold-light transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <PlusCircle className="h-4 w-4 text-gold-primary" />
                  <span>Cadastrar Novo Imóvel</span>
                </span>
                <ArrowRight className="h-4 w-4 text-ink-muted group-hover:text-gold-primary group-hover:translate-x-0.5 transition-all" />
              </Link>

              <Link
                href="/admin/imoveis"
                className="flex items-center justify-between rounded-xl border border-line bg-card p-3.5 text-xs font-semibold text-ink hover:border-gold-primary hover:text-gold-light transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <Building2 className="h-4 w-4 text-gold-primary" />
                  <span>Gerenciar Imóveis Cadastrados</span>
                </span>
                <ArrowRight className="h-4 w-4 text-ink-muted group-hover:text-gold-primary group-hover:translate-x-0.5 transition-all" />
              </Link>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-line bg-card p-3.5 text-xs font-semibold text-ink-soft hover:border-gold-primary hover:text-gold-light transition-all group"
              >
                <span className="flex items-center gap-2.5">
                  <ExternalLink className="h-4 w-4 text-gold-primary" />
                  <span>Visualizar Vitrine Pública</span>
                </span>
                <span className="text-xs text-ink-muted">↗</span>
              </a>
            </div>
          </div>

          {/* Configurações do Site: Tema Global */}
          <div className="rounded-2xl border border-line bg-surface p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="h-4 w-4 text-gold-primary" />
              <h2 className="text-base font-bold text-ink">Tema do Site</h2>
            </div>
            <p className="text-xs text-ink-soft leading-relaxed">
              Escolha o tema que <strong className="text-ink">todos os visitantes</strong> verão na
              vitrine. A alteração vale para o site inteiro até ser trocada novamente.
            </p>
            <SeletorTema temaAtual={temaAtual} />
          </div>
        </div>
      </div>
    </div>
  );
}
