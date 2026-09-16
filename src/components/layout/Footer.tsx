import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] bg-[#0A0A0A] text-[#A3A3A3] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1F1F1F]">
          {/* Coluna 1: Marca e Logo */}
          <div className="md:col-span-2 space-y-4">
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
            <p className="text-sm leading-relaxed max-w-md text-[#A3A3A3]">
              Consultoria imobiliária especializada em propriedades de alto padrão e oportunidades de investimento exclusivas. Atendimento humanizado, discrição e excelência em cada negociação.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-[#D4AF37] pt-2">
              <ShieldCheck className="h-4 w-4" />
              <span>CRECI 00000-J • Consultoria Imobiliária</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F5F0] tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#destaques" className="hover:text-[#F4C430] transition-colors">
                  Imóveis em Destaque
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#F4C430] transition-colors">
                  Sobre Roberto Andrade
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#F4C430] transition-colors">
                  Atendimento Exclusivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F5F0] tracking-wider uppercase">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#10B981] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#10B981]" />
                  <span>(11) 99999-9999</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#D4AF37]" />
                <span className="truncate">contato@raimoveis.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>São Paulo / SP • Atendimento com Hora Marcada</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <p>© {new Date().getFullYear()} RA Imóveis — Roberto Andrade. Todos os direitos reservados.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-[#A3A3A3] transition-colors">Privacidade</span>
            <span>•</span>
            <span className="hover:text-[#A3A3A3] transition-colors">Termos</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
