import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas text-ink-soft pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-line-faint">
          {/* Coluna 1: Marca e Logo */}
          <Reveal variant="up" className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-32">
                <Image
                  src="/images/logo.png"
                  alt="RA Imóveis"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-md text-ink-soft">
              Consultoria imobiliária especializada em propriedades de alto padrão e oportunidades de investimento exclusivas. Atendimento humanizado, discrição e excelência em cada negociação.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-gold-primary pt-2">
              <ShieldCheck className="h-4 w-4" />
              <span>CRECI 00000-J • Consultoria Imobiliária</span>
            </div>
          </Reveal>

          {/* Coluna 2: Navegação */}
          <Reveal variant="up" delay={120} className="space-y-3">
            <h3 className="text-sm font-semibold text-ink tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#destaques" className="hover:text-gold-light transition-colors">
                  Imóveis em Destaque
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-gold-light transition-colors">
                  Sobre Roberto Andrade
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-gold-light transition-colors">
                  Atendimento Exclusivo
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Coluna 3: Contato Direto */}
          <Reveal variant="up" delay={240} className="space-y-3">
            <h3 className="text-sm font-semibold text-ink tracking-wider uppercase">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5511966747811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald" />
                  <span>(11) 96674-7811</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-primary" />
                <span className="truncate">contato@raimoveis.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold-primary shrink-0 mt-0.5" />
                <span>São Paulo / SP • Atendimento com Hora Marcada</span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Rodapé inferior */}
        <Reveal
          variant="fade"
          delay={200}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted"
        >
          <p>© {new Date().getFullYear()} RA Imóveis — Roberto Andrade. Todos os direitos reservados.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-ink-soft transition-colors">Privacidade</span>
            <span>•</span>
            <span className="hover:text-ink-soft transition-colors">Termos</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
