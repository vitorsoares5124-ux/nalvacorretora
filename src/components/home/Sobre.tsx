import Image from "next/image";
import { Award, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

export function Sobre() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                alt="Roberto Andrade - Consultoria Imobiliária"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              
              {/* Badge de Experiência */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141414]/90 backdrop-blur-md border border-[#D4AF37]/30">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#D4AF37] p-2.5 text-[#0A0A0A]">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F5F0]">Roberto Andrade</h4>
                    <p className="text-xs text-[#D4AF37]">Corretor & Avaliador Imobiliário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <span>Trajetória & Compromisso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F0] leading-tight">
              Assessoria personalizada na busca do seu imóvel{" "}
              <span className="gold-gradient-text">ideal</span>
            </h2>

            <p className="text-base text-[#A3A3A3] leading-relaxed">
              Com sólida atuação no mercado de médio e alto padrão, Roberto Andrade oferece uma consultoria estratégica e discreta para quem busca adquirir, alienar ou investir em imóveis de alto valor.
            </p>

            <p className="text-base text-[#A3A3A3] leading-relaxed">
              Cada cliente conta com um atendimento exclusivo, com análise minuciosa de documentação, avaliação precisa de mercado e suporte integral do primeiro contato até a lavratura da escritura.
            </p>

            {/* Diferenciais em lista */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-2.5 text-sm text-[#F5F5F0]">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Portfólio rigorosamente selecionado</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5F5F0]">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Sigilo e discrição absolutos</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5F5F0]">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Suporte em financiamento bancário</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#F5F5F0]">
                <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>Acompanhamento jurídico completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
