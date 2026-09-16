"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Check, Moon, Sun } from "lucide-react";
import { atualizarTemaSite } from "@/app/admin/actions/settings-actions";
import type { TemaSite } from "@/lib/supabase/types";

interface SeletorTemaProps {
  temaAtual: TemaSite;
}

const OPCOES: Array<{ valor: TemaSite; rotulo: string; descricao: string; Icone: typeof Moon }> = [
  { valor: "dark", rotulo: "Escuro", descricao: "Fundo quase preto", Icone: Moon },
  { valor: "light", rotulo: "Claro", descricao: "Fundo branco", Icone: Sun },
];

export function SeletorTema({ temaAtual }: SeletorTemaProps) {
  const router = useRouter();
  const [tema, setTema] = useState<TemaSite>(temaAtual);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [pendente, startTransition] = useTransition();

  const trocar = (novo: TemaSite) => {
    if (novo === tema || pendente) return;

    setErro(null);
    setMensagem(null);

    startTransition(async () => {
      const resultado = await atualizarTemaSite(novo);

      if (resultado.success) {
        setTema(novo);
        setMensagem(`Tema alterado para ${novo === "dark" ? "Escuro" : "Claro"}.`);
        router.refresh();
      } else {
        setErro(resultado.error || "Não foi possível alterar o tema.");
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {OPCOES.map((opcao) => {
          const ativo = tema === opcao.valor;
          const Icone = opcao.Icone;

          return (
            <button
              key={opcao.valor}
              type="button"
              onClick={() => trocar(opcao.valor)}
              disabled={pendente}
              aria-pressed={ativo}
              className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all disabled:cursor-not-allowed disabled:opacity-70 ${
                ativo
                  ? "border-gold-primary ring-2 ring-gold-primary/30"
                  : "border-line hover:border-gold-primary/60"
              }`}
            >
              {/* Preview mini do tema */}
              <div
                className={`mb-3 h-12 w-full rounded-lg border ${
                  opcao.valor === "dark"
                    ? "border-[#333333] bg-[#0A0A0A]"
                    : "border-[#E5E5E0] bg-[#FFFFFF]"
                }`}
              >
                <div className="flex h-full items-center gap-2 px-3">
                  <span className="h-2 w-6 rounded-full bg-gold-primary" />
                  <span
                    className={`h-2 flex-1 rounded-full ${
                      opcao.valor === "dark" ? "bg-[#2A2A2A]" : "bg-[#E5E5E0]"
                    }`}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Icone
                  className={`h-4 w-4 ${ativo ? "text-gold-primary" : "text-ink-muted"}`}
                />
                <span className="text-sm font-semibold text-ink">{opcao.rotulo}</span>
                {ativo && <Check className="ml-auto h-4 w-4 text-gold-primary" />}
              </div>
              <p className="mt-0.5 text-[11px] text-ink-muted">{opcao.descricao}</p>
            </button>
          );
        })}
      </div>

      {mensagem && (
        <p className="flex items-center gap-2 rounded-lg border border-emerald/30 bg-emerald/10 px-3 py-2 text-xs font-medium text-emerald">
          <Check className="h-3.5 w-3.5 shrink-0" />
          <span>{mensagem}</span>
        </p>
      )}

      {erro && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-400">
          {erro}
        </p>
      )}

      {pendente && (
        <p className="text-xs text-ink-muted">Aplicando tema...</p>
      )}
    </div>
  );
}
