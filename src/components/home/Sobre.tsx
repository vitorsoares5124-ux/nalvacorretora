import Image from "next/image";
import { Award, Building2, CheckCircle2, Compass, Shield } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { getTema } from "@/lib/tema";

export async function Sobre() {
  const temaClaro = (await getTema()) === "light";

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-canvas border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Visual */}
          <Reveal variant="right" className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={temaClaro ? "/images/perfil-light.png" : "/images/essafoto.png"}
                alt="Roberto Andrade - Consultoria Imobiliária"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
              
              {/* Badge de Experiência */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md border border-gold-primary/30">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gold-primary p-2.5 text-on-gold">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">Roberto Andrade</h4>
                    <p className="text-xs text-gold-primary">Corretor & Avaliador Imobiliário</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Coluna Texto */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="up">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-primary">
                <span>Trajetória & Compromisso</span>
              </div>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                Assessoria personalizada na busca do seu imóvel{" "}
                <span className="gold-gradient-text">ideal</span>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <p className="text-base text-ink-soft leading-relaxed">
                Com sólida atuação no mercado de médio e alto padrão, Roberto Andrade oferece uma consultoria estratégica e discreta para quem busca adquirir, alienar ou investir em imóveis de alto valor.
              </p>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <p className="text-base text-ink-soft leading-relaxed">
                Cada cliente conta com um atendimento exclusivo, com análise minuciosa de documentação, avaliação precisa de mercado e suporte integral do primeiro contato até a lavratura da escritura.
              </p>
            </Reveal>

            {/* Diferenciais em lista */}
            <Reveal variant="up" delay={320}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                <div className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                  <span>Portfólio rigorosamente selecionado</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                  <span>Sigilo e discrição absolutos</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                  <span>Suporte em financiamento bancário</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="h-4 w-4 text-gold-primary shrink-0" />
                  <span>Acompanhamento jurídico completo</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pilares de Valor */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-line/80 text-left">
          <Reveal variant="up" delay={0}>
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface/60 border border-line-faint">
              <div className="rounded-lg bg-elevated p-2 text-gold-primary">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink">Curadoria Exclusiva</h4>
                <p className="text-xs text-ink-soft mt-0.5">Propriedades inspecionadas com documentação 100% regular.</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface/60 border border-line-faint">
              <div className="rounded-lg bg-elevated p-2 text-gold-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink">Segurança Jurídica</h4>
                <p className="text-xs text-ink-soft mt-0.5">Assessoria em todas as etapas contratuais e cartorárias.</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface/60 border border-line-faint">
              <div className="rounded-lg bg-elevated p-2 text-gold-primary">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink">Atendimento Consultivo</h4>
                <p className="text-xs text-ink-soft mt-0.5">Discrição total e foco nas reais necessidades do cliente.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
