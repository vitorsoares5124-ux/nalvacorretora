"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, Mail, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro(null);
    setCarregando(true);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: senha,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          setErro("E-mail ou senha incorretos. Verifique os dados digitados.");
        } else {
          setErro(`Falha na autenticação: ${error.message}`);
        }
        setCarregando(false);
        return;
      }

      if (data.session) {
        router.push("/admin");
        router.refresh();
      }
    } catch (err: any) {
      setErro("Ocorreu um erro inesperado ao conectar ao servidor de autenticação.");
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Luz ambiente sutil dourada */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo Oficial e Cabeçalho */}
        <div className="text-center space-y-3">
          <div className="relative mx-auto h-16 w-36 sm:h-20 sm:w-44">
            <Image
              src="/images/logo.png"
              alt="RA Imóveis"
              fill
              priority
              className="object-contain"
              sizes="176px"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#F5F5F0]">
              Painel Administrativo
            </h1>
            <p className="mt-1 text-xs text-[#A3A3A3]">
              Acesso exclusivo para gestão do portfólio de imóveis e leads
            </p>
          </div>
        </div>

        {/* Card do Formulário */}
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 sm:p-8 shadow-2xl space-y-6">
          {erro && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{erro}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                E-mail
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 h-4 w-4 text-[#737373]" />
                <input
                  type="email"
                  required
                  placeholder="admin@raimoveis.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] py-3 pl-10 pr-4 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Senha
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 h-4 w-4 text-[#737373]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] py-3 pl-10 pr-4 text-xs text-[#F5F5F0] placeholder-[#555] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={carregando}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] shadow-lg shadow-[#D4AF37]/20 transition-all hover:bg-[#F4C430] active:scale-95 disabled:opacity-50"
              >
                {carregando ? (
                  <span>Acessando...</span>
                ) : (
                  <>
                    <span>Entrar no Painel</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="border-t border-[#222222] pt-4 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#737373]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Ambiente restrito e monitorado com criptografia TLS</span>
            </div>
          </div>
        </div>

        {/* Retornar à Vitrine */}
        <div className="text-center">
          <a
            href="/"
            className="text-xs text-[#A3A3A3] hover:text-[#D4AF37] transition-colors"
          >
            ← Voltar para a vitrine pública
          </a>
        </div>
      </div>
    </div>
  );
}
