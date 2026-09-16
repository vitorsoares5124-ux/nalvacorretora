import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Sparkles, Building2, Shield, Compass } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#2A2A2A]">
      {/* Imagem de Fundo de Alta Resolução com Filtro Escuro Arquitetônico */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Propriedade de Luxo RA Imóveis"
          fill
          priority
          className="object-cover object-center brightness-[0.28] contrast-[1.1]"
          sizes="100vw"
        />
        {/* Camada de gradiente para contraste profundo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        {/* Badge de Autoridade */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#1A1A1A]/80 px-4 py-1.5 text-xs font-semibold text-[#D4AF37] backdrop-blur-md mb-8 shadow-lg">
          <Sparkles className="h-3.5 w-3.5 text-[#F4C430]" />
          <span>Consultoria Imobiliária de Alto Padrão</span>
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F5F0] leading-[1.1] max-w-4xl mx-auto">
          Imóveis que traduzem seu estilo de vida com{" "}
          <span className="text-[#D4AF37] block sm:inline">sofisticação</span>
        </h1>

        {/* Subtítulo Institucional */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
          Curadoria criteriosa de coberturas, residências em condomínios fechados e investimentos exclusivos com atendimento consultivo por Roberto Andrade.
        </p>

        {/* CTA Principal */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#destaques"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0A0A0A] shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:bg-[#F4C430] hover:shadow-[#D4AF37]/40 active:scale-95"
          >
            <span>Explorar Coleção</span>
            <ArrowDown className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Roberto%2C%20gostaria%20de%20uma%20consultoria%20para%20encontrar%20meu%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#333333] bg-[#141414]/80 px-8 py-4 text-sm font-semibold text-[#F5F5F0] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/60 hover:text-[#F4C430]"
          >
            Solicitar Consultoria
          </a>
        </div>

        {/* Pilares de Valor */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#2A2A2A]/80 text-left">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141414]/60 border border-[#222222]">
            <div className="rounded-lg bg-[#1F1F1F] p-2 text-[#D4AF37]">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F0]">Curadoria Exclusiva</h4>
              <p className="text-xs text-[#A3A3A3] mt-0.5">Propriedades inspecionadas com documentação 100% regular.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141414]/60 border border-[#222222]">
            <div className="rounded-lg bg-[#1F1F1F] p-2 text-[#D4AF37]">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F0]">Segurança Jurídica</h4>
              <p className="text-xs text-[#A3A3A3] mt-0.5">Assessoria em todas as etapas contratuais e cartorárias.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141414]/60 border border-[#222222]">
            <div className="rounded-lg bg-[#1F1F1F] p-2 text-[#D4AF37]">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F0]">Atendimento Consultivo</h4>
              <p className="text-xs text-[#A3A3A3] mt-0.5">Discrição total e foco nas reais necessidades do cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
